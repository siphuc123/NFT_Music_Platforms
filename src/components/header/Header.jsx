import React from "react";
import "./header.css";
// icon
import { AiOutlineHeart } from "react-icons/ai";
import {
  BiPlayCircle,
  BiSkipNext,
  BiSkipPrevious,
  BiSolidVolumeFull,
} from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div class="romuoter">
        <div class="master_play">
          <div class="wave">
            <div class="wave1"></div>
            <div class="wave1"></div>
            <div class="wave1"></div>
          </div>
          <img
            src={require("../../assets/1.jpg")}
            alt="Astis"
            id="poster_master_play"
          />
          <h5 id="title">
            {" "}
            <br />
            <div class="subtitle"></div>
          </h5>
          <div class="icon">
            <BiSkipPrevious id="back"></BiSkipPrevious>
            <BiPlayCircle id="masterPlay"></BiPlayCircle>
            <BiSkipNext id="next"></BiSkipNext>
          </div>
          <span id="currentStart">0:00</span>
          <div class="bar">
            <input type="range" id="seek" min="0" value="0" max="100" />
            <div class="bar2" id="bar2"></div>
            <div class="dot"></div>
          </div>
          <span id="currentEnd">0:00</span>

          <div class="vol">
            <BiSolidVolumeFull id="vol_icon"></BiSolidVolumeFull>
            <input type="range" id="vol" min="0" value="30" max="100" />
            <div class="vol_bar"></div>
            <div class="dot" id="vol_dot"></div>
          </div>
          <div class="romuoter-heart">
            <AiOutlineHeart></AiOutlineHeart>
          </div>
          <div class="romuoter-collect">
            <button>Collect</button>
          </div>
        </div>
      </div>

      <section class="banner-group">
        <div class="banner-box">
          <div class="slideshow-container">
            <div class="mySlides1">
              <img src={require("../../assets/6.jpg")} alt="" />
            </div>

            <div class="mySlides1">
              <img src={require("../../assets/4.jpg")} alt="" />
            </div>

            <div class="mySlides1">
              <img src={require("../../assets/2.jpg")} alt="" />
            </div>
          </div>

          <div class="banner-show ">
            <img
              class="iner0-bannr"
              src={require("../../assets/6.jpg")}
              alt=""
            />
            <div class="banner-show-box">
              <div class="banner-inner-show">
                <div class="play-music-out">
                  <button class="play-pause">
                    <BsFillPlayFill
                      class="bx playListPlay bx-play-circle "
                      id="6"
                    ></BsFillPlayFill>
                  </button>
                  <h5>Million Days</h5>
                  <div>
                    <p class="name-ast">Sabai. 45 mints</p>
                    <p class="show-time-out">end in 3d</p>
                  </div>
                  <button class="collec">Collect now</button>
                </div>
              </div>
              <div class="user-show-baner">
                <div class="user-list-banner">
                  <div class="user-list-banner-box">
                    <div class="username-list-banner">
                      <h5>Name artist</h5>
                      <p>8 editions</p>
                    </div>
                    <div class="img-user-banner">
                      <img src={require("../../assets/banner0.jpg")} alt="" />
                      <p class="quantity">1</p>
                    </div>
                  </div>
                  <div class="user-list-banner-box">
                    <div class="username-list-banner">
                      <h5>Name artist</h5>
                      <p>8 editions</p>
                    </div>
                    <div class="img-user-banner">
                      <img src={require("../../assets/banner0.jpg")} alt="" />
                      <p class="quantity">2</p>
                    </div>
                  </div>
                  <div class="user-list-banner-box">
                    <div class="username-list-banner">
                      <h5>Name artist</h5>
                      <p>8 editions</p>
                    </div>
                    <div class="img-user-banner">
                      <img src={require("../../assets/banner0.jpg")} alt="" />
                      <p class="quantity">3</p>
                    </div>
                  </div>
                  <div class="user-list-banner-box">
                    <div class="username-list-banner">
                      <h5>Name artist</h5>
                      <p>8 editions</p>
                    </div>
                    <div class="img-user-banner">
                      <img src={require("../../assets/banner0.jpg")} alt="" />
                      <p class="quantity">4</p>
                    </div>
                  </div>
                  <div class="user-list-banner-box">
                    <div class="username-list-banner">
                      <h5>Name artist</h5>
                      <p>8 editions</p>
                    </div>
                    <div class="img-user-banner">
                      <img src={require("../../assets/banner0.jpg")} alt="" />
                      <p class="quantity">5</p>
                    </div>
                  </div>
                  <div class="user-list-banner-box">
                    <div class="username-list-banner">
                      <h5>Name artist</h5>
                      <p>8 editions</p>
                    </div>
                    <div class="img-user-banner">
                      <img src={require("../../assets/banner0.jpg")} alt="" />
                      <p class="quantity">6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    /* <div className="header section__padding">
       <div className="romuoter">
         <div className="master_play">
           <div className="wave">
             <div className="wave1"></div>
            <div className="wave1"></div>
             <div className="wave1"></div>
          </div>
           <img src={jpg1} alt="Astis" id="poster_master_play" />
           <h5 id="title">
             <div className="subtitle"></div>
           </h5>
          <div className="icon">
            <BiSkipPrevious id="back"></BiSkipPrevious>
           <BsFillPlayFill
    //           className="bx bx-play"
    //           id="masterPlay"
    //         ></BsFillPlayFill>
    //         <BiSkipNext className="bx bx-skip-next" id="next"></BiSkipNext>
    //       </div>
    //       <span id="currentStart">0:00</span>
    //       <div className="bar">
    //         <input type="range" id="seek" min="0" defaultValue="0" max="100" />
    //         <div className="bar2" id="bar2"></div>
    //         <div className="dot"></div>
    //       </div>
    //       <span id="currentEnd">0:00</span>

    //       <div className="vol">
    //         <BiSolidVolumeFull id="vol_icon"></BiSolidVolumeFull>
    //         <input type="range" id="vol" min="0" defaultValue="30" max="100" />
    //         <div className="vol_bar"></div>
    //         <div className="dot" id="vol_dot"></div>
    //       </div>
    //       <div className="romuoter-heart">
    //         <AiOutlineHeart className="bx bx-heart"></AiOutlineHeart>
    //       </div>
    //       <div className="romuoter-collect">
    //         <button>Collect</button>
    //       </div>
    //     </div>
    //   </div>
    //   <section className="banner-group">
    //     <div className="banner-box">
    //       <div className="slideshow-container">
    //         <div className="mySlides1">
    //           <img src={jpg6} alt="" />
    //         </div>

    //         <div className="mySlides1">
    //           <img src={jpg4} alt="" />
    //         </div>

    //         <div className="mySlides1">
    //           <img src={jpg2} alt="" />
    //         </div>
    //       </div>

    //       <div className="banner-show ">
    //         <img className="iner0-bannr" src={jpg6} alt="" />
    //         <div className="banner-show-box">
    //           <div className="banner-inner-show">
    //             <div className="play-music-out">
    //               <button className="play-pause">
    //                 <BiPlayCircle
    //                   className="bx playListPlay bx-play-circle "
    //                   id="6"
    //                 ></BiPlayCircle>
    //               </button>
    //               <h5>Million Days</h5>
    //               <div>
    //                 <p className="name-ast">Sabai. 45 mints</p>
    //                 <p className="show-time-out">end in 3d</p>
    //               </div>
    //               <button className="collec">Collect now</button>
    //             </div>
    //           </div>
    //           <div className="user-show-baner">
    //             <div className="user-list-banner">
    //               <div className="user-list-banner-box">
    //                 <div className="username-list-banner">
    //                   <h5>Name artist</h5>
    //                   <p>8 editions</p>
    //                 </div>
    //                 <div className="img-user-banner">
    //                   <img src={banner0} alt="" />
    //                   <p className="quantity">1</p>
    //                 </div>
    //               </div>
    //               <div className="user-list-banner-box">
    //                 <div className="username-list-banner">
    //                   <h5>Name artist</h5>
    //                   <p>8 editions</p>
    //                 </div>
    //                 <div className="img-user-banner">
    //                   <img src={banner0} alt="" />
    //                   <p className="quantity">2</p>
    //                 </div>
    //               </div>
    //               <div className="user-list-banner-box">
    //                 <div className="username-list-banner">
    //                   <h5>Name artist</h5>
    //                   <p>8 editions</p>
    //                 </div>
    //                 <div className="img-user-banner">
    //                   <img src={banner0} alt="" />
    //                   <p className="quantity">3</p>
    //                 </div>
    //               </div>
    //               <div className="user-list-banner-box">
    //                 <div className="username-list-banner">
    //                   <h5>Name artist</h5>
    //                   <p>8 editions</p>
    //                 </div>
    //                 <div className="img-user-banner">
    //                   <img src={banner0} alt="" />
    //                   <p className="quantity">4</p>
    //                 </div>
    //               </div>
    //               <div className="user-list-banner-box">
    //                 <div className="username-list-banner">
    //                   <h5>Name artist</h5>
    //                   <p>8 editions</p>
    //                 </div>
    //                 <div className="img-user-banner">
    //                   <img src={banner0} alt="" />
    //                   <p className="quantity">5</p>
    //                 </div>
    //               </div>
    //               <div className="user-list-banner-box">
    //                 <div className="username-list-banner">
    //                   <h5>Name artist</h5>
    //                   <p>8 editions</p>
    //                 </div>
    //                 <div className="img-user-banner">
    //                   <img src={banner0} alt="" />
    //                   <p className="quantity">6</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div> */
  );
};

export default Header;
