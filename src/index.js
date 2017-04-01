import 'babel-polyfill'
//import aframe from 'aframe'
import {Animation, Entity, Scene} from 'aframe-react'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Cursor from './components/Cursor'
import Sky from './components/Sky'
import Camera from './components/Camera'
import Earth from './components/Earth'
import Lighting from './components/Lighting'


//import physics from 'aframe-physics-system';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            lighting: '#000',
            doorOpen: false,
            voldemortVisible: true,
            stoneBlocking: true,
            dementorsVisible: true,

        }
    };

    lumos() {
        this.setState({
            lighting: "#FFF"
        })
    }

    alohomora() {
        this.setState({
            doorOpen: true
        })
    }

    expectoPatronum() {
        this.setState({
            dementorsVisible: false
        })
    }

    wingardiumLeviosa() {
        this.setState({
            stoneBlocking: false
        })
    }


    expelliarmus() {
        this.setState({
            voldemortVisible: false
        })
    }

    render() {
        window.app = this;
        const changeColor = () => {
            const colors = ['red', 'orange', 'yellow', 'green', 'blue']
            const color = colors[Math.floor(Math.random() * colors.length)]
            this.setState({color})
        };


        return (
            <Scene physics>
                <a-assets>
                    <img id="carpet" src="./carpet.jpg"/>
                </a-assets>


                <Camera>
                    <Cursor/>
                </Camera>

                <Sky color={this.state.lighting}/>
                <Earth />

                <Lighting color={this.state.lighting}/>

                <Entity
                    material={{color: this.state.color}}
                    onClick={changeColor}
                    position="0 0 -5"
                    geometry={{primitive: "box"}}
                    scale={"2 1 0.5"}
                >
                    <Animation attribute="rotation" dur="2000" repeat="indefinite" to="0 360 360"/>
                </Entity>

                <Entity
                    material={
                    {
                        src: '#carpet'
                    }
                    }
                    position={[0, -5, 0]}
                    geometry={
                    {
                        primitive: "plane"
                        , width: "20"
                        , height: "20"
                    }
                    }
                    rotation={[-90, 0, 0]}
                >
                </Entity>

            </Scene>
        );
    }
}

const content = document.getElementById('app')

ReactDOM.render(<HelloWorld />, content)
