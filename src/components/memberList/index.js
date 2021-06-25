import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaEnvelopeOpenText, FaMobile } from "react-icons/fa"
import {
  AvatarList,
  Avatar,
  AvatarCard,
  AvatarInfo,
  Handles,
} from "./memberList.elements"

const MemberList = () => {
  const data = useStaticQuery(graphql`
    {
      allBoardOfDirectorsJson {
        nodes {
          position
          tel
          name
          email
          image {
            childImageSharp {
              gatsbyImageData(tracedSVGOptions: {}, width: 400)
            }
          }
        }
      }
    }
  `)

  const {
    allBoardOfDirectorsJson: { nodes: directors },
  } = data

  return (
    <AvatarList>
      {directors &&
        directors.map(({ name, email, position, tel, image }, index) => {
          const avatar = getImage(image)
          return (
            <AvatarCard key={index}>
              <Avatar>
                <GatsbyImage
                  image={avatar}
                  alt={name}
                  title={position}
                  className="avatar"
                />
              </Avatar>
              <AvatarInfo>
                <h2>
                  {name} ({position})
                </h2>
                <Handles>
                  <a href={`tel:${tel}`}>
                    <FaMobile />
                  </a>
                  <a href={`mailto:${email}`}>
                    <FaEnvelopeOpenText /> {""}
                    {email}
                  </a>
                </Handles>
              </AvatarInfo>
            </AvatarCard>
          )
        })}
    </AvatarList>
  )
}
export default MemberList
