import { motion } from 'framer-motion'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Modal = () => {
    return createPortal(
        <Dialog>
            Helloooo I am the game modal...
        </Dialog>,
        document.getElementById('modals')
    )
}

export default Modal


const Dialog = styled(motion.figure)`
background-color : ${props => props.theme.colors.modal};
width: 80rem;
height: 50rem;
border-radius : 3rem;
`