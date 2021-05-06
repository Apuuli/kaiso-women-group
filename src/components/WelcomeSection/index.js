import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Welcome, WelcomeText, WelcomeImage } from "./WelcomeSection.elements"

const WelcomeSection = () => {
  return (
    <Welcome>
      <WelcomeText>
        <p>
          We are solely a Local Women Community Based Organisation whose primary
          focus is on grassroot activism, advocacy and awareness of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Feminism"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Feminism{" "}
          </a>
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Environmentalism"
            target="_blank"
            rel="noopener noreferrer"
          >
            Environmentalism
          </a>{" "}
          in Kaiso and neigbouring Communities.
        </p>
        <p>
          Our focus groups include
          <a
            href="https://eige.europa.eu/thesaurus/terms/1292"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Migrant women
          </a>
          ,{" "}
          <a
            href="https://eige.europa.eu/thesaurus/terms/1346"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refugee Women and Girls
          </a>
          ,{" "}
          <a
            href="https://www.childmothers.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Child mothers
          </a>
          , Elderly women, Women living with Disabilites ,{" "}
          <a
            href="https://www.opensocietyfoundations.org/explainers/understanding-sex-work-open-society"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sex Workers
          </a>
          , Single mothers, Women living with HIV as well as women survivors of{" "}
          <a
            href="https://emergency.unhcr.org/entry/60283/sexual-and-gender-based-violence-sgbv-prevention-and-response"
            target="_blank"
            rel="noopener noreferrer"
          >
            sexual and Gender based Violence (sGBV)
          </a>{" "}
          .
        </p>
      </WelcomeText>
      <WelcomeImage>
        <StaticImage
          alt="Kaiso women display their Crafts"
          src="./../../images/WelcomeImage.png"
          placeholder="tracedSVG"
          layout="FullWidth"
          className="welcome-image"
        />
      </WelcomeImage>
    </Welcome>
  )
}

export default WelcomeSection
