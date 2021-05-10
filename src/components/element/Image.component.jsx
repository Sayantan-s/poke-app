import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Image = ({ src, alt, fallback : Fallback, imageAnimation,  ...otherImgProps }) => {
    return (
        <Img {...otherImgProps}>
          {
              src ?  <motion.img 
              src={src} 
              alt={alt}
              {...imageAnimation} 
            /> : <Fallback />
          }
        </Img>
    )
}

export default Image

const Img = styled(motion.div)`
width : ${props => `${props.width}px`};
height : ${props => `${props.height}px`};
max-height : ${props => `${props.maxHeight}px`};
img{
    object-fit : cover;
    width : 100%;
    height : 100%;
}
`