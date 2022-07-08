import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light p-0" id="header">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-2">
                <a className="nav-link active" aria-current="page" href="/home">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/website">
                  Website cửa hàng
                </Link>
              </li>
              <li className="nav-item p-2 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nền tảng khác
                </a>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.facebook.com/"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/?hl=en"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://shopee.vn/">
                      Shopee
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.lazada.vn/">
                      Lazada
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex p-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Tìm
              </button>
            </form>
            <Link
              className="btn 
            btn-danger me-2"
              to="/login"
            >
              Logout...
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
