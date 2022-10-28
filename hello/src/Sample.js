import React from 'react'
import './Sample.css'
import { Container, Row , Col } from 'react-bootstrap'

function Sample() {
  return (




    //This sample that you can copy to design our project
    <div className='header'>
    
        <Container>
        {/* first row is about the title bar */}
      <Row>
        <Col xs = {7} sm ={7} md = {9} lg = {9} xl = {9} xxl ={9}>
        <header className='title'>School Reported System</header>
        </Col>
        <Col xs = {4} sm ={4} md = {2} lg = {2} xl = {2} xxl ={2}>
        <div className='username'>
          username
        </div>
        </Col>
        <Col xs = {1} sm ={1} md = {1} lg = {1} xl = {1} xxl ={1}>
        <div className='profile'>
            <img></img>
        </div>
        </Col>
      </Row>
    </Container>
   
    </div>
  )
}

export default Sample