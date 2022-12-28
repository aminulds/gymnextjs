import imgAuthBanner from '/public/images/auth/signUpBanner.png';
import imgLogo from '/public/images/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Input/Button';

const SignUp = () => {
    return (
        <div className="auth py-4 py-md-0">
            <div className="container vh-100">
                <div className="row vh-100 justify-content-center">
                    <div className="col-12 col-md-9 d-flex align-items-center">
                        <div className="row g-4 g-md-5 row-cols-1 row-cols-md-2 flex-md-row-reverse">
                            <div className="col d-flex align-items-center">
                                <div className="authBannerWrap">
                                    <Image className="banner img-fluid" src={imgAuthBanner} alt="Auth Banner Image" />
                                </div>
                            </div>

                            <div className="col d-flex align-items-center justify-content-center">
                                <div className="authFormWrap">
                                    <Image className="logo img-fluid mb-4 mb-md-5" src={imgLogo} />
                                    <h5 className="logInTitle text-uppercase mb-4">Create Your Account</h5>

                                    <form className="mb-3">
                                        <Input type="text" name="name" id="name" placeholder="Your Name" />
                                        <Input type="email" name="email" id="email" placeholder="Email" />
                                        <Input type="password" name="password" id="password" placeholder="Password" />
                                        <Button type="button" text="Create Account" id="createAccount" />
                                    </form>
                                    <Link className="nav-link mb-2" href="/auth/signin">
                                        or Log In!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Auth Footer */}
                    <div className="authFooter d-flex align-items-center justify-content-between">
                        <Link href="#" className="nav-link">
                            Privacy Policy
                        </Link>
                        <span className="copyright">Copyright © {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
