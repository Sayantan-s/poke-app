import { GlobalContext } from 'context';
import { CLOSE_MODAL } from 'context/types';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Backdrop = () => {
    const { modalReducer } = useContext(GlobalContext);

    return createPortal(
        <Paper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => modalReducer(CLOSE_MODAL)}
        />,
        document.getElementById('backdrop')
    );
};

export default Backdrop;

const Paper = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    cursor: pointer;
`;
