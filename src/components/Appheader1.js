import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Darkbutton from '../components/Darkbutton';
import Myclass from '../components/Myclass';
import Profile from '../components/Profile';
 

const classList = [
    {
        imageUrl: 'user.png',
        title: 'Advanced Python Sass',
        per: '87',
        status: 'bg-warning',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap SASS CSS ',
        per: '96',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        title: 'Basic JAVA',
        per: '95',
        status: 'bg-primary',
    },
    {
        imageUrl: 'user.png',
        title: 'React JS',
        per: '55',
        status: 'bg-warning',
    },
];
function Appheader1() {
    const [state, setState] = useState({
        isOpen: false,
        isActive: false,
    })
    const toggleOpen = () => setState({ isOpen: !state.isOpen });
    const toggleActive = () => setState({ isActive: !state.isActive });

    const navClass = `${state.isOpen ? ' nav-active' : ''}`;
    const searchClass = `${state.isActive ? ' show' : ''}`;


    return (
        <div className="middle-sidebar-header  bg-white scroll-bar">
            <div className={`app-header-search ${searchClass}`}>
                <form className="search-form">
                    <div className="form-group searchbox mb-0 border-0 p-1">
                        <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Search..."
                        />
                        <i className="input-icon">
                            <ion-icon
                                name="search-outline"
                                role="img"
                                className="md hydrated"
                                aria-label="search outline"
                            ></ion-icon>
                        </i>
                        <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                            <i className="ti-close font-xs" onClick={toggleActive}></i>
                        </span>
                    </div>
                </form>
            </div>


            <form action="#" className="float-left header-search middleSidebar__Search">
                <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-xss text-green lh-32"></i>
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        className="middleSidebar__Search--input bg-transparent border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350"
                        style={{ color: 'green' }}
                    />
                </div>
            </form>
            <ul className="d-flex ml-auto right-menu-icon">
                <li>
                    <Link to="#">
                        <span className="dot-count bg-warning"></span>
                        <i className="ti-home font-xs text-orange1"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/message">
                        <i className="ti-export font-xs text-orange1"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/message">
                        <i className="ti-settings font-xs text-orange1"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/message">
                        <img
                            src="assets/images/messenger.png"
                            alt="user"
                            className="w30 mt--1 rounded-circle font-xs"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/default-user-profile">
                        <img
                            src="assets/images/avt/avt.png"
                            alt="user"
                            className="w40 mt--1 rounded-circle"
                        />
                    </Link>
                </li>
                <li>
                    <span onClick={toggleActive} className="menu-search-icon">
                        <i className="feather-search text-grey-900 font-lg"></i>
                    </span>
                </li>
            </ul>

            <nav className={`navigation scroll-bar ${navClass}`}>
                <div className="container pl-0 pr-0">
                    <div className="nav-content">
                        <div className="nav-top">
                            <Link to="/" >

                                <img
                                    src="assets/images/logo.png"
                                    alt="user"
                                    className="pl-10"
                                />
                            </Link>
                            <span
                                onClick={toggleOpen}
                                className="close-nav d-inline-block d-lg-none"
                            >
                                <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
                            </span>
                        </div>



                        <div className=" theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">

                            <Profile />
                            <Myclass />
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Appheader1;
