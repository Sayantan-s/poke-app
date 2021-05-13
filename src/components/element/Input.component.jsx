import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

const TextField = ({
    inpType,
    ElementConfig,
    value,
    onChange,
    children,
    className,
    ...otherInpProps
}) => {
    let inputEle = null;

    switch (inpType) {
        case 'input':
            inputEle = <Input {...ElementConfig} value={value} onChange={onChange} />;
            break;
        case 'textarea':
            inputEle = <Textarea {...ElementConfig} value={value} onChange={onChange} />;
            break;
        default:
            inputEle = <Input {...otherInpProps} value={value} onChange={onChange} />;
    }

    return (
        <Wrapper className={className}>
            {inputEle}
            {children}
        </Wrapper>
    );
};

export default TextField;

const commonStyles = css`
    outline: none;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 1.6rem;
    font-weight: 500;
    border: none;
    color: ${(props) => props.theme.colors.gray.dark};
    background-color: transparent;
    ::placeholder {
        color: ${(props) => props.theme.colors.gray.medium};
    }
`;

const Textarea = styled(motion.textarea)`
    ${commonStyles}
`;
const Input = styled(motion.input)`
    ${commonStyles}
`;
const Wrapper = styled.div`
    border: 2px solid ${(props) => props.theme.colors.gray.light};
    padding: 1.8rem;
    border-radius: 1.8rem;
    display: flex;
    align-items: center;
`;
