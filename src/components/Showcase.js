import React, {useState, useRef, useEffect} from 'react'
import '../css/Showcase.css'
import {Row, Container, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'
import headShot from "../css/assets/headShot.png";



const Showcase = () =>{

  return (
    <>
      <section>
        <Container fluid>
          <div id = "ShowcaseHeader">
            <Row>
              <Col>
                <Header>
                  <img className="headshot" src = {headShot}/>
                </Header>
              </Col>
            </Row>
            <Row>

            </Row>
          </div>
        </Container>
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