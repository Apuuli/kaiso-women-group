import React from "react"
import {
  BannerWrappper,
  BannerImage,
  BannerText,
  BannerTextWrapper,
  BannerBody,
  BannerHeader,
} from "./banner.elements"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
  return (
    <BannerWrappper>
      <BannerImage>
        <StaticImage
          src="../../images/banner.png"
          alt="Kaiso women dance group Singing"
          as="section"
          placeholder="tracedSVG"
          className="banner-image"
        />
      </BannerImage>
      <BannerTextWrapper>
        <BannerText>
          <BannerHeader>
            Surely, it's about <span className="women"> Women</span> and{" "}
            <span className="environment">Environment</span> in the nutshell
          </BannerHeader>
          <BannerBody>
            ...empowered women in Inclusive and Ecologically Sustainable
            Development.
          </BannerBody>
        </BannerText>
      </BannerTextWrapper>
    </BannerWrappper>
  )
}

export default Banner
