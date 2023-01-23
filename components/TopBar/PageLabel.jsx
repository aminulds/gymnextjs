import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { MdLabelImportant } from 'react-icons/md';

const PageLabel = ({ pageIcon, labelTitle }) => {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.back()} className="btn backBtn  text-capitalize shadow-sm">
                <span>
                    <BiArrowBack /> Back
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
