const Form = (props) => {

    return ( 
        <div className="row justify-content-center">
            <div className="col-6">
                <form onSubmit={props.handleSubmit} className="m-4">
                    <div className="input-group mb-3">
                        <input className="form-control" value={props.newTask} onChange={props.handleChange} />
                        <button type="submit" className="btn btn-primary mx-2" onClick={props.addTask}><i className="bi bi-plus-lg"></i></button>
                    </div>
                </form> 
            </div>
        </div> 
    );
}
 
export default Form;