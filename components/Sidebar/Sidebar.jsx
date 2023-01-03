import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import Input from '../Input/Input';
import { sideBarNavData } from './sidebarData';
import userImage from '/public/images/users/user-profile.png';

const Sidebar = () => {
    const [userLogIn, setuserLogIn] = useState(true);
    const [activeNav, setactiveNav] = useState(null);

    return (
        <div className="col-12 col-md-3 col-lg-2">
            <nav className="navbar navbar-expand-md sideBar">
                <div className="offcanvas offcanvas-start" id="SidebarNav" aria-labelledby="SidebarNav">
                    <div className="offcanvas-body flex-column">
                        <div className="d-flex align-items-center  justify-content-between">
                            <Input type="search" name="search" id="search" placeholder="Search" />
                            <button type="button" className="btn d-md-none" data-bs-dismiss="offcanvas" aria-label="Close">
                                <AiOutlineDoubleLeft />
                            </button>
                        </div>

                        {sideBarNavData.map((item) => {
                            return (
                                <ul key={item.navItems} className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3 mt-md-4 border-end">
                                    <h5 className="navTitle">{item.navType}</h5>
                                    {item.navItems.map((navItem) => (
                                        <li key={navItem.title} className={navItem.subNav ? 'nav-item dropdown' : 'nav-item'}>
                                            <Link onClick={() => setactiveNav(navItem)} className={`nav-link ${activeNav == navItem && 'active'}`} href={navItem.path} role={navItem.subNav ? 'button' : ''} data-bs-toggle={navItem.subNav ? 'dropdown' : ''} aria-expanded={navItem.subNav ? 'false' : ''}>
                                                <span className="me-2 me-md-3">{navItem.icon}</span>
                                                {navItem.title}
                                            </Link>

                                            {navItem.subNav && (
                                                <ul className="dropdown-menu border-0 shadow">
                                                    {navItem.subNavItems.map((subItem) => {
                                                        return (
                                                            <li key={subItem.title} className="nav-item">
                                                                <Link className="nav-link dropdown-item" href={subItem.path}>
                                                                    <span className="me-2 me-md-3">{subItem.icon}</span>
                                                                    {subItem.title}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            );
                        })}

                        {/* User Profile */}
                        {userLogIn && (
                            <Link href="/user" className="user position-fixed bottom-0 mb-4 p-3">
                                <Image className="userImage img-fluid me-3" src={userImage} alt="User Profile" />
                                <span>Jeslin Smith</span>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
