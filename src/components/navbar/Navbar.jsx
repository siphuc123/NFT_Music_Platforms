import React from "react";
import "./navbar.css";
import {
  RiWallet2Line,
  RiShoppingCart2Line,
  RiSearchEyeLine,
} from "react-icons/ri";
import logo from "../../assets/logo-removebg.png";
import item from "../../assets/1.jpg";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <Link to="/explore">Explore</Link>
    <Link to="/feed">Feed</Link>
    <Link to="/collection">Collection Stats</Link>
  </>
);

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [user, setUser] = useState(false);

  // const handleLogout = () => {
  //   setUser(false);
  // };

  // const handleLogin = () => {
  //   setUser(true);
  // };

  const positionR = {
    position: "relative",
  };
  const JTF_B = {
    justifycontent: "space-between",
  };
  const FDC = {
    flexdirection: "column",
  };
  return (
    <>
      <header>
        <Link to="/home">
          <h2 className="logo">
            <img src={logo} alt="" />
          </h2>
        </Link>
        <nav className="navigation">
          <Menu />
        </nav>

        <div className="search-box">
          <form action="">
            <input name="search" id="srch" placeholder="Search for music..." />
            <button type="submit">
              <RiSearchEyeLine></RiSearchEyeLine>
            </button>
          </form>
        </div>

        <div className="d-flex">
          <button className="btnLogin-popup" style={positionR}>
            <p>
              <RiWallet2Line viewBox="-1 0 24 24"></RiWallet2Line>
            </p>

            <span>Connect Wallet</span>
          </button>
          <div id="otherButton" className="hide">
            <div className="After-logging-in">
              <Link to="Profile.html">
                <img src="img/NFT-1.jpg" alt="" />
                <span>Name</span>
              </Link>
              <p>13 SOL</p>
            </div>
          </div>

          <div id="cd-cart-trigger" className="shopping">
            <Link className="cd-img-replace" to="#0">
              <RiShoppingCart2Line></RiShoppingCart2Line>
            </Link>
          </div>
        </div>
      </header>

      <div id="cd-shadow-layer"></div>

      <div id="cd-cart">
        <div className="cart-header">
          <p>
            Your Cart <i className="bx bx-info-circle"></i>
          </p>
          <span>Clear all (3 items)</span>
        </div>

        <ul className="cd-cart-items">
          <li>
            <div className="d-flex">
              <img src={item} height="65px" width="auto" alt="" />
              <div>
                <span className="cd-qty">At My Worst (Standard Edition)</span>{" "}
                #2002
                <div className="cd-price">Pink Sweats</div>
                <div className="cd-des">This is one of Link ...</div>
              </div>
              <div className="cd-price cd-item-price cd-img-replace">
                0.005 SOL
              </div>
              <Link to="#0" className="cd-item-remove cd-img-replace">
                <i className="bx bx-trash"></i>
              </Link>
            </div>
          </li>

          <li>
            <div className="d-flex">
              <img src={item} height="65px" width="auto" alt="" />
              <div>
                <span className="cd-qty">At My Worst (Standard Edition)</span>{" "}
                #2003
                <div className="cd-price">Pink Sweats</div>
                <div className="cd-des">This is one of Link ...</div>
              </div>
              <div className="cd-price cd-item-price cd-img-replace">
                0.005 SOL
              </div>
              <Link to="#0" className="cd-item-remove cd-img-replace">
                <i className="bx bx-trash"></i>
              </Link>
            </div>
          </li>

          <li>
            <div className="d-flex">
              <img src={item} height="65px" width="auto" alt="" />
              <div>
                <span className="cd-qty">
                  At My Worst{" "}
                  <b className="special-edition">(Limited Edition)</b>
                </span>{" "}
                #1
                <div className="cd-price">Pink Sweats</div>
                <div className="cd-des">This is one of Link ...</div>
              </div>
              <div className="cd-price cd-item-price cd-img-replace">
                0.0221 SOL
              </div>
              <Link to="#0" className="cd-item-remove cd-img-replace">
                <i className="bx bx-trash"></i>
              </Link>
            </div>
          </li>
        </ul>

        <div className="cd-cart-total d-flex" style={JTF_B}>
          <p>Total:</p>
          <div className="d-flex justify-content-center" style={FDC}>
            <span>0.00321 SOL</span>
            <span className="cd-des">~= 0.20 USD</span>
          </div>
        </div>

        <Link to="#0" className="checkout-btn">
          Purchase
        </Link>
      </div>

      <div className="wrapper">
        <span className="icon-close">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="form-box login">
          <h2 className="shadow">CONNECT YOUR WALLET</h2>
          <form action="#">
            <Link to="" onclick="connectWallet()">
              <img src="img/Phantom-Icon_App_128x128.png" alt="" />{" "}
              <span>Phantom Wallet</span>
            </Link>
            <Link to="">
              <img
                src="https://iconic.dynamic-static-assets.com/icons/sprite.svg#walletconnect"
                alt=""
              />
              <span>WalletConnect</span>
            </Link>
            <Link to="">
              <img src="img/Glow_Icon.png" alt="" /> <span>Glow</span>
            </Link>
            <Link to="">
              <img src="img/soflare_Icon.png" alt="" /> <span>Solflare</span>
            </Link>
            <Link to="">
              <img
                src="https://iconic.dynamic-static-assets.com/icons/sprite.svg#metamask"
                alt=""
              />
              <span>MetaMask</span>
            </Link>
            <Link to="">
              <img
                src="https://iconic.dynamic-static-assets.com/icons/sprite.svg#coinbase"
                alt=""
              />
              <span>Coinbase Wallet</span>
            </Link>

            <button className="Show">Show More</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
