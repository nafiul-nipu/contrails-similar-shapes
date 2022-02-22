import React from 'react';
// import * as d3 from 'd3'

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import GenerateSimilarShapes from '../scatter/generateSimilarShapes';




class ContainerComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            value: '210', 
            dimension: '2d', 
            folder: 'newData',
            simulation: [210,211,212,213,214,215,216,217,218,219]
        }
        this.dataTime = {
            contrails1: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            contrails2: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            contrails3: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            newData:[210,211,212,213,214,215,216,217,218,219]
        }
        // this.simulation = [210,211,212,213,214,215,216,217,218,219]
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleDimensionChange = this.handleDimensionChange.bind(this)
        this.handleDataOnChange = this.handleDataOnChange.bind(this)
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

    handleDimensionChange(){
        var val = document.getElementById("dimSelect").value;
        if(val === '3d'){
            document.getElementById('selection').selectedIndex  = 0
            this.setState({dimension: val, folder:'contrails1', simulation: this.dataTime['contrails1'], value: '0.1'})

        }else{
            document.getElementById('selection').selectedIndex  = 0
            this.setState({dimension: val, folder: 'newData', simulation: this.dataTime['newData'], value: '210'})
        }
        
    }

    handleDataOnChange(){
        var val = document.getElementById("dataSelect").value;
        // console.log(this.dataTime[val])
        document.getElementById('selection').selectedIndex  = 0
        this.setState({folder: val, simulation: this.dataTime[val], value: '0.1'})


    }

    render(){
        // console.log(this.state)
        if(this.state.value){
            console.log('container')
            console.log(this.state)
            return(
                <Container fluid>
                    <Row xs={12} style={{height: '5vh'}}>
                    <Col xs={2}>
                            <select id='dimSelect' onChange={this.handleDimensionChange} defaultValue='2d'>
                                <option value='3d'>3D</option>
                                <option value='2d'>2D</option>
                            </select>
                        </Col>
                        <Col xs={2}>
                            {
                                this.state.dimension === '2d' 
                                ? <select id='dataSelect' onChange={this.handleDataOnChange}>
                                        <option value='newData'>NewData</option>
                                    </select>
                                : <select id='dataSelect' onChange={this.handleDataOnChange}>
                                        <option value='contrails1'>contrails1</option>
                                        <option value='contrails2'>contrails2</option>
                                        <option value='contrails3'>contrails3</option>
                                    </select>
                            }
                        </Col>
                        <Col xs={2}>
                            <select id='selection' onChange={this.handleOnChange}>
                                {/* <option value='contrails1'>contrails1</option> */}
                                {
                                    this.state.simulation.map((el, i) =>{
                                        return <option value={`${el}`} key={i}>{el}</option>
                                    })
                                }
                            </select>
                        </Col>
                    </Row>

                    <GenerateSimilarShapes 
                        value = {this.state.value}
                        folder = {this.state.folder}
                        dimension = {this.state.dimension}
                    />

                </Container>
            )
            
        }
        
    }
}

export default ContainerComponent ;