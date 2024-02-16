import { useState } from "react";
import Form from "./components/Form";
import Headline from "./components/Headline";


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState(''); 
  const [editItemId, setEditItemId] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue ,complete:false}]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  };

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    }));
  };

  const toggleEditMode = (id) => {
    setEditItemId(editItemId === id ? null : id);
    console.log('editItemId:',editItemId)
  };

  return (
    <div className="container-lg">
      <Headline headline='My to do list'/>
      <div className="row justify-content-center">
          <div className="col-lg-7 col-md-7 col-sm-7 col-8">
              <div className="m-4">
                  <div className="input-group mb-3">
                      <Form inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                      <button type="submit" className="btn btn-primary mx-2" onClick={addTodo}><i className="bi bi-plus-lg"></i></button>
                  </div>
              </div> 
          </div>
      </div> 
      {todos.map(todo => (
        <div className="row justify-content-center align-items-center m-2" key={todo.id}>
          {editItemId === todo.id ? (
            <div className="col-lg-4 col-md-4 col-sm-4 col-5">
              <input
                className="form-control"
                type="text"
                value={todo.text}
                onChange={(e) => updateTodo(todo.id, e.target.value)}
              />
            </div>
            
          ) : (
            <div className="col-lg-4 col-md-4 col-sm-4 col-5 bg-light rounded text-center p-2" style={{textDecoration: todo.complete ? 'line-through' : 'none',color: todo.complete ? 'grey' : 'black'}} >
              {todo.text}   
          </div>
          )}
          <div className="col-1">
            <div className="btn-group" role="group">
              <button className="btn btn-success text-white" onClick={()=>completeTodo(todo.id)}><i className="bi bi-check-circle"></i></button>
              <button className="btn btn-warning text-white" onClick={() => toggleEditMode(todo.id)}><i className="bi bi-pencil-square"></i></button>
              <button className="btn btn-danger text-white" onClick={() => deleteTodo(todo.id)} ><i className="bi bi-trash"></i></button> 
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default TodoList;