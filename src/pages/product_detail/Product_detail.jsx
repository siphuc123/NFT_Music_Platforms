import React from 'react';
import './Product_detail.css'
import img3 from '../../assets/3.jpg'
import { Link } from 'react-router-dom';
import {BsBoxArrowUpRight} from "react-icons/bs";
import {BiSolidVolumeMute} from "react-icons/bi"
import {AiOutlineHeart, AiFillPlayCircle, AiFillInfoCircle, AiFillEye, AiOutlineClockCircle} from "react-icons/ai"
import {FaBarsStaggered, FaEllipsisVertical, FaIcons} from "react-icons/fa6"
import {FaShoppingCart} from "react-icons/fa"
import { Header } from '../../components';

import baner0 from '../../assets/banner0.jpg'
import baner3 from '../../assets/banner3.jpg'
import baner1 from '../../assets/banner1.jpg'

const Product_detail = () => {



  return( 
      <div className='product section__padding'>
          <section id="body-detail-item1" className="product-detail">
            <div className="product-detail-box">

              <div className="product-left">
                <div className="cart-product">
                        <img src={img3} alt=""/>
                        <div className="inter-img-time">
                          <AiFillPlayCircle></AiFillPlayCircle>
                            <p className="time-start">0.00 <span>/</span></p>
                            <p className="time-end">0.00</p> 
                        </div>
                        <div className="inter-img">
                        <div className="bar3">
                            <input type="range" id="seek1" min="0" value="0" max="100"/>
                            <div className="bar4" id="bar4"></div>
                            <div className="dot4"></div>
                        </div>
                        <div className="icon-title-bar">
                            <BiSolidVolumeMute className='bx bx-fullscreen'></BiSolidVolumeMute>
                            <FaEllipsisVertical className='bx bx-dots-horizontal-rounded'></FaEllipsisVertical>
                        </div>
                        </div>
                        <div className="product-item1">
                            <div className="product-title">
                                <svg width="15px" height="15px" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z" fill="url(#paint0_linear_174_4403)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_174_4403" x1="8.52558" y1="90.0973" x2="88.9933" y2="-3.01622" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.08" stop-color="#00000"/>
                                    <stop offset="0.5" stop-color="#00000"/>
                                    <stop offset="0.6" stop-color="#00000"/>
                                    <stop offset="0.72" stop-color="#00000"/>
                                    <stop offset="0.97" stop-color="#00000"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            <span><p className="product-detail-coin">Chain:</p><p className="product-coin">SOL</p></span> 
                            </div>
                            <div className="product-link">
                              
                              <Link to={""}><BsBoxArrowUpRight className=''></BsBoxArrowUpRight></Link>
                              <Link to={""}><AiOutlineHeart className='bx bx-heart'></AiOutlineHeart></Link>
                            </div>
                        </div>
                </div>
                <div className="detail-id">
                  <div className="detail-id-box">
                        <h4><AiFillInfoCircle className="fa-solid fa-circle-info"></AiFillInfoCircle> Details</h4>
                        <div className="contract">
                            <h3>Contract Address</h3>
                            <p>  0x37a0...6535 </p>
                        </div>
                        <div>
                            <h3>Token ID</h3>
                            <p> 6805647338418769...</p>
                        </div>
                        <div>
                            <h3>Token Standard </h3>
                            <p> ERC-721</p>
                        </div>
                        <div>
                            <h3>Chain</h3>
                            <p>SOLANA</p>
                        </div>
                    <div>
                        <h3>Creator Earnings</h3>
                        <p>15%</p>
                   </div>
                  </div>
                </div>
              </div>
              <div className="product-right">
                    <div className="detail-name">
                        <div className="arts-customer">
                            <p>MESTO</p>
                            <h3>Leyla</h3>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="product-information">
                        <div className="product-information-title">
                            <span><AiFillEye className="fa-regular fa-eye"></AiFillEye> 288 Views </span>
                            <span><AiOutlineHeart className="fa-regular fa-heart"></AiOutlineHeart> 183 Favorites </span>
                            <span><FaIcons className="fa-solid fa-icons"></FaIcons> Music </span>
                        </div>
                        <div className="product-information-sale-time">
                            <span><AiOutlineClockCircle className="fa-regular fa-clock"></AiOutlineClockCircle> Sale ends November 1,2023 at 4:35 PM </span>
                            <div className="product-information-inner">
                                <div className="product-information-price">
                                    <p className="Current-price">Current price</p>
                                    <h3>0.15 SOL</h3>
                                    <p className="price-hide">$1,920,30</p>
                                </div>
                                <div className="product-information-buy">
                                    <button className="buy">Buy now<FaShoppingCart className="fa-solid fa-cart-shopping buy-cart"></FaShoppingCart></button>
                                    <button className="offer">Make offer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-description">
                        <div className="description-title">
                            <h2><FaBarsStaggered className="fa-solid fa-bars-staggered"d></FaBarsStaggered><i></i> Description</h2>

                        </div>
                        <span>By <p>Dany Huy</p></span>
                        <p className="product-description-title1">
                            The Shroud cloud the minds of their enemies,
                            making it near impossible to tell friend from foe.
                        </p>

                    </div>

                    

                </div>
            </div>
          </section>
          <section id="body-detail-item1" className="collection">
                <div className="collection-box">
                    <div className="collection-title">
                        <h3>More form this collection</h3>
                    </div>
                    <div className="collection-product-box">
                        <div className="collection-product">
                            <img src={baner3} alt="" />
                            <div className="collection-product-price">
                                <h4>Nuxros Alpha</h4>
                                <h5>0.15 SOL</h5>
                                <p>Last Sale: 0.11 SOL</p>
                            </div>
                            <div className="collection-tag">
                                <button>#1234</button>
                            </div>
                        </div>
                        <div className="collection-product">
                            <img src={baner1} alt=""/>
                            <div className="collection-product-price">
                                <h4>Nuxros Alpha</h4>
                                <h5>0.15 SOL</h5>
                                <p>Last Sale: 0.11 SOL</p>
                            </div>
                            <div className="collection-tag">
                                <button>#1234</button>
                            </div>
                        </div>
                        <div className="collection-product">
                            <img src={baner0} alt=""/>
                            <div className="collection-product-price">
                                <h4>Nuxros Alpha</h4>
                                <h5>0.15 SOL</h5>
                                <p>Last Sale: 0.11 SOL</p>
                            </div>
                            <div className="collection-tag">
                                <button>#1234</button>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
      </div>
  )
};

export default Product_detail;
