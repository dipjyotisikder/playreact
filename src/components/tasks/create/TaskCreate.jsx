import React, { useState } from 'react'


export default function TaskCreate(props) {

    const [taskTitle, settaskTitle] = useState('');

    const createTask = () => {
        props.handlePush(taskTitle)
        settaskTitle("");
    }

    return (
        <div>
            <input type="text" value={taskTitle} onInput={(e) => settaskTitle(e.target.value)} />
            <button onClick={createTask}>Push</button>
        </div>
    )
}
