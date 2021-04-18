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
          className="banner-image"
        />
      </BannerImage>
      <BannerTextWrapper>
        <BannerText>
          <BannerHeader>
            Surely, it's about <span className="women"> Women</span> and{" "}
            <span className="environment">Environment</span> in the Nutshell
          </BannerHeader>
          <BannerBody>
            <figure>
              <blockquote cite="" />
              <q>
                For the sake of our families'health and our kids'future, we have
                a moral obligation to act on climte...
              </q>
              <figcaption>
                <span>Regina McCarthy</span>,<cite>EPA administrator</cite>
              </figcaption>
            </figure>
          </BannerBody>
        </BannerText>
      </BannerTextWrapper>
    </BannerWrappper>
  )
}

export default Banner
