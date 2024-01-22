const Task = (props) => {
    return (
        <div className="row justify-content-center align-items-center m-2">
            <div className="col-4 bg-light rounded">
                <p className="text-center">{props.taskname}</p>     
            </div>
            <div className="col-1">
                <div class="btn-group justify-content-start" role="group">
                    <button className="btn btn-success text-white" onClick={()=> props.editTask(props.id)}><i className="bi bi-pencil-square"></i></button>
                    <button className="btn btn-danger text-white" onClick={()=> props.deleteTask(props.id)}><i className="bi bi-trash"></i></button>  
                </div>
            </div>
        </div>
    );
}
 
export default Task;