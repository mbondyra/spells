/**
 * Created by rdors on 2017-04-02.
 */
import React from "react";
import {Entity} from "aframe-react";

export default props => (
    <Entity
        material={
            {
                src: '#carpet',
                visible: props.stoneVisible,
                side: "double"
            }
        }
        position={"0 " + (props.height/2 - 1) + " " + -props.dementorsRoom}
        geometry={
            {
                primitive: "plane"
                , width: "2"
                , height: props.height
            }
        }
    />
)