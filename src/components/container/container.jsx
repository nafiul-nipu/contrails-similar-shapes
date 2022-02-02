import React from 'react';
import * as d3 from 'd3'

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import Scatter from '../scatter/scatter.component';

import neighbors from '../../data/neighbors.json'


class ContainerComponent extends React.Component{
    constructor(){
        super();
        this.state = {value: '210'}
        // this.dataTime = {
        //     contrails1: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
        //     contrails2: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
        //     contrails3: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
        //     newData:[210,211,212,213,214,215,216,217,218,219]
        // }
        this.simulation = [210,211,212,213,214,215,216,217,218,219]
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    componentDidMount(){
        // let up = parseInt(this.divs / 2)
        // this.setState({
        //     upper: up,
        //     lower: parseInt(this.divs - up)
        // })

    }
    handleOnChange(){
        var val = document.getElementById("selection").value;
        this.setState({value: val});
        // console.log(val)

    }

    render(){
        // console.log(this.state)
        if(this.state.value){
            console.log('container')
            console.log(this.state.value)
            return(
                <Container fluid>
                    <Row xs={12} style={{height: '5vh'}}>
                        <Col xs={12}>
                            <select id='selection' onChange={this.handleOnChange}>
                                {/* <option value='contrails1'>contrails1</option> */}
                                {
                                    this.simulation.map((el, i) =>{
                                        return <option value={`${el}`}>{el}</option>
                                    })
                                }
                            </select>
                        </Col>
                    </Row>

                    <Row xs={12} style={{height: '40vh'}}>
                        {
                            neighbors[this.state.value].map((el, i) => {
                                // console.log(el, i)
                                if(i < 3){
                                    return(
                                        <Col id='shape' xs={4} style={{height: '40vh'}}>
                                        <Scatter
                                            key = {`${this.state.value}-${el}`}
                                            folder ={'newData'}     
                                            time={el}    
                                            id={i}                      
                                        />                            
                                        </Col>
                                    )                                    

                                }
                            })
                        } 

                    </Row>

                    <Row xs={12} style={{height: '40vh'}}>
                        {
                            neighbors[this.state.value].map((el, i) => {
                                // console.log(el, i)
                                if(i > 2){
                                    return(
                                        <Col id='shape' xs={4} style={{height: '40vh'}}>
                                        <Scatter
                                            key = {`${this.state.value}-${el}`}
                                            folder ={'newData'}     
                                            time={el}      
                                            id={i}                    
                                        />                            
                                        </Col>
                                    ) 
                                }
                            })
                        } 

                    </Row>

                </Container>
            )
            
        }
        
    }
}

export default ContainerComponent ;