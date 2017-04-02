/**
 * Created by rdors on 2017-04-02.
 */
/**
 * Created by rdors on 2017-04-02.
 */
import React from "react";
import {Animation, Entity} from "aframe-react";
import Stone from "./../Stone";

export default props => (
    <Entity>
        <Entity
            material={
                {
                    src: '#carpet'
                }
            }
            position={-((props.x/2 - 1)/2 + 1) + " " + (props.height/2 - 1) + " " + -props.dementorsRoom}
            geometry={
                {
                    primitive: "plane",
                    width: props.x/2 - 1,
                    height: props.height
                }
            }
        >
        </Entity>

        <Entity
            material={
                {
                    src: '#carpet'
                }
            }
            position={((props.x/2 - 1)/2 + 1) + " " + (props.height/2 - 1) + " " + -props.dementorsRoom}
            geometry={
                {
                    primitive: "plane",
                    width: props.x/2 - 1,
                    height: props.height
                }
            }
        >
        </Entity>

        <Entity
            visible= {props.dementorsVisible}
            position={"0 0 " + (-props.dementorsRoom+ props.y/15)}
            geometry={{primitive: "box"}}
            scale={"2 1 0.5"}
        >
            <Animation attribute="rotation" dur="2000" repeat="indefinite" to="0 360 360"/>
        </Entity>
        <Entity
            visible= {props.dementorsVisible}
            position={((props.x/2 - 1)/2 + 1) + " 0 " + (-props.dementorsRoom + props.y/15)}
            geometry={{primitive: "box"}}
            scale={"2 1 0.5"}
        >
            <Animation attribute="rotation" dur="2000" repeat="indefinite" to="0 360 360"/>
        </Entity>
        <Entity
            visible= {props.dementorsVisible}
            position={-((props.x/2 - 1)/2 + 1) + " 0 " + (-props.dementorsRoom + props.y/15)}
            geometry={{primitive: "box"}}
            scale={"2 1 0.5"}
        >
            <Animation attribute="rotation" dur="2000" repeat="indefinite" to="0 360 360"/>
        </Entity>

        <Stone
            stoneVisible={props.stoneVisible}
            dementorsRoom={props.dementorsRoom}
            height={props.height}
        />
    </Entity>
)