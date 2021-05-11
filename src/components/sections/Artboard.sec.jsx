import { Box, Button } from 'components'
import { GlobalContext } from 'context'
import { SHOW_MODAL } from 'context/types'
import React, { useContext } from 'react'
import styled from 'styled-components'

const Artboard = () => {
  const { modalReducer } = useContext(GlobalContext)

    return (
      <Canvas>
         <Button 
          secondary 
          color="purple" 
          onClick={() => modalReducer(SHOW_MODAL)}>
           Let's, start the game!
         </Button>
      </Canvas>
    )
}

export default Artboard

const Canvas = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`