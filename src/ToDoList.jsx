import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast", "Take Shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    };

    function addTask(){

        if(newTask.trim() !== "" ){
            setTasks(t => [...t, newTask]);
            setNewTask("");

        }
        

    };

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks);
    };

    function moveTaskUp(index){
        if (index >0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };
    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    function wow(arg) {
        console.log("@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(arg)
        return () => deleteTask(arg)
    }

    return(
        <div className="to-do-list">
            <input  
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={wow(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            👎
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );




}

export default ToDoList;