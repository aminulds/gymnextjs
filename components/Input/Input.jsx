const Input = ({ type, name, id, placeholder }) => {
    return (
        <>
            <input type={type} name={name} id={id} placeholder={placeholder} className={`${type === 'search' ? 'form-control mb-0 bg-transparent' : 'form-control'}`} />
        </>
    );
};

export default Input;
