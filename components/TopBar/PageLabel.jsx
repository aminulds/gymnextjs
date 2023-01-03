const PageLabel = ({ pageIcon, labelTitle }) => {
    return (
        <button className="btn d-none d-md-inline-flex btnPrimaryOutline text-capitalize">
            <span className="me-2">{pageIcon}</span> {labelTitle}
        </button>
    );
};

export default PageLabel;
