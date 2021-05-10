import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Button = ({ children, ...otherProps },ref) => (
    <Btn 
    ref={ref}
    whileTap ={{ scale : 0.98 }}
    {...otherProps}>
    {children}
    </Btn>
)

export default forwardRef(Button)

const Btn = styled(motion.button)`
min-width : 20rem;
padding: 1.8rem 2rem;
border-radius : 1.4rem;
outline: none;
border: none;
font-family: ${props => props.theme.fonts.body};
font-size: 1.8rem;
font-weight : 600;
cursor : pointer;
color : ${props => {
    switch(props.type){
        case 'blue':
            return props.theme.colors.blue.dark;
        case 'purple':
            return props.theme.colors.purple.dark;
        case 'green':
            return props.theme.colors.blue.dark;
        default: return props.theme.colors.blue.dark;
    }
}};
background-color : ${props => {
     switch(props.type){
        case 'blue':
            return props.theme.colors.blue.light;
        case 'purple':
            return props.theme.colors.purple.light;
        case 'blue':
            return props.theme.colors.blue.light;
        default: return props.theme.colors.blue.light;
    }
}};
`