'use client'

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

type SliderBtnsProps = {
  containerStyles: string,
  btnStyles: string,
  iconStyles?: string
}

export default function WorkSliderBtns({containerStyles, btnStyles, iconStyles}: SliderBtnsProps) {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} onClick={() => swiper.slidePrev()}/>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()}/>
      </button>
    </div>
  )
}
