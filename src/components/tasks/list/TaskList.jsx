import React from 'react'
import TaskSingle from './TaskSingle'

export default function TaskList(props) {

    const { data, counter, onClickUpdateOnMaster } = props;

    return (
        <div>
            {data.map((item, index) => (
                <ul key={index}>
                    <TaskSingle
                        key={index}
                        counter={counter}
                        item={item}
                        onClickUpdateOnMaster={(val) => onClickUpdateOnMaster(counter + val)}
                    />
                </ul>
            ))}
        </div>
    )
}
