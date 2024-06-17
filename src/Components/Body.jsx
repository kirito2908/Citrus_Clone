import React from 'react'
import { AboutAudioPro } from './BodyComponents/AboutAudioPro'
import WhatWeDo from './BodyComponents/WhatWeDo'
import Service from './Service'
import Redesign from './Redesign'
import Facts from './Facts'

export const Body = () => {
  return (
    <>
        <AboutAudioPro />
        <WhatWeDo />
        <Service />
        <Redesign />
        <Facts />
    </>
  )
}
