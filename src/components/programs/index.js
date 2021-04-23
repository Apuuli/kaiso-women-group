import React from "react"
import {
  Program,
  ProgramContainer,
  ProgramText,
  ProgramHeader,
  ProgramBody,
  ProgramActivity,
} from "./program.elements"
import { FaHashtag } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Programs = () => {
  const data = useStaticQuery(graphql`
    {
      allProgramsJson {
        nodes {
          activities
          title
          image {
            childImageSharp {
              gatsbyImageData(tracedSVGOptions: {}, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  const {
    allProgramsJson: { nodes: programs },
  } = data
  return (
    <ProgramContainer>
      {programs &&
        programs.map(({ image, activities, title }, index) => {
          const sureImage = getImage(image)
          return (
            <Program key={index}>
              <GatsbyImage
                image={sureImage}
                alt={title}
                className="program-image-wrapper"
              />
              <ProgramText>
                <ProgramHeader>{title}</ProgramHeader>
                <ProgramBody>
                  {activities &&
                    activities.map((activity, index) => (
                      <ProgramActivity key={index}>
                        <span>
                          <FaHashtag />
                        </span>
                        <span>{activity}</span>
                      </ProgramActivity>
                    ))}
                </ProgramBody>
              </ProgramText>
            </Program>
          )
        })}
    </ProgramContainer>
  )
}

export default Programs
