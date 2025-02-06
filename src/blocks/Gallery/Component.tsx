import Gallery1 from '@/blocks/Gallery/gallery1'
import Gallery2 from '@/blocks/Gallery/gallery2'
import Gallery3 from '@/blocks/Gallery/gallery3'
import Gallery4 from '@/blocks/Gallery/gallery4'
import Gallery5 from '@/blocks/Gallery/gallery5'
import Gallery6 from '@/blocks/Gallery/gallery6'
import { Page } from '@/payload-types'
import { GalleryDesignVersion } from './config'

type Gallery<T extends string = string> = Required<Record<GalleryDesignVersion, React.FC<any>>> & Record<T, React.FC<any>>;

const galleries: Gallery = {
  GALLERY1: Gallery1,
  GALLERY2: Gallery2,
  GALLERY3: Gallery3,
  GALLERY4: Gallery4,
  GALLERY5: Gallery5,
  GALLERY6: Gallery6,
}

export const GalleryBlock: React.FC<Page['layout'][0]> = (props) => {
  if (props.blockType !== 'gallery') return null

  const { designVersion } = props || {}

  if (!designVersion) return null

  const GalleryToRender = galleries[designVersion]

  if (!GalleryToRender) return null

  return <GalleryToRender {...props} />
}