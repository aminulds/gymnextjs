const PageLabel = ({ iconName, text }) => {
    return (
        <button className="btn d-none d-md-inline-flex btnPrimaryOutline">
            <span className="me-2">{iconName}</span> {text}
        </button>
    );
};

export default PageLabel;
