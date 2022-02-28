import React from "react";
import { Col, Row } from 'react-bootstrap';

// import * as d3 from 'd3'
import Scatter from "./scatter.component";

import neighbors from '../../data/neighbors.json'
import neighbors2 from '../../data/neighbors2.json'

class GenerateSimilarShapes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.neighbors = neighbors
    }

    componentDidMount(){
    }

    render(){
        // console.log(this.props.dimension)
        if(this.props.similarity === 'io'){
            this.neighbors = neighbors2
            // console.log(this.neighbors)
        }else if(this.props.similarity === 'shape'){
            this.neighbors = neighbors
            // console.log(this.neighbors)
        }
        return(
            <>
            <Row xs={12} style={{height: '40vh'}}>
                {
                    this.neighbors[this.props.value].map((el, i) => {
                        // console.log(el, i)
                        // let ft = el.split('_')
                        // let folder = ft[0]
                        // let time = ft[1]
                        if(i < 3){
                            return(
                                <Col id='shape' xs={4} style={{height: '40vh'}} key={i}>
                                <Scatter
                                    key = {`${el}`}
                                    folder ={this.props.folder}     
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
                    this.neighbors[this.props.value].map((el, i) => {
                        // console.log(el, i)
                        if(i > 2){
                            return(
                                <Col id='shape' xs={4} style={{height: '40vh'}} key={i}>
                                <Scatter
                                    key = {`${this.props.value}-${el}`}
                                    folder ={this.props.folder}     
                                    time={el}      
                                    id={i}                    
                                />                            
                                </Col>
                            ) 
                        }
                    })
                } 

                </Row>
            </>
        )

    }
}

export default GenerateSimilarShapes;




































