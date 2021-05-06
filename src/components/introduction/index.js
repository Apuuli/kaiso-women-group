import { Link } from "gatsby"
import React from "react"
import { BackgroundText } from "./introduction.elements"

const Introduction = () => {
  return (
    <BackgroundText>
      <p>
        <Link to="/">Kaiso Women's Group (KWG)</Link> is a locally women-led
        group. It was formed to counter and address issues and challenges being
        exprienced by women through grassroot advocacy, awareness and activism
        of feminism as well as to mitigate any forms of violence aganist women
        in Kaiso. KWG is an active participant in grassroot environmentalism.
      </p>
      <p>
        Kaiso is a landing site on the eastern shoreline of lake Albert. Like
        other centers or landing sites in the Albertine region, Kaiso isn't
        exempted from effects of mass influxes of people who seek opportunities
        in the projected Oil and Gas, Cargo Industry resultant from the
        construction of the Kabale International airport as well as associted
        industries. Kaiso is situated in the host communities of kwangawali
        refugee camp, the biggest in Uganda.
      </p>
      <p>
        The Environment and female gender would pay heavier prices in
        realisations of these modern day developments. Studies such{" "}
        <a
          href="https://www.researchgate.net/publication/323655773_Experiences_of_Gender_Based_Violence_among_Refugee_Populations_in_Uganda_Evidence_from_Four_Refugee_Camps"
          target="_blank"
          rel="noopener noreferrer"
        >
          experiences of gender based violence among refugee populations in
          Uganda: Evidence from Four Refugee Camps
        </a>{" "}
        and the monthly thematic reports on SGBV by{" "}
        <a
          href="https://www.unhcr.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          United Nations High Commissioner for Refugees (UNHCR)
        </a>
        Uganda, offer an informed insights on the extent to which the sGBV vice
        has which perpetuated our commity. They all acknowledge women and girls
        as the most vulnerable and survivors of sGBV, including sexual
        exploitation and abuse (SEA), rape, forced and child marriage, and
        intimate partner violence (IPV) both in refugee settlements and their
        host communities of which Kaiso identifies with.
      </p>
    </BackgroundText>
  )
}

export default Introduction
