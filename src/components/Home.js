import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title = "Model S"
          backgroundImg ="model-s.jpg"
          Leftbuttontitle = "Book Now"
          Rightbuttontitle = "Learn More"
          des = "Luxury Electric Sedan with Performance"

        />
        <Section
          title = "Model Y"
          backgroundImg ="model-y.jpg"
          Leftbuttontitle = "Book Now"
          Rightbuttontitle = "Learn More"
          des = "Compact Electric SUV with Versatility"
        />
        <Section
          title = "Model 3"
          backgroundImg ="model-3.jpg"
          Leftbuttontitle = "Book Now"
          Rightbuttontitle = "Learn More"
          des = "Electric Sleek Affordable High-Tech Sedan"
        />
        <Section
          title = "Model X"
          backgroundImg ="model-x.jpg"
          Leftbuttontitle = "Book Now"
          Rightbuttontitle = "Learn More"
          des = "Sleek Electric SUV with Innovation"
        />
        <Section
          title = "Solar"
          backgroundImg ="solar-panel.jpg"
          Leftbuttontitle = "Learn More"
          Rightbuttontitle = "Learn More"
          des = "Solar power is incredibly useful, harnessing sunlight to generate clean and renewable electricity."
        />
        <Section
          title = "Solar for new roofs"
          backgroundImg ="solar-roof.jpg"
          Leftbuttontitle = "Book Now"
          Rightbuttontitle = "Learn More"
          des = "Allows homeowners and businesses to incorporate solar energy generation seamlessly into their building design"
        />
        <Section
          title = "Accessories"
          backgroundImg ="accessories.jpg"
          Leftbuttontitle = "Browse"
        />

        
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`

export default Home