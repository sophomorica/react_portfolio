import React, {useState} from 'react'
import Showcase from './Showcase'
import '../css/Showcase.css'
import {Row, Container, Col, } from 'react-bootstrap'
import { animated, useTransition, config} from 'react-spring'
import master from '../css/assets/showcase_master_1.gif'
import pokemon from '../css/assets/showcase_pokemon_1.gif'
import tic from '../css/assets/showcase_tic_2.gif'



const Test = () =>{
  const [showText, setShowText] = useState('a picture will go here')
  const [hover, setHover] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = [
    {id: 0, url: "https://media.giphy.com/media/da16C5iFg0qfL9W5GM/giphy.gif", link:("https://github.com/devpointlabs/masterclass"), explanation:"Create a class, Join a class, edit your classes, comment or reply to comments"},
    {id: 1, url: (pokemon), explanation:"Using API to display Pokemon and their attack moves, Filtering Star Wars characters in JSON and Grabbing Pictures from API, Using State Legislature API to find photos and personal links"},
    {id: 2, url:(tic) , explanation:"Using Javascript to Create an interactive tic-tac-toe game"}
  ]
  const pic = slides[index]

  const transitions = useTransition(pic, item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default,
  })
  
    const toggleHover = (id) =>{
      setIndex(id)
    }

return(
  <>
    <Showcase/>
    <section >
      <Container fluid>
        <div id='MainShowcase'> 
          <Row>
            <div className='col-4 list-item' onMouseEnter={()=>toggleHover(0)} >
              <h4>DevLabs Master Class</h4>
            </div>
            <div className='col-4 list-item' onMouseEnter={()=>toggleHover(1)}>
              <h4>Pokemon and Star Wars Cards</h4>
            </div>
            <div className='col-4 list-item' onMouseEnter={()=>toggleHover(2)} >
              <h4>Tic Tac Toe Javascript</h4>
            </div>
          </Row>
          <Row>
            <Col md={12}>
              <div className='work-showcase'>
                  <animated.div class = "bg"className='work-showcase bg' style={{...transitions.props,href:`${pic.link}`}}>
                    <img style={{height:"25rem"}}src={pic.url}/>
                  </animated.div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  </>
)

}
export default Test

