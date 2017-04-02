/**
 * Created by rdors on 2017-04-02.
 */
/**
 * Created by rdors on 2017-04-02.
 */
/**
 * Created by rdors on 2017-04-02.
 */
import React from "react";
import {Animation, Entity} from "aframe-react";

export default props => (
    <Entity>

        <Entity
            visible= {props.voldemortVisible}
            position={"0 0 " + (-props.y + props.y/6)}
            geometry={{primitive: "box"}}
            scale={"2 1 0.5"}
        >
            <Animation attribute="rotation" dur="2000" repeat="indefinite" to="0 360 360"/>
        </Entity>

    </Entity>
)