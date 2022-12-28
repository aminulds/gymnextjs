const Input = ({ type, name, id, placeholder }) => {
    return (
        <>
            <input type={type} name={name} id={id} placeholder={placeholder} className="form-control" />
        </>
    );
};

export default Input;
