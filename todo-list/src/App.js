import Wrapper from "./layout/Wrapper";
import {useState} from 'react';
import Task from "./component/Task";
import Form from "./component/Form";

function App() {

  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  //we will convert the array todoList to object

  const handleChange = (event) => {
    setNewTask(event.target.value);
    //console.log(event.target.value);
  };

  const addTask =()=>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname:newTask,
      completed:false
    }
    const newTodoList = [...todoList,task];

    if(task.taskname === '') return;
    setTodoList(newTodoList);
    // setTodoList([...todoList,newTask]);

    console.log(newTodoList);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setNewTask('');
  }

  const deleteTask=(id)=>{
    const newTodoList = todoList.filter((task)=>{
      // if (task===taskName){
      //   return false;
      // }else{
      //   return true;
      // }
      return task.id !== id
    });


    //setTodoList(todoList.filter((task)=>task !== taskName);
    setTodoList(newTodoList);
  }

  const editTask=(id)=>{
    //TODO
  }

  return (
    <Wrapper>
      <h1 className="text-center text-white p-5">My To do list <i className="bi bi-card-checklist"></i></h1>
      <Form newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} addTask={addTask}/>
      {todoList.map((task) => {
          return(
            <Task taskname={task.taskname} key={task.id} id={task.id} deleteTask={deleteTask} editTask={editTask}/>
          );
        })}
    </Wrapper>
  );
}

export default App;

