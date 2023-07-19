'use client'

import React, { useRef } from 'react'
import Text3D from './Text3D'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

interface navlinksProps {

}

const Navlinks: React.FC<navlinksProps> = () => {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-100vh'])

  return (
    <div ref = {targetRef} className = 'h-[130vh]'>
      <div 
        data-scroll
        data-scroll-speed = '0.2'
        className = {`sticky saturate-10 top-0 m-auto h-[130vh] w-[130vw]`}>
        <Image src = '/images/18-Grizzlies-at-dawn.jpg' quality = {100} priority fill = {true} alt = 'grizzly'/>
      </div>
      <div>
        <div className = 'pointer-events-none absolute text-[10vw] font-bold z-20 top-0'>
          <div 
            data-scroll
            data-scroll-speed = '0.9'
            className = 'flex text-pastel-gray-light justify-center w-screen mt-[25vh] h-[130vh]'>
              <p>
                danny
                <br/>
                green
              </p>
          </div>
        </div>
      </div>
      <div>
        <div className = 'absolute z-20 top-0 h-screen'>
          <div 
            data-scroll
            data-scroll-speed = '0.2'>
            <div className = 'transform ml-[5vw] mt-[30vh] rotate-x-[-5deg] rotate-z-[-5deg] h-[130vh] flex flex-col items-start'>
                
                <Text3D primary = {"Magestic"} secondary = {"Tigers"}/>
                <Text3D primary = {"Wild"} secondary = {"Alaska"}/> 
                <Text3D primary = {"Elusive"} secondary = {"Wolves"}/>
                <Text3D primary = {"British"} secondary = {"Coasts"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navlinks