import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

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
                <span className="me-2">{pageIcon}</span> {labelTitle}
            </button>
        </div>
    );
};

export default PageLabel;
