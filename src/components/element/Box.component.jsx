import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Box = ({ children, ...otherProps },ref) => {
    return (
       <Container
        ref={ref} 
       {...otherProps}>
           {children}
       </Container>
    )
}

export default forwardRef(Box)

const Container = styled.div`
max-width : 144rem;
margin : 0 auto;
font-weight : 600;
`