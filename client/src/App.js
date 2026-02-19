
import React from "react";
import './App.css';
import dayjs from 'dayjs';
import {Badge,
  Group,
  Text,
  Container, Title, SimpleGrid, Input, Box, Flex, Mark, Button } from '@mantine/core';
import { Pencil, Line, BoxMultiple, EditCircle, AspectRatio, LetterSpacing, Bold,Square } from 'tabler-icons-react'

import ReactCanvas from '../src/Canvas/react-canvas.js';
import dartboardv7 from '../src/assets/dartboardv7.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePen: true,
      activeLine: false,
      activeBox: false,
      activeCircle: false
    }
  }
  render() {
    return (
      <><div style={{boxSizing:'border-box', padding:0,margin:0, height: window.screen.availHeight, display: "flex", flexDirection: 'column', alignItems:'center' }}>
        <div>
        <Text ta={'center'} fz ={50} fw={500}> Welcome to this Painting Application </Text>
        <div style={{display: 'flex', justifyContent:'center'}}>
        <Text c={'gray'} ta={'center'} fz ={15} style={{width:'90%'}}> 
          This is an example of how to create a Painting Application in React JS. Pen is the tool used by default.
                  You can change tool and color by the selections on the bottom portion of the canvas.
                  Try all tools.
                  Enjoy!
        </Text>      
        </div>
        </div>
        <div style={{  display: 'flex', flexDirection: 'column' }}>
          <div id="canvasRenderer" style={{ height: window.screen.availHeight * (65/100), width:window.screen.availWidth * (90/100) }}>
          <ReactCanvas/> 
          </div>
          <div className="itemsdown" style={{ height: window.screen.availHeight * (35/100) ,display: 'flex',  alignContent:'center', alignItems:'flex-start'}}>
          <Button id="clear" c={'black'} variant="outline" style={{border:'solid 1px'}}> Clear Screen</Button>
          <Container w="28%" mt={'xl'} p={0} style={{display: 'flex', justifyContent:'flex-end'}}>
            <div style={{border: 'dashed 1px gray', height: '36px'}}>
            <Pencil
              id="pen"
              size={34}
              strokeWidth={2}
              color={this.state.activePen ? 'blue': 'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
              bg={'white'}
              onClick={
                () => {
                    this.setState({activePen: this.state.activePen == true ? true: !this.state.activePen,
                      activeLine: false,
                      activeBox: false,
                      activeCircle: false
                })}
              }
            />
            <Line
              id="line"
              size={34}
              strokeWidth={2}
              color={this.state.activeLine ? 'blue': 'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
              onClick={
                () => {
                    this.setState({activeLine: this.state.activeLine == true ? true: !this.state.activeLine, 
                        activePen: false,
                        activeBox: false,
                        activeCircle: false
                  })}
                }
            />
            <AspectRatio
              id="box"
              size={34}
              strokeWidth={2}
              color={this.state.activeBox ? 'blue': 'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
              onClick={
                () => {
                this.setState({activeBox: this.state.activeBox == true ? true: !this.state.activeBox, 
                  activePen: false,
                  activeLine: false,
                  activeCircle: false
                  })}
                }
            />
            <EditCircle
              id="circle"
              size={34}
              strokeWidth={2}
              color={this.state.activeCircle ? 'blue': 'black'}
              style={{border: 'solid 1px black', cursor: 'pointer', background:'white'}}
              onClick={
                () => {
                this.setState({activeCircle: this.state.activeCircle == true ? true: !this.state.activeCircle, 
                  activePen: false,
                  activeLine: false,
                  activeBox: false
                })}
              }
            />
            </div>
            </Container>
            <Container mt={'sm'} p={5} style={{border: '', display: 'flex', flexDirection:'column', background:'#F0BBDD', gap: ''}}>
            <div style={{display:'flex', gap: 2}}> 
            <Square
              id="red"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'red'}}
            />
            <Square
              id="pink"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'pink'}}
            />
            <Square
              id="Orange"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Orange'}}
            />
            <Square
              id="Yellow"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Yellow'}}
            />
            </div>
            <div style={{display: 'flex', gap: 2, paddingTop:2}}>
            <Square
              id="Purple"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Purple'}}
            />  
            <Square
              id="Green"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Green'}}
            />
            <Square
              id="Blue"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Blue'}}
            />
            <Square
              id="Brown"
              size={20}
              strokeWidth={1}
              color={'black'}
              style={{ cursor: 'pointer', background:'Brown'}}
            />
            </div>
            </Container>
          </div>
        </div>

      </div></>
    );
  }
}
export default App;
