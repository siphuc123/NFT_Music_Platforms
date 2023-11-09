import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine, RiShoppingCart2Line, RiSearchEyeLine } from "react-icons/ri";
import logo from "../../assets/logo-removebg.png";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <Link to="/explore">Explore</Link>
    <Link to="/feed">Feed</Link>
    <Link to="/collection">Collection Stats</Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(false);

  const handleLogout = () => {
    setUser(false);
  };

  const handleLogin = () => {
    setUser(true);
  };

  return (
    <>
      <div className="wrapper">
        <span className="icon-close">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="form-box login">
          <h2 className="shadow">CONNECT YOUR WALLET</h2>
          <form action="#">
            <Link to="/" onClick="connectWallet()">
              <i></i> <span>Phantom Wallet</span>
            </Link>
            <Link to="/" onClick={handleLogin}>
              <i></i> <span>Candy Wallet</span>
            </Link>
            <Link to="/" onClick={handleLogin}>
              <i></i> <span>Glow</span>
            </Link>
            <Link to="/" onClick={handleLogin}>
              <i></i> <span>Solflare</span>
            </Link>
            <Link to="/" onClick={handleLogin}>
              <i></i> <span>MetaMask</span>
            </Link>
            <Link to="/" onClick={handleLogin}>
              <i></i> <span>Coinbase Wallet</span>
            </Link>

            <button className="Show">Show More</button>
          </form>
        </div>
      </div>
      <header className="navbar">
        <div className="navbar-links">
          {/* Logo thương hiệu */}
          <div className="navbar-links_logo">
            <Link to="/home">
              <h2 className="logo">
                <img src={logo} alt="logo" />
              </h2>
            </Link>
          </div>
          {/* Thanh menu */}
          <nav className="navigation">
            {" "}
            <Menu />
          </nav>
          {/* Thanh tìm kiếm */}
          <div className="navbar-links_container">
            <div className="search-box">
              <form action="#">
                <input
                  type="text"
                  name="search"
                  id="srch"
                  placeholder="Search for songs here"
                  autoFocus={true}
                />
                <button type="submit">
                  <RiSearchEyeLine></RiSearchEyeLine>
                </button>
              </form>
            </div>
            {user && (
              <Link to="/">
                <p onClick={handleLogout}>Logout</p>
              </Link>
            )}
          </div>
        </div>
        {/* Connect Ví - Cart */}
        <div className="navbar-sign">
          {user ? (
            <>
              <Link to="/create">
                <button type="button" className="primary-btn">
                  Create NFTs
                </button>
              </Link>
              <Link to="/profile">
                <button type="button" className="secondary-btn">
                  Profile
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button type="button" className=" btnLogin-popup primary-btn">
                  {" "}
                  <span>Connect Wallet</span>
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className="secondary-btn shopping">
                  <RiShoppingCart2Line></RiShoppingCart2Line>
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
              <div className="navbar-menu_container-links-sign">
                {user ? (
                  <>
                    <Link to="/create">
                      <button type="button" className="primary-btn">
                        Create NFTs
                      </button>
                    </Link>
                    <Link to="/profile">
                      <button type="button" className="secondary-btn">
                        Profile
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/">
                      <button
                        type="button"
                        className=" btnLogin-popup primary-btn"
                      >
                        {" "}
                        <span>Connect Wallet</span>
                      </button>
                    </Link>
                    <Link to="/register">
                      <button type="button" className="secondary-btn">
                        Sign Up
                      </button>
                    </Link>
                    <Link to="/cart" className="shopping">
                      <i className="bx bx-cart"></i>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
