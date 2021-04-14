import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import programs from "../constants/programs"
import { StyledSection } from "./kwgSection/section.styled"
import Activity from "./Activity"
import Thematic from "./Thematic"
export const Programs = () => {
  return (
    <StyledSection>
      {programs &&
        programs.map(({ title, activities, image }, index) => (
          <Thematic key={index} title={title}>
            {activities &&
              activities.map((item, index) => (
                <Activity key={index} item={item} />
              ))}
          </Thematic>
        ))}
    </StyledSection>
  )
}
