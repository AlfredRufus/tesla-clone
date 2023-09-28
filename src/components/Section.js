import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,backgroundImg,Leftbuttontitle, Rightbuttontitle,des}) {
  return (
    <Wrap bgImg={backgroundImg}>
        <ItemText>
        <Fade bottom>
            <Title>
            <h1>{title}</h1>
            </Title>
            <Description>
            <p>{des}</p>
            </Description>
        </Fade>
        </ItemText>
        
        <Down>
        <Fade bottom>
            <ButtonGroup>
            <LeftButton>
                {Leftbuttontitle}
            </LeftButton>
            {Rightbuttontitle &&
                <RightButton>
                    {Rightbuttontitle}
                </RightButton>
            }
            
            </ButtonGroup>
        </Fade>
        <DownArrow src='images/down-arrow.svg'/>
        </Down>
        
    </Wrap>
  )
}

const Wrap = styled.div`
    
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`
const Title = styled.div`
    margin-bottom: 15px;
    font-weight: bold;
`
const Description = styled.div``



const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    color: black;
    font-size: 50 px;
    
    
`

const Down = styled.div``

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction:column;
    }
`
const LeftButton  = styled.div`
    background-color: rgba(0,0,0);
    height: 40px;
    width: 400px;
    color: white;
    font: bold;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 15px;
    text-transform: uppercase;
    cursor: pointer;
    opacity: 0.75;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`

const DownArrow = styled.img`
   
    height: 40px;
    animation: pop infinite 1.5s;
    overflow-x: hidden;
    cursor: pointer;

`
export default Section