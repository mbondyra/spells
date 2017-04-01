import "babel-polyfill";
//import aframe from 'aframe'
import {Animation, Entity, Scene} from "aframe-react";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SceneService from "./components/SceneService";
//import physics from 'aframe-physics-system';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <SceneService/>
            </div>
        );
    }
}

const content = document.getElementById('app')
ReactDOM.render(<HelloWorld />, content)
