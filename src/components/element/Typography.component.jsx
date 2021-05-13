import React from 'react';
import styled from 'styled-components';

const Typography = ({ as, ...otherProps }) => {
    let ele;

    switch (as) {
        case 'h1':
            ele = <H1 {...otherProps} />;
            break;
        case 'h2':
            ele = <H2 {...otherProps} />;
            break;

        case 'h3':
            ele = <H3 {...otherProps} />;
            break;
        case 'p':
            ele = <P {...otherProps} />;
            break;
        default:
            ele = <p {...otherProps} />;
    }
    return ele;
};

export default Typography;

const H1 = styled.h1`
    font-size: 6rem;
    color: ${(props) => props.color || props.theme.colors.gray.dark};
`;

const H2 = styled.h2`
    font-size: 4rem;
    color: ${(props) => props.color || props.theme.colors.gray.dark};
`;

const H3 = styled.h3`
    font-size: 2rem;
    color: ${(props) => props.color || props.theme.colors.gray.dark};
`;

const P = styled.p`
    font-size: ${(props) => (props.lg ? '2rem' : '1.8rem')};
    color: ${(props) => props.color || props.theme.colors.gray.dark};
`;
