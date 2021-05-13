import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Image = ({ src, alt, fallback: Fallback, ...otherImgProps }) => {
    return <Img {...otherImgProps}>{src ? <img src={src} alt={alt} /> : <Fallback />}</Img>;
};

export default Image;

const Img = styled(motion.div)`
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    max-height: ${(props) => `${props.maxHeight}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
