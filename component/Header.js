import Head from "next/head";
//To use Head, we need to import Head
import Link from "next/link";
import React from "react";
//To use link, we need to import Link as needed for bootstrap, we import it from next/link

// As we use stateless function component, the name of page and the name of function can be different.
// In React, this can be different aswell but rafce bring the pagename as function name
const Header = () => {
  return (
    <>
      <Head>
        {/* Head Is Necessary To Add Head Elements as in HTML5  */}
        {/* We Need To Import Bootstrap For Each File Primarily Unless Defined Like in Layout.js and _app.js */}
        {/* bootstrap cdn */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        {/* Here, Link Close Tag Is Needed As In ReactJS */}
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/firstpage">
            <a className="navbar-brand">My Store</a>
          </Link>

          {/* We use href in Link Tage and a ta is written without href. Do Not Write Link To as in ReactJS or a Href */}
          {/* This is the link format in NextJS */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/firstpage">
                  <a className="nav-link active" aria-current="page">
                    Firstpage
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/secondpage">
                  <a className="nav-link">Secondpage</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
