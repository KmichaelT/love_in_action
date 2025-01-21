import { ImageResponse } from 'next/og'
import { NEXT_PUBLIC_SERVER_URL } from 'next.config'
import { loadGoogleFont } from './loadGoogleFont'
import { Args, queryPageBySlug } from '@/app/(frontend)/[localeOrSlug]/[slug]/page'
import { resolveParams } from '@/utilities/resolveParams'

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

  const { locale, slug } = resolveParams(await props2.params)
  try {
    // Get the title from Payload if slug is provided
    let title = defaultTitle
    if (slug) {
      const page = await queryPageBySlug({ slug, locale })
      title = page.meta?.title || page.title || defaultTitle
    }

    // Load the background image. Replace with your own background image
    const backgroundImageUrl = `${NEXT_PUBLIC_SERVER_URL}/payblocksdefaultogbackground.png`
    const backgroundImageData = await fetch(backgroundImageUrl).then((res) => res.arrayBuffer())

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
            src={backgroundImageData as unknown as string}
            alt="Background"
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
              minHeight: '200px', // Approximately 3 lines of text plus padding
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
            weight: 600,
          },
        ],
      },
    )
  } catch (e) {
    console.error('Error generating OG image:', e)
    return new Response('Failed to generate image', { status: 500 })
  }
}
