import 'babel-polyfill'
//import aframe from 'aframe'
import {Animation, Entity, Scene} from 'aframe-react'
import React, {Component} from 'react'
import Cursor from './Cursor'
import Sky from './Sky'
import Camera from './Camera'
import Earth from './Earth'
import Lighting from './Lighting'

export default class SceneService extends Component {
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
        this.init();
    };

    init() {
        this.initSpeechRecognition();
        this.initSpeechRecognitionHandlers();
        recognition.start();
        console.log('Ready to receive a command.');
    }

    initSpeechRecognition() {
        recognition.lumos = ['lumos', 'luma', 'loomos', 'lumas', 'lumo', 'numa'];
        recognition.alohomora = ['alohomora'];
        recognition.expectoPatronum = ['expecto patronum', 'ekspecto patronum', 'ekspekto patronum'];
        recognition.wingardiumLeviosa = ['wingardium leviosa', 'wingardium lewiosa'];

        var grammar = '#JSGF V1.0; grammar spells; public <spell> = '
            + recognition.lumos
                .concat(recognition.alohomora)
                .concat(recognition.expectoPatronum)
                .concat(recognition.wingardiumLeviosa)
                .join(' | ')
            + ' ;'

        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'pl-PL';
        recognition.interimResults = false;
        recognition.maxAlternatives = 10;
    }

    initSpeechRecognitionHandlers() {
        recognition.onresult = (event) => {

            var last = event.results.length - 1;
            var word = event.results[last][0].transcript;
            console.log('Confidence: ' + event.results[0][0].confidence);
            console.log(word);

            var wordList = event.results[last];

            if (this.isMatch(wordList, event.srcElement.lumos)) {
                this.lumos();
            } else if(this.isMatch(wordList, event.srcElement.alohomora)) {
                this.alohomora();
            } else if(this.isMatch(wordList, event.srcElement.expectoPatronum)) {
                this.expectoPatronum();
            } else if(this.isMatch(wordList, event.srcElement.wingardiumLeviosa)) {
                this.wingardiumLeviosa();
            } else if(this.isMatch(wordList, event.srcElement.expelliarmus)) {
                this.expelliarmus();
            }
        }

        recognition.onspeechend = function () {
            // recognition.stop();
        }

        recognition.onend = function () {
            console.log('Ready to receive a command.');
            recognition.start();
        }

        recognition.onnomatch = function (event) {
            console.log("I didn't recognise word.");
        }

        recognition.onerror = function (event) {
            console.log("Error occurred in recognition: " + event.error);
        }
    }

    isMatch(wordList, dictionaryList) {
        for (var i = 0, wLen = wordList.length; i < wLen; i++) {
            for (var j = 0, dLen = dictionaryList.length; j < dLen; j++) {
                if (wordList[i].transcript.toLowerCase() === dictionaryList[j]) {
                    return true;
                }
            }
        }
        return false;
    }

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


const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();