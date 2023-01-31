import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { MdLabelImportant } from 'react-icons/md';

const PageLabel = ({ labelTitle }) => {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.back()} className="btn backBtn  text-capitalize shadow-sm">
                <span className="d-flex align-items-center">
                    <BiArrowBack /> <span className="d-none ms-2 d-sm-flex">Back</span>
                </span>
            </button>

            <button className="btn d-none d-md-inline-flex btnPrimaryOutline text-capitalize shadow-sm">
                <span className="me-2">
                    <MdLabelImportant />
                </span>
                <span className="text-muted">{labelTitle}</span>
            </button>
        </div>
    );
};

export default PageLabel;
