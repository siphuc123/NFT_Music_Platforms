import React from "react";
import "./footer.css";
import nftlogo from "../../assets/logo-removebg.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { LiaDiscord, LiaFacebookF, LiaGithub } from "react-icons/lia";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer section__padding">
          <div className="footer-content footer-links">
            <div className="footer-logo footer-links_logo">
              <div>
                <img src={nftlogo} alt="logo" />
                <h3>LazyBees</h3>
              </div>
              <div>
                <p>
                  NFT Music Flatform providing solutions for digital buying and
                  exchange
                </p>
              </div>
            </div>
            <div className="footer-links">
              <p>Join the community</p>
              <div className="links">
                <Link to="https://github.com/siphuc123/NFT_Music_Platforms">
                  <LiaGithub
                    size={25}
                    color="white"
                    className="footer-icon"
                  ></LiaGithub>
                </Link>
                <Link to="https://discord.gg/2GgZGJdy">
                  <LiaDiscord
                    size={25}
                    color="white"
                    className="footer-icon"
                  ></LiaDiscord>
                </Link>
                <Link to="https://twitter.com/BeesLazy">
                  <AiOutlineTwitter
                    size={25}
                    color="white"
                    className="footer-icon"
                  />
                </Link>
                <Link to="https://www.facebook.com/">
                  <LiaFacebookF
                    size={25}
                    color="white"
                    className="footer-icon"
                  ></LiaFacebookF>
                </Link>
              </div>
            </div>
            <div className="footer-social">
              <h3>Stay in the loot</h3>
              <p>
                Join our mailing list to stay in the loop with our newest music
                releases and newest things about LB.
              </p>
              <div className="login-email">
                <input
                  type="text"
                  placeholder="Your email address"
                  name="email address"
                />
                <button>Sign up</button>
              </div>
            </div>
            <div className="footer-bottom footer-copyright">
              <div className="line"> </div>
              <div>
                <p>
                  {" "}
                  © {new Date().getFullYear()} - LazyBees Team. All Rights
                  Reserved
                </p>
              </div>
              <div className="private">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="footer-links_div">
            <h4>Support</h4>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
          </div> */}
    </>
  );
};

export default Footer;
