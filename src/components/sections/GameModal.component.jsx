import { TextField, Typography, Image, Button } from 'components'
import { motion } from 'framer-motion'
import http from 'lib/https'
import Loader from 'lib/Loader'
import randomize from 'lib/randomize'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import Lottie from 'react-lottie';
import { Failure, Success } from 'animations'
import { GlobalContext } from 'context'
import { CLOSE_MODAL } from 'context/types'

const Modal = () => {

    const [ pokeData, setData ] = useState({
        pokeImg : '',
        pokeName : ''
    });

    const [ pokeGuess, setGuess ] = useState('');

    const [ result, setResult ] = useState({
        isCorrect : false,
        error : '',
    })

    const { modalReducer } = useContext(GlobalContext)

    const validator = type => {
        switch(type){
            case 'EMPTY':
                return setResult(prevState => ({
                    ...prevState,
                    isCorrect : false,
                    error : `Please don't leave the guess, blank!`
                }))
            case 'WRONG_INPUT':
                return setResult(prevState => ({
                    ...prevState,
                    isCorrect : false,
                    error : `Wrong answer, please try again!`
                }))
            case 'RIGHT_INPUT':
                return setResult(prevState => ({
                    ...prevState,
                    isCorrect : true,
                    error : ``
                }))
            default :
                return setResult(prevState => ({
                        ...prevState,
                        isCorrect : false,
                        error : ``
                    }))
        }
    }

    const onChangeHandler = eve => {
        setGuess(eve.target.value);
        validator();
    }

    const onSubmitHandler = eve => {
        eve.preventDefault();
        if(pokeGuess.trim() === '') validator('EMPTY')
        if(pokeGuess.toLowerCase() !== pokeData.pokeName.toLowerCase()) validator('WRONG_INPUT')
        if(pokeGuess.toLowerCase() === pokeData.pokeName.toLowerCase()) validator('RIGHT_INPUT')
    }

    const requester = useCallback(async req => {
        if(req === 'RANDOMIZE') {
         const { data,status } = await http.get(`pokemon/${randomize(649)}`);
         console.log(data)
         if(status === 200){
            setData(prevData => ({
                ...prevData,
                pokeImg : data.sprites?.other.dream_world.front_default,
                pokeName : data.name
            }))
         }
        }
        else if(req === 'NEW_POKE') {
         const res = await http.get(`type/${randomize(18)}`);
         const { data,status } = await http.get(`pokemon/${randomize(res.data.pokemon.length)}`);
         if(status === 200){
             setData(prevData => ({
                ...prevData,
                pokeImg : data.sprites?.other.dream_world.front_default,
                pokeName : data.name
            }))
         }
        }
     },[])

    useEffect(() => {
       requester('RANDOMIZE')
    },[requester])


    const animationOptions = {
        loop: false,
        autoplay: true, 
        animationData:  result.error ? Failure : Success,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return createPortal(
        <Dialog 
        initial={{ scale : 0 }}
        animate={{ scale : 1 }}
        exit={{ scale : 0 }} >
            <div className="poke">
                <Image
                    width={200}
                    height={200}
                    className="poke-img"
                    fallback={Loader}
                    src={pokeData.pokeImg} 
                    alt="poke"
                />
            </div>
            <Panel>
                <Typography 
                className="panel_header"
                as="h2">
                    Guess the pokemon!
                </Typography>
                <Form
                danger={result.error}
                success={result.isCorrect}
                onSubmit={onSubmitHandler}>
                    <div className="input">
                        <TextField 
                            className="input_field"
                            placeholder="e.g. bulbasor"
                            value={pokeGuess}
                            onChange={onChangeHandler}
                        >
                             { (result.error || result.isCorrect) && <Lottie  
                                options={animationOptions}
                                height={22}
                                width={22} 
                                />}
                        </TextField>
                    {result.error && <p className="input_error">{result.error}</p>}
                    </div>
                    <Button
                    minWidth="medium" 
                    secondary>
                        Submit
                    </Button>
                </Form>
                <div className="panel_requesters">
                    <Button
                    minWidth="large"
                    secondary
                    color="purple"
                    className="panel_requesters-random" 
                    onClick={() => requester('RANDOMIZE')}>
                        Randomize 
                    </Button>
                    <Button
                    primary
                    minWidth="large"
                    color="purple"
                    className="panel_requesters-new" 
                    onClick={() => requester('NEW_POKE')}>
                        New Pokemon
                    </Button>
                </div>
            </Panel>
            <CloseButton onClick={() => modalReducer(CLOSE_MODAL)}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.46447 15.5355L15.5355 8.46446" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8.46447 8.46447L15.5355 15.5355" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </CloseButton>
        </Dialog>,
        document.getElementById('modals')
    )
}

export default Modal


const Dialog = styled(motion.figure)`
background-color : ${props => props.theme.colors.white};
width: 90rem;
height:45rem;
border-radius : 3rem;
padding : 2rem 4rem;
.poke{
    position: relative;
    &-img{
        position: absolute;
        top: -12rem;
        left: 50%;
        transform : translate(-50%,0%);
        @media only screen and (max-width: ${props => props.theme.breakpoints.tab}){
            top: -18rem;
        }
        @media only screen and (max-width: ${props => props.theme.breakpoints.minTab}){
            top: -20rem;
        }
    }
}
@media only screen and (max-width: ${props => props.theme.breakpoints.minTab}){
    max-width: 100rem;
    width : max-content;
}
`
const Form = styled.form`
display : flex;
align-items: center;
width: 80%;
margin-bottom : 5rem;
position: relative;
.input{
    flex : 1;
    margin-right : 1.6rem;
    position: relative;
    input{
        width: 100%;
    }
    &_error{
        position: absolute;
        bottom: -2.5rem;
        color : ${props => props.theme.colors.danger.medium};
    }
    ${props => props.danger && css`
        input{
            color : ${props => props.theme.colors.danger.medium}
        }
        &_field{
            border: 2px solid ${props => props.theme.colors.danger.light};
        }
    `}
    ${props => props.success && css`
        input{
            color : ${props => props.theme.colors.success.medium}
        }
        &_field{
            border: 2px solid ${props => props.theme.colors.success.light};
        }
    `}
}
@media only screen and (max-width: ${props => props.theme.breakpoints.minTab}){
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    .input{
        margin-bottom: 1.6rem;
        margin-right : 0;
        &_error{
            text-align: center;
            width: 100%;
        }
    }
}
`

const Panel = styled.div`
display : flex;
justify-content: center;
align-items: center;
height: 100%;
flex-direction: column;
position: relative;
.panel {
    &_header{
        text-align : center;
        margin : 3rem 0 ;
    }
    &_poke{
        position: relative;
        width:100%;
        height: max-content;
        &-img{
            position: absolute;
            top: 0;
        }
    }
    &_requesters{
        &-new{
            margin-left: 2rem;
        }
    }
}
`

const CloseButton = styled(Button)`
padding:0;
width: 4rem;
height: 4rem;
background-color: ${props => props.theme.colors.danger.medium};
position: absolute;
top: 1.5rem;
right : 1.5rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow : 0px 1px 15px ${props => `${props.theme.colors.danger.medium}70` };
svg{
    width: 3rem;
    height: 3rem;
    path{
        stroke : ${props => props.theme.colors.white};
    }
}
`