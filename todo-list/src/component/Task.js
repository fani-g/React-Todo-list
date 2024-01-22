const Task = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-5">
                <div className='bg-light rounded' >
                    <p className="p-2">{props.taskname}
                        <div class="btn-group justify-content-end" role="group">
                            <button className="btn btn-success text-white" onClick={()=> props.editTask(props.id)}><i className="bi bi-pencil-square"></i></button>
                            <button className="btn btn-danger text-white" onClick={()=> props.deleteTask(props.id)}><i className="bi bi-trash"></i></button>  
                        </div>  
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Task;