
import { TestimonialDesignVersion } from './config'
import Testimonial2 from '@/blocks/Testimonial/testimonial2'
import Testimonial3 from '@/blocks/Testimonial/testimonial3'
import Testimonial4 from '@/blocks/Testimonial/testimonial4'
import Testimonial6 from '@/blocks/Testimonial/testimonial6'
import Testimonial7 from '@/blocks/Testimonial/testimonial7'
import Testimonial13 from '@/blocks/Testimonial/testimonial13'
import Testimonial10 from '@/blocks/Testimonial/testimonial10'
import Testimonial16 from '@/blocks/Testimonial/testimonial16'
import Testimonial17 from '@/blocks/Testimonial/testimonial17'
import Testimonial18 from '@/blocks/Testimonial/testimonial18'
import Testimonial19 from '@/blocks/Testimonial/testimonial19'

type Testimonial = {
  [key in TestimonialDesignVersion]: React.FC
}

const testimonial: Testimonial = {
  TESTIMONIAL2: Testimonial2,
  TESTIMONIAL3: Testimonial3,
  TESTIMONIAL4: Testimonial4,
  TESTIMONIAL6: Testimonial6,
  TESTIMONIAL7: Testimonial7,
  TESTIMONIAL13: Testimonial13,
  TESTIMONIAL10: Testimonial10,
  TESTIMONIAL16: Testimonial16,
  TESTIMONIAL17: Testimonial17,
  TESTIMONIAL18: Testimonial18,
  TESTIMONIAL19: Testimonial19,
}

export const TestimonialBlock: React.FC<any> = (props) => {
  if (props.blockType !== 'testimonial') return null

  const { designVersion } = props || {}

  if (!designVersion) return null

  const TestimonialToRender = testimonial[designVersion as TestimonialDesignVersion]

  if (!TestimonialToRender) return null

  return <TestimonialToRender {...props} />
}

export default TestimonialBlock