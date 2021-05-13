import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing : border-box;
    padding : 0;
    margin : 0;
}
html{
        scroll-behavior : smooth;
        font-size : 62.5%;
        @media only screen and (max-width: ${(props) => props.theme.breakpoints.tab}){
            font-size : 50%;
        }
        body{
            max-width : 100vw;
            overflow-x : hidden;
            font-size: 1.4rem;
            font-family : ${(props) => props.theme.fonts.body};
            font-weight : 500;
            position : relative;
            #root{
                    max-width : inherit;
                    overflow-x : hidden;
                    min-height : 100vh;
                    background-color : ${(props) => props.theme.colors.backgroundColor};
                }
            #modals{
                position : absolute;
                top: 50%;
                left: 50%;
                transform : translate(-50%, -50%);
                z-index: 100;
            }
            #backdrop{
                position : fixed;
                top: 0;
                left: 0;
                z-index: 99;
            }
        }
    }
`;
