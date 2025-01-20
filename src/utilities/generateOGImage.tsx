import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { Args, queryPageBySlug, resolveParams } from '@/app/(frontend)/[localeOrSlug]/[slug]/page'
import { loadGoogleFont } from './loadGoogleFont'


/**
 * OG Image generation. PayloadCMS can'T be run on edge routes, so prevent setting the open graph routes to edge. 
 * We are reading the default OG Image from the public directory
 */

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
export const alt = 'PayBlocks'
const defaultTitle = 'PayBlocks'

export default async function generateOGImage(props: Args) {
  /**
   * opengraph-image on root layer is behaviour differently than page.tsx.. props.params is undefined
   * so we have to add it manually
   */
  let props2 = props
  if (!props2.params) {
    props2 = {
      ...props,
      params: Promise.resolve({}),
    }
  }

  const { locale, slug } = await resolveParams(props2)
  try {
    // Get the title from Payload if slug is provided
    let title = defaultTitle
    if (slug) {
      const page = await queryPageBySlug({ slug, locale })
      title = page.meta?.title || page.title || defaultTitle
    }

    // Load the background image from public directory
    const backgroundImage = await readFile(join(process.cwd(), 'public', 'payblocksdefaultogbackground.png'))
    const backgroundImageSrc = Uint8Array.from(backgroundImage).buffer

    // Load the font
    const fontData = await loadGoogleFont('Inter', title)

    return new ImageResponse(
      (
        <div
          style={{
            background: '#fff',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {/* Background image */}
          <img
            src={backgroundImageSrc as unknown as string}
            alt="Background"
            width={size.width}
            height={size.height}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Title container with fixed height */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '60px',
              maxWidth: '70%',
              minHeight: '200px',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                lineHeight: '1.4',
                fontWeight: '600',
                color: 'black',
                textAlign: 'left',
                margin: '0',
                fontFamily: 'Inter',
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
