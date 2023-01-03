import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import Input from '../Input/Input';
import { sideBarNavData } from './sidebarData';
import userImage from '/public/images/users/user-profile.png';

const Sidebar = ({ PageLabelHandler }) => {
    const [login, setLogin] = useState(true);
    const [activeNav, setactiveNav] = useState(null);
    const userIcon = FaUser;

    const ActiveNavHandler = (navItem, icon, path) => {
        setactiveNav(navItem);
        PageLabelHandler(icon, path);
    };

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
                                        <li key={navItem.title} className={navItem.subNav ? 'nav-item dropdown' : 'nav-item'} data-bs-dismiss="offcanvas" aria-label="Close">
                                            <Link onClick={() => ActiveNavHandler(navItem, navItem.icon, navItem.path)} className={`nav-link ${activeNav == navItem && 'active'}`} href={navItem.path} role={navItem.subNav ? 'button' : ''} data-bs-toggle={navItem.subNav ? 'dropdown' : ''} aria-expanded={navItem.subNav ? 'false' : ''}>
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
                        {login && (
                            <div className="user my-3 pe-3">
                                <Link onClick={() => ActiveNavHandler('', userIcon, "/user")} href="/user" className="nav-link d-flex align-items-center">
                                    <Image className="userImage img-fluid me-2" src={userImage} alt="User Profile" />
                                    <span className='text-nowrap'>Jeslin Smith</span>
                                </Link>
                                <button onClick={() => setLogin(false)} className="btn nav-link mt-3 text-danger" type='button' >
                                    <span className='me-2'>
                                        <FiLogOut />
                                    </span>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
