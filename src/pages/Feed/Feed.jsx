import { useEffect } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";

// Icon
import { AiOutlineSend } from "react-icons/ai";

const Feed = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <>
        <section>
          <div className="box-class-left">
            <div className="information-option">
              <ul>
                <li className="active">
                  <Link to="#">For You</Link>
                </li>
                <li>
                  <Link to="#">Trending</Link>
                </li>
                <li>
                  <Link to="#">Following</Link>
                </li>
              </ul>
            </div>
            <div className="cnlanc">
              <div className="img">
                <img src={require("../../assets/seller1.jpg")} alt="" />
              </div>
              <div className="sign-post">
                <input type="text" placeholder=" Sign in to post..." />
                <AiOutlineSend></AiOutlineSend>
              </div>
            </div>
            <div>
              <div>
                <div class="item">
                  <div class="img">
                    <img src={require("../../assets/seller2.png")} alt="" />
                  </div>
                  <div class="conten">
                    <div class="box-class-title">
                      <p>Lam Tam</p>
                      <p className="small-text">Posted • 1h ago</p>
                    </div>
                  </div>
                </div>

                <div class="conten-audio">
                  <div class="image-audio">
                    <img src={require("../../assets/1.jpg")} alt="" />
                  </div>
                  <div class="info-audio">
                    <h4>At My Worst</h4>
                    <h5>Pink Sweat$</h5>
                    <span>5 minted</span>
                    <div class="d-flex  margin-t25">
                      <audio controls>
                        <source src={require("../../assets/audio/1.mp3")} />
                      </audio>
                      <div class="button-audio">
                        <button>Collect</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="item">
                  <div class="img">
                    <img src={require("../../assets/seller4.png")} alt="" />
                  </div>
                  <div class="conten">
                    <div class="box-class-title">
                      <p>Phong The Tran</p>
                      <p className="small-text">Posted • 15h ago</p>
                    </div>
                  </div>
                </div>

                <div class="conten-audio">
                  <div class="image-audio">
                    <img src={require("../../assets/1.jpg")} alt="" />
                  </div>
                  <div class="info-audio">
                    <h4>At My Worst</h4>
                    <h5>Pink Sweat$</h5>
                    <span>4 minted</span>
                    <div class="d-flex  margin-t25">
                      <audio controls>
                        <source src={require("../../assets/audio/1.mp3")} />
                      </audio>
                      <div class="button-audio">
                        <button>Collect</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="item">
                  <div class="img">
                    <img src={require("../../assets/seller5.png")} alt="" />
                  </div>
                  <div class="conten">
                    <div class="box-class-title">
                      <p>Phuc Trong</p>
                      <p className="small-text">Posted • 19h ago</p>
                    </div>
                  </div>
                </div>

                <div class="conten-audio">
                  <div class="image-audio">
                    <img src={require("../../assets/1.jpg")} alt="" />
                  </div>
                  <div class="info-audio">
                    <h4>At My Worst</h4>
                    <h5>Pink Sweat$</h5>
                    <span>3 minted</span>
                    <div class="d-flex  margin-t25">
                      <audio controls>
                        <source src={require("../../assets/audio/1.mp3")} />
                      </audio>
                      <div class="button-audio">
                        <button>Collect</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="item">
                  <div class="img">
                    <img src={require("../../assets/seller6.jpg")} alt="" />
                  </div>
                  <div class="conten">
                    <div class="box-class-title">
                      <p>Huy Quang</p>
                      <p className="small-text">Posted • 24h ago</p>
                    </div>
                  </div>
                </div>

                <div class="conten-audio">
                  <div class="image-audio">
                    <img src={require("../../assets/1.jpg")} alt="" />
                  </div>
                  <div class="info-audio">
                    <h4>At My Worst</h4>
                    <h5>Pink Sweat$</h5>
                    <span>2 minted</span>
                    <div class="d-flex margin-t25">
                      <audio controls>
                        <source src={require("../../assets/audio/1.mp3")} />
                      </audio>
                      <div class="button-audio">
                        <button>Collect</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar-right">
            <p className="title">People to follow</p>
            <div class="item">
              <div class="image">
                <img src={require("../../assets/seller2.png")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/seller3.png")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/seller4.png")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/seller5.png")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/seller6.jpg")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <p className="title">Artists to follow</p>
            <div class="item">
              <div class="image">
                <img src={require("../../assets/banner0.jpg")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/banner2.jpg")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/banner4.jpg")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/banner5.jpg")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="image">
                <img src={require("../../assets/bids8.png")} alt="" />
              </div>
              <div class="content">
                <div class="content-sidebar-title">
                  <p>Lazy Members</p>
                  <p>800 followers</p>
                </div>
                <div class="content-button">
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Feed;
