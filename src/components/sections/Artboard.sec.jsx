import { Box, Button } from 'components';
import { GlobalContext } from 'context';
import { SHOW_MODAL } from 'context/types';
import React, { useContext } from 'react';
import styled from 'styled-components';

const Artboard = () => {
    const { modalReducer } = useContext(GlobalContext);

    return (
        <Canvas>
            <GameStarter secondary color="purple" onClick={() => modalReducer(SHOW_MODAL)}>
                <svg
                    className="artboard_btn-svg"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C17.5228 2 22 6.47716 22 12C22 17.5228 17.5228 22 12 22C6.47716 22 2 17.5228 2 12C2 6.47716 6.47716 2 12 2Z"
                        stroke="#200E32"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.0501 12.4669C14.3211 13.2529 12.3371 14.5829 11.3221 15.0099C11.1601 15.0779 10.7471 15.2219 10.6581 15.2239C10.4691 15.2299 10.2871 15.1239 10.1991 14.9539C10.1651 14.8879 10.0651 14.4569 10.0331 14.2649C9.93811 13.6809 9.88911 12.7739 9.89011 11.8619C9.88911 10.9049 9.94211 9.95489 10.0481 9.37689C10.0761 9.22089 10.1581 8.86189 10.1821 8.80389C10.2271 8.69589 10.3091 8.61089 10.4081 8.55789C10.4841 8.51689 10.5711 8.49489 10.6581 8.49789C10.7471 8.49989 11.1091 8.62689 11.2331 8.67589C12.2111 9.05589 14.2801 10.4339 15.0401 11.2439C15.1081 11.3169 15.2951 11.5129 15.3261 11.5529C15.3971 11.6429 15.4321 11.7519 15.4321 11.8619C15.4321 11.9639 15.4011 12.0679 15.3371 12.1549C15.3041 12.1999 15.1131 12.3999 15.0501 12.4669Z"
                        stroke="#200E32"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="artboard_btn-content">Let&apos;s, start the game!</span>
            </GameStarter>
        </Canvas>
    );
};

export default Artboard;

const Canvas = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const GameStarter = styled(Button)`
    display: flex;
    align-items: center;
    svg {
        path {
            stroke: ${(props) => props.theme.colors.purple.dark};
        }
    }
    span {
        margin-left: 1rem;
    }
`;
