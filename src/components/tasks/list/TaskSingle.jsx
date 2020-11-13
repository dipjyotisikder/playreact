
import React, { useState } from 'react'

export default function TaskSingle(props) {
    const [counter, setcounter] = useState(0);
    const { title, id } = props.item;

    const handleInnerCounter = () => {
        setcounter(counter + 1);
        props.onClickUpdateOnMaster(counter);
    }

    return (
        <div onClick={handleInnerCounter} >
            <li>
                Title - {title} - {props.counter}
            </li>

            <li>
                ID: {id}
            </li>
            <li>
                My Count: {counter}
            </li>
        </div>
    )
}