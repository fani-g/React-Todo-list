const Wrapper = (props) => {
    return (
        <div className="container-lg">
            {props.children}
        </div>
    );
}
 
export default Wrapper;