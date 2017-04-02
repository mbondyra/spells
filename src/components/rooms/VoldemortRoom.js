
import React from "react";
import {Animation, Entity} from "aframe-react";

export default props => (
    <Entity>
        <Entity scale="0.04 0.04 0.04"
                visible= {props.voldemortVisible}
                position={"0 0.01 " + (-props.y + props.y/6)} rotation="0 0 0">

            <a-obj-model src="#voldemort-obj" mtl="#voldemort-mtl" />
        </Entity>


    </Entity>
)