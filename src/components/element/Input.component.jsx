import { motion } from 'framer-motion';
import React from 'react'
import styled, { css } from 'styled-components'

const TextField = ({inpType,ElementConfig,value,onChange,...otherInpProps}) => {
   let inputEle = null;

   switch(inpType){
       case 'input': 
            inputEle = <Input
            {...ElementConfig} 
            value={value} 
            onChange={onChange}
            />
            break;
        case 'textarea' : 
            inputEle = <Textarea
            {...ElementConfig}
            value={value}
            onChange={onChange}
            />
            break;
        default:
            inputEle = <Input
            {...otherInpProps}
            value={value}
            onChange={onChange}
            />
   }

   return inputEle;
    
}

export default TextField

const commonStyles = css`
border: 2px solid ${props => props.theme.colors.gray.light};
padding : 1.8rem;
border-radius: 2rem;
outline: none;
font-family : ${props => props.theme.fonts.body};
font-size : 1.6rem;
font-weight : 500;
::placeholder{
    color : rgba(156, 163, 175, 0.8);
}

`

const Textarea = styled(motion.textarea)`
${commonStyles}
`
const Input = styled(motion.input)`
${commonStyles}
`
