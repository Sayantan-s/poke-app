import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Toast = ({ condition, text }) => {

    const animationProps = {
        from : {
            opacity : 0,
            y: 50
        },
        to : {
            opacity : 1,
            y: 0,
            transition : {
                duration : 0.5,
                stiffness : 40
            }
        },
        exit : {
            opacity : 0,
            y: 50,
            transition : {
                duration : 0.5,
                stiffness : 40
            }
        }
    }

    return createPortal(
        <AnimatePresence>
            {
                condition && <ToastContainer>
                    <ToastSec
                    variants={animationProps}
                    initial="from"
                    animate="to"
                    exit="exit"
                    >
                         {text}
                </ToastSec>
                </ToastContainer>
            }
        </AnimatePresence>,
        document.getElementById('toasts')
    )
}

export default Toast

const ToastSec = styled(motion.figure)`
    margin : 0;
    padding : 2rem 1rem;
    min-width : 30rem;
    text-align : center;
    border-radius : 1.6rem;
    color : ${props => props.theme.colors.white};
    width: max-content;
`
const ToastContainer = styled.div`
position : fixed;
bottom: 2rem;
width: 100%;
z-index : 200;
height : max-content;
display : flex;
justify-content:center;
`