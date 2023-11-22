import React from "react";
import "./bids.css";
import { Link } from "react-router-dom";
// icon
import { AiOutlineHeart } from "react-icons/ai";
import {BiPlayCircle, BiShareAlt} from "react-icons/bi";
import { FaEllipsisVertical } from "react-icons/fa6";
// ------- image -------
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";


const Bids = ({ title }) => {
  return (
    <>
      <section className="ranking-week">
        <div className="ranking-box">
          <div className="ranking-box-left">
            <h2>
              Ranking this week <BiShareAlt className="bx bxs-share-alt"></BiShareAlt>
            </h2>
            <li className="songItem">
              <div className="music-ranking">
                <span>1</span>
                <img src={require("../../assets/1.jpg")}  alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause">
                  <BiPlayCircle id="1"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>2</span>
                <img src={require("../../assets/2.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause">
                  <BiPlayCircle
                    className="bx playListPlay bx-play-circle "
                    id="2"
                  ></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart className="bx bx-heart"></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>3</span>
                <img src={require("../../assets/3.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause">
                  <BiPlayCircle id="3"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>4</span>
                <img src={require("../../assets/4.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause">
                  <BiPlayCircle id="4"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>5</span>
                <img src={require("../../assets/5.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause">
                  <BiPlayCircle id="5"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
          </div>

          <div className="ranking-box-right">
            <li className="songItem">
              <div className="music-ranking">
                <span>6</span>
                <img src={require("../../assets/6.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause1">
                  <BiPlayCircle id="6"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>7</span>
                <img src={require("../../assets/7.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause1">
                  <BiPlayCircle id="7"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>8</span>
                <img src={require("../../assets/8.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause1">
                  <BiPlayCircle id="8"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>9</span>
                <img src={require("../../assets/9.jpg")} alt="" />
                <div className="name-rank-cus-ast">
                  <Link to="/item/nfts">
                    <h5>
                      Name Music
                      <p className="subtitle">Name Artist</p>
                    </h5>
                  </Link>
                </div>
                <div className="ranking-playorpause1">
                  <BiPlayCircle id="9"></BiPlayCircle>
                </div>
                <div className="hiden-ranking">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
            <li className="songItem">
              <div className="music-ranking">
                <span>10</span>
                <div className="fixer-position">
                  <img src={require("../../assets/10.jpg")} alt="" />
                  <div className="name-rank-cus-ast">
                    <Link to="/item/nfts">
                      <h5>
                        Name Music
                        <p className="subtitle">Name Artist</p>
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className="ranking-playorpause1">
                  <BiPlayCircle id="10"></BiPlayCircle>
                </div>
                <div className="hiden-ranking1">
                  <AiOutlineHeart></AiOutlineHeart>
                  <button>Collect</button>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </div>
            </li>
          </div>
        </div>
      </section>

      <section className="Show-music-playlist">
        <h2>Freshly minted</h2>
        <div>
          <aside className="box_content">
            <setction className="status">
              <div className="myStt">
                <div className="details active">
                  <span>Top Collector</span>
                </div>

                <div className="details">
                  <span>Following</span>
                </div>
              </div>
            </setction>

            <div className="idea">
              <nav className="dashboard first">
                <div className="musiclist">
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/11.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="11"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner2} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/12.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="12"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner3} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/13.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="13"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner1} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/14.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="14"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner2} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </nav>

              <nav className="dashboard">
                <div className="musiclist">
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/15.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="15"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner1} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/16.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="16"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner3} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/17.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="17"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner3} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/18.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="option-in-music">
                          <AiOutlineHeart></AiOutlineHeart>
                          <FaEllipsisVertical></FaEllipsisVertical>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="18"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img src={banner2} alt="" />
                        <div className="fress-fan-title">
                          <p>KindLord</p>
                          <p className="fan-title-red">mint 1 edition</p>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </section>

      <section className="Show-music-playlist">
        <h2>Recent Drops</h2>
        <div>
          <aside className="box_content1">
            <setction className="status1">
              <div className="myStt1">
                <div className="details1 active5">
                  <span>Hot</span>
                </div>

                <div className="details1">
                  <span>Following</span>
                </div>
              </div>
            </setction>

            <div className="idea1">
              <nav className="dashboard1 first1">
                <div className="musiclist">
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/19.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="19"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner2} alt="" />
                        <img className="recentimg1" src={banner3} alt="" />
                        <img className="recentimg2" src={banner1} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/20.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="20"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner3} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner1} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/21.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="21"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner1} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner3} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/22.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <Link to="/item/nfts">
                          <h5>
                            <p className="subtitle"></p>
                          </h5>
                        </Link>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="22"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner1} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner3} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </nav>

              <nav className="dashboard1">
                <div className="musiclist">
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/23.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="23"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner1} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner3} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/24.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="24"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner1} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner3} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/25.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="25"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner1} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner3} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="musiclist-box">
                    <li className="songItem">
                      <img src={require("../../assets/26.jpg")} alt="" className="musiclist-imgage" />
                      <div className="musiclist-cus-ast">
                        <h5>
                          <p className="subtitle"></p>
                        </h5>
                        <div className="recent-option">
                          <p className="Recentprice">0.9 SOL</p>
                        </div>
                      </div>
                      <div className="play_pause_hover">
                        <BiPlayCircle id="26"></BiPlayCircle>
                      </div>
                      <div className="fress-fan">
                        <img className="recentimg" src={banner1} alt="" />
                        <img className="recentimg1" src={banner2} alt="" />
                        <img className="recentimg2" src={banner3} alt="" />
                        <div className="recent-title">
                          <p>12 mints</p>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Bids;
