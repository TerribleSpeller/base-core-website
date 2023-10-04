import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const NavBar = () => {
    return(
        <>
            <div className="container stick-navBar " id="NavBar" style={{"alignSelf": "flex-start"}}>
                <div className="row bg-light-subtle">
                    <header className="border border-top-0 border-primary rounded-bottom d-flex flex-wrap justify-content-center pt-3">
                        <div className="stacked-title mb-3 mb-md-0 me-md-auto link-body-emphasis">
                            <a
                            href="/"
                            className="d-flex link-module align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis link-color-unique text-decoration-none"
                            >
                            <span className="fs-4">BASE CORE</span>
                            </a>
                        </div>
                        <ul className="nav ">
                            <li className="nav-item pt-3">
                            <Link href="/" className="nav-link link-module">
                                <span>Home</span>
                            </Link>
                            </li>
                            <li className="nav-item pt-3">
                            <Link href="/index" className="nav-link link-module">
                            <span>Index</span>
                            </Link>
                            </li>
                            <li className="nav-item pt-3">
                            <Link href="/faqs" className="nav-link link-module">
                            <span>FAQs</span>
                            </Link>
                            </li>
                            <li className="nav-item pt-3 ">
                            <Link href="/about" className="nav-link link-module">
                            <span>About</span>
                            </Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </div>
        </>
    )
}

export default NavBar;