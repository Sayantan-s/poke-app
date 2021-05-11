import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

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
min-width : ${props => {
    switch(props.minWidth){
        case 'small':
            return '8rem';
        case 'medium':
            return '12rem';
        case 'large':
            return '20rem';
        default: return 'auto';
    }
}};
padding: 1.8rem 2rem;
border-radius : 1.4rem;
outline: none;
border: none;
font-family: ${props => props.theme.fonts.body};
font-size: 1.8rem;
font-weight : 600;
cursor : pointer;
${props => props.primary && css`
    color : ${props => props.theme.colors.white};
    background-color : ${props => {
        switch(props.color){
            case 'blue':
                return props.theme.colors.blue.medium;
            case 'purple':
                return props.theme.colors.purple.medium;
            case 'green':
                return props.theme.colors.success.medium;
            default: return props.theme.colors.blue.dark;
        }
    }};
`}
${props => props.secondary && css`
    color : ${props => {
        switch(props.color){
            case 'blue':
                return props.theme.colors.blue.dark;
            case 'purple':
                return props.theme.colors.purple.dark;
            case 'green':
                return props.theme.colors.success.dark;
            default: return props.theme.colors.blue.dark;
        }
    }};
    background-color : ${props => {
        switch(props.color){
            case 'blue':
                return props.theme.colors.blue.light;
            case 'purple':
                return props.theme.colors.purple.light;
            case 'green':
                return props.theme.colors.success.light;
            default: return props.theme.colors.blue.light;
        }
    }};
`}
`