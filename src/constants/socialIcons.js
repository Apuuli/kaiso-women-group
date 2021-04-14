import React from "react"

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"
import styled from "styled-components"

export default [
  {
    icon: <FaFacebook className="icon fab" />,
    path: `https://facebook.com`,
  },
  {
    icon: <FaInstagram className="icon fai" />,
    path: `https://facebook.com`,
  },
  {
    icon: <FaTwitter className="icon fat" />,
    path: `https://facebook.com`,
  },
  {
    icon: <FaWhatsapp className="icon faw" />,
    path: `https://wa.me/+256777274131>`,
  },
  {
    icon: <FaYoutube className="icon faw" />,
    path: `https://wa.me/+256777274131>`,
  },
]
// export const twitter = styled(FaTwitter)`
//   font-size: 1.3rem;
//   color: lightblue;
// `
// export const facebook = styled(FaFacebook)`
//   font-size: 1.3rem;
//   color: darkblue;
// `
// export const instagram = styled(FaInstagram)`
//   font-size: 1.3rem;
//   color: lightpink;
// `
// export const whatsapp = styled(FaWhatsapp)`
//   font-size: 1.3rem;
//   color: lightgreen;
// `
