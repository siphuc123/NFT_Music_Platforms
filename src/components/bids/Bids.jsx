import React from 'react'
import './bids.css'
import { Link } from 'react-router-dom';
// icon
import { AiOutlineHeart } from "react-icons/ai";
import { BiPlayCircle, BiSkipNext, BiSkipPrevious, BiSolidVolumeFull } from 'react-icons/bi';
import { BsFillPlayFill, BsFillShareFill } from 'react-icons/bs';


// ------- image -------
import jpg1 from '../../assets/1.jpg'
/*music play end*/
import jpg2 from '../../assets/2.jpg'
import jpg4 from '../../assets/4.jpg'
import jpg6 from '../../assets/6.jpg'
import banner3 from '../../assets/banner3.jpg'
import { FaEllipsisVertical } from 'react-icons/fa6';

const Bids = ({title}) => {
  return (
    <div className='bids section__padding'>
        <section className="ranking-week">
            <div className="ranking-box">
                <div className="ranking-box-left">
                    <h2>Ranking this week <BsFillShareFill className='bx bxs-share-alt'></BsFillShareFill></h2>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>1</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="1"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>2</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="2"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>3</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="3"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>4</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="4"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>5</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="5"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>

                </div>



                <div className="ranking-box-right">
                    <h2></h2>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>6</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="6"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>7</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="7"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>8</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="8"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>9</span>
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="9"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
                        </div>
                    </li>
                    <li className="songItem">
                        <div className="music-ranking">
                            <span>10</span>
                            <div className="fixer-position">
                            <img src="" alt=""/>
                            <div className="name-rank-cus-ast">
                                <Link to='product_detail.html'>
                                <h5>Name Music
                                    <p className="subtitle">Name Artist</p>
                                </h5>
                                </Link>    
                            </div>
                            <div className="ranking-playorpause">
                                <BiPlayCircle className='bx playListPlay bx-play-circle ' id="10"></BiPlayCircle>
                            </div>
                            <div className="hiden-ranking">
                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                <button>Collect</button>
                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                            </div>
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
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="11"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
                                            <div className="fress-fan-title">
                                                <p>KindLord</p>
                                                <p className="fan-title-red">mint 1 edition</p>
                                            </div>
                                        </div>
                                </li>
                                </div>

                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="12"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
                                            <div className="fress-fan-title">
                                                <p>KindLord</p>
                                                <p className="fan-title-red">mint 1 edition</p>
                                            </div>
                                        </div>
                                </li>
                                </div>

                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p clclassNameass="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="13"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
                                            <div className="fress-fan-title">
                                                <p>KindLord</p>
                                                <p className="fan-title-red">mint 1 edition</p>
                                            </div>
                                        </div>
                                </li>
                                </div>
                                
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="14"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
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
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="15"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
                                            <div className="fress-fan-title">
                                                <p>KindLord</p>
                                                <p className="fan-title-red">mint 1 edition</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                               
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="16"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
                                            <div className="fress-fan-title">
                                                <p>KindLord</p>
                                                <p className="fan-title-red">mint 1 edition</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="17"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
                                            <div className="fress-fan-title">
                                                <p>KindLord</p>
                                                <p className="fan-title-red">mint 1 edition</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            <div className="option-in-music">
                                                <AiOutlineHeart className='bx bx-heart'></AiOutlineHeart>
                                                <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="18"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img src={banner3} alt=""/>
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
            <aside className="box_content1" >
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
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="recent-option">
                                                <p className="Recentprice">0.9 SOL</p>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="19"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img className="recentimg" src={banner3} alt=""/>
                                            <img className="recentimg1" src={banner3} alt=""/>
                                            <img className="recentimg2" src={banner3} alt=""/>
                                            <div className="recent-title">
                                                <p >12 mints</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="recent-option">
                                                <p className="Recentprice">0.9 SOL</p>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="20"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img className="recentimg" src={banner3} alt=""/>
                                            <img className="recentimg1" src={banner3} alt=""/>
                                            <img className="recentimg2" src={banner3} alt=""/>
                                            <div className="recent-title">
                                                <p >12 mints</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="recent-option">
                                                <p className="Recentprice">0.9 SOL</p>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="21"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img className="recentimg" src={banner3} alt=""/>
                                            <img className="recentimg1" src={banner3} alt=""/>
                                            <img className="recentimg2" src={banner3} alt=""/>
                                            <div className="recent-title">
                                                <p >12 mints</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="musiclist-box">
                                    <li className="songItem">
                                        <img src="" alt="" className="musiclist-imgage"/>
                                        <div className="musiclist-cus-ast">
                                            <a href="product_detail.html">
                                            <h5>
                                                <p className="subtitle"></p>
                                            </h5>
                                            </a>
                                            <div className="recent-option">
                                                <p className="Recentprice">0.9 SOL</p>
                                            </div>
                                        </div>
                                        <div className="play_pause_hover">
                                            <BiPlayCircle className='bx playListPlay bx-play-circle ' id="22"></BiPlayCircle>
                                        </div>
                                        <div className="fress-fan">
                                            <img className="recentimg" src={banner3} alt=""/>
                                            <img className="recentimg1" src={banner3} alt=""/>
                                            <img className="recentimg2" src={banner3} alt=""/>
                                            <div className="recent-title">
                                                <p >12 mints</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>



                            </div>
                            
                            

                        </nav>
                        <nav class="dashboard1">
                            <div class="musiclist">  
                            <div class="musiclist-box">
                                <li class="songItem">
                                    <img src="" alt="" class="musiclist-imgage"/>
                                    <div class="musiclist-cus-ast">
                                        <h5>
                                            <p class="subtitle"></p>
                                        </h5>
                                        <div class="recent-option">
                                            <p class="Recentprice">0.9 SOL</p>
                                        </div>
                                    </div>
                                    <div class="play_pause_hover">
                                        <BiPlayCircle className='bx playListPlay bx-play-circle ' id="23"></BiPlayCircle>
                                    </div>
                                    <div class="fress-fan">
                                        <img class="recentimg" src={banner3} alt=""/>
                                        <img class="recentimg1" src={banner3} alt=""/>
                                        <img class="recentimg2" src={banner3} alt=""/>
                                        <div class="recent-title">
                                            <p >12 mints</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div class="musiclist-box">
                                <li class="songItem">
                                    <img src="" alt="" class="musiclist-imgage"/>
                                    <div class="musiclist-cus-ast">
                                        <h5>
                                            <p class="subtitle"></p>
                                        </h5>
                                        <div class="recent-option">
                                            <p class="Recentprice">0.9 SOL</p>
                                        </div>
                                    </div>
                                    <div class="play_pause_hover">
                                        <BiPlayCircle className='bx playListPlay bx-play-circle ' id="24"></BiPlayCircle>
                                    </div>
                                    <div class="fress-fan">
                                        <img class="recentimg" src={banner3} alt=""/>
                                        <img class="recentimg1" src={banner3} alt=""/>
                                        <img class="recentimg2" src={banner3} alt=""/>
                                        <div class="recent-title">
                                            <p >12 mints</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div class="musiclist-box">
                                <li class="songItem">
                                    <img src="" alt="" class="musiclist-imgage"/>
                                    <div class="musiclist-cus-ast">
                                        <h5>
                                            <p class="subtitle"></p>
                                        </h5>
                                        <div class="recent-option">
                                            <p class="Recentprice">0.9 SOL</p>
                                        </div>
                                    </div>
                                    <div class="play_pause_hover">
                                        <BiPlayCircle className='bx playListPlay bx-play-circle ' id="25"></BiPlayCircle>
                                    </div>
                                    <div class="fress-fan">
                                        <img class="recentimg" src={banner3} alt=""/>
                                        <img class="recentimg1" src={banner3} alt=""/>
                                        <img class="recentimg2" src={banner3} alt=""/>
                                        <div class="recent-title">
                                            <p >12 mints</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div class="musiclist-box">
                                <li class="songItem">
                                    <img src="" alt="" class="musiclist-imgage"/>
                                    <div class="musiclist-cus-ast">
                                        <h5>
                                            <p class="subtitle"></p>
                                        </h5>
                                        <div class="recent-option">
                                            <p class="Recentprice">0.9 SOL</p>
                                        </div>
                                    </div>
                                    <div class="play_pause_hover">
                                        <BiPlayCircle className='bx playListPlay bx-play-circle ' id="26"></BiPlayCircle>
                                    </div>
                                    <div class="fress-fan">
                                        <img class="recentimg" src={banner3} alt=""/>
                                        <img class="recentimg1" src={banner3} alt=""/>
                                        <img class="recentimg2" src={banner3} alt=""/>
                                        <div class="recent-title">
                                            <p >12 mints</p>
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

    </div>
  )
}

export default Bids
