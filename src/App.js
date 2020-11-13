import React, { useState, useEffect } from 'react';
import './App.css';

import TaskCreate from './components/tasks/create/TaskCreate';
import TaskList from './components/tasks/list/TaskList';


export default function App() {

  const [counter, setcounter] = useState(0);
  const [isPosted, setisPosted] = useState(false);
  const [hasError, sethasError] = useState(false);
  const [postedMessage, setpostedMessage] = useState("");
  const [arrayItems, setarrayItems] = useState([]);

  const handlePush = (taskTitle) => {
    try {
      if (taskTitle.length == 0) {
        throw "Please give task title !!";
      }

      let arrayItemsNew = [...arrayItems];
      const item = {
        id: 2,
        title: taskTitle
      };
      arrayItemsNew.unshift(item);
      setarrayItems(arrayItemsNew);
      setpostedMessage("Data Added");
      sethasError(false);
      setisPosted(true);

    } catch (error) {
      setpostedMessage(error);
      sethasError(true);
    }
  }

  useEffect(() => {
    if (isPosted & postedMessage.length > 0) {
      callList();
    }

    if (hasError & postedMessage.length > 0) {
      callErrorList();
    }

  }, [isPosted, postedMessage, hasError]);


  const callList = () => {
    console.log('list :>> ', arrayItems);
  }

  const callErrorList = () => {
    console.log('error :>> ');
  }


  return (
    <div>
      {postedMessage.length > 0 && <p style={{ color: !hasError ? 'green' : 'red' }}> {postedMessage} </p>}

      <TaskCreate handlePush={handlePush} />
      <div >
        <button onClick={() => setcounter(counter + 1)}>Click</button>
        <h1>{counter}</h1>

        <TaskList
          data={arrayItems}
          counter={counter}
          onClickUpdateOnMaster={(val) => setcounter(counter + val)}
        />
      </div>
    </div>
  )
}

