import React from "react";
import "./footer.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { LiaDiscord, LiaFacebookF, LiaGithub } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container-footer">
          <div class="footer-content">
            <div class="footer-logo">
              <img
                src={require("../../assets/logo-removebg.png")}
                alt=""
              />
              <h3>LazyBees</h3>
              <p>
                NFT Music Flatform providing solutions for digital buying and
                exchange
              </p>
            </div>
            <div class="footer-links">
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
            <div class="footer-social">
              <h3>Stay in the loot</h3>
              <p>
                Join our mailing list to stay in the loop with our newest music
                releases and newest things about LB.
              </p>
              <div class="login-email">
                <input
                  type="text"
                  placeholder="  Your email address"
                  name="email address"
                />
                <button>Sign up</button>
              </div>
            </div>
            <div class="footer-bottom d-flex justify-content-between">
              <div class="line"> </div>

              <h6>
                {" "}
                © {new Date().getFullYear()} - LazyBees Team. All Rights
                Reserved
              </h6>

              <div class="private">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
