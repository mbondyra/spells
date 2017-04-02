import React from "react";
import {Animation, Entity} from "aframe-react";
import Stone from "./../Stone";

export default props => (
    <Entity>
        <Entity
            material={
            {
                src: '#wall',
                side: "double"
            }
            }
            position={-((props.x / 2 - 1) / 2 + 1) + " " + (props.height / 2 - 1) + " " + -props.dementorsRoom}
            geometry={
            {
                primitive: "plane",
                width: props.x / 2 - 1,
                height: props.height
            }
            }
        >
        </Entity>

        <Entity
            material={
            {
                src: '#wall',
                side: "double"
            }
            }
            position={((props.x / 2 - 1) / 2 + 1) + " " + (props.height / 2 - 1) + " " + -props.dementorsRoom}
            geometry={
            {
                primitive: "plane",
                width: props.x / 2 - 1,
                height: props.height
            }
            }
        >
        </Entity>

        <Entity scale="0.04 0.04 0.04"
                visible={props.dementorsVisible}
                position={"0 0.3 " + (-props.dementorsRoom + props.y / 15)} rotation="0 180 0">

            <a-obj-model src="#dementor-obj" mtl="#dementor-mtl"/>
        </Entity>
        <Entity scale="0.04 0.04 0.04"
                visible={props.dementorsVisible}
                position={((props.x / 2 - 1) / 2 + 1) + " 0.3 " + (-props.dementorsRoom + props.y / 15)}
                rotation="0 180 0">

            <a-obj-model src="#dementor-obj" mtl="#dementor-mtl"/>
        </Entity>
        <Entity scale="0.04 0.04 0.04"
                visible={props.dementorsVisible}
                position={-((props.x / 2 - 1) / 2 + 1) + " 0.3 " + (-props.dementorsRoom + props.y / 15)}
                rotation="0 180 0">

            <a-obj-model src="#dementor-obj" mtl="#dementor-mtl"/>
        </Entity>

        <Stone
            stoneVisible={props.stoneVisible}
            dementorsRoom={props.dementorsRoom}
            height={props.height}
        />
    </Entity>
)