import React, {useState, useRef, useEffect} from 'react'
import '../css/Showcase.css'
import {Row, Container, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'
import headShot from "../css/assets/headShot.png";



const Showcase = () =>{

  return (
    <>
      <section>
        <div id = "ShowcaseHeader">
          <Container fluid>
            <Row>
              <Col>
                <Header>
                  <img className="headshot" src = {headShot}/>
                </Header>
              </Col>
            </Row>
            <Row>
              <Col>
                <Container>
                  <Row style={{display:"flex",justifyContent:"center", textAlign:"center", }} >
                    <Col><h4>React</h4></Col>
                    <Col><h4>JavaScript</h4></Col>
                    <Col><h4>SQL</h4></Col>
                    <Col><h4>Python</h4></Col>
                  </Row>

                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )

}
export default Showcase

const Header = styled.div`
width: 100%;
height: 120px;
text-align:center;
margin: 3rem 0rem;
background-image:url("./assets/nav-background.png")

`