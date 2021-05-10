import { TextField, Typography, Image, Button } from 'components'
import { motion } from 'framer-motion'
import http from 'lib/https'
import Loader from 'lib/Loader'
import randomize from 'lib/randomize'
import React, { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Modal = () => {

    const [ pokeData, setData ] = useState({
        pokeImg : '',
        pokeName : ''
    });

    const [ pokeGuess, setGuess ] = useState('');

    const onChangeHandler = eve => {
        setGuess(eve.target.value)
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

    return createPortal(
        <Dialog>
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
                <Form>
                    <TextField 
                        placeholder="e.g. bulbasor"
                        value={pokeGuess}
                        onChange={onChangeHandler}
                    />
                    <Button>
                        Submit
                    </Button>
                </Form>
                <div className="panel_requesters">
                    <Button
                    type="purple"
                    className="panel_requesters-random" 
                    onClick={() => requester('RANDOMIZE')}>
                        Randomize 
                    </Button>
                    <Button
                    className="panel_requesters-new" 
                    onClick={() => requester('NEW_POKE')}>
                        New Pokemon
                    </Button>
                </div>
            </Panel>
        </Dialog>,
        document.getElementById('modals')
    )
}

export default Modal


const Dialog = styled(motion.figure)`
background-color : ${props => props.theme.colors.modal};
width: 90rem;
height:45rem;
border-radius : 3rem;
padding : 2rem 4rem;
.poke{
    position: relative;
    &-img{
        position: absolute;
        top: -120px;
        left: 50%;
        transform : translate(-50%,0%);
    }
}
`
const Form = styled.form`
display : flex;
width: 80%;
margin-bottom : 3rem;
input{
    flex : 1;
    margin-right : 1.6rem;
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
