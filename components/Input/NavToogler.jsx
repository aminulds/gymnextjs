import { MdMenuOpen } from 'react-icons/md';

const NavToogler = () => {
    return (
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#SidebarNav" aria-controls="SidebarNav">
            <MdMenuOpen />
        </button>
    );
};

export default NavToogler;
