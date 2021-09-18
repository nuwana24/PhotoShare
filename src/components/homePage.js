import React,{Component, useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import img from "../images/Test2.png";
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom";
import Cards from "../components/cards"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../css/home.css"
import {Button} from "reactstrap";
import TopBar from "../images/topbar.jpg"

class homePage extends Component {



    render() {
        return(
            <div className="">
                <div>
                    <img src={TopBar} style={{width:"100%", marginBottom:"2%"}} />
                </div>

                <div>
                    <Cards/>

                </div>
            </div>
        )
    }
}
export default homePage