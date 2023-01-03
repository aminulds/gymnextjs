const PageLabel = ({ pageIcon, labelTitle }) => {
    return (
        <button className="btn d-none d-md-inline-flex btnPrimaryOutline text-capitalize shadow-sm">
            <span className="me-2">{pageIcon}</span> {labelTitle}
        </button>
    );
};

export default PageLabel;
