import React, { useEffect } from "react";
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
  useEffect(() => {
    /*Wapprer */
    const wrapper = document.querySelector(".wrapper");
    const btnPopup = document.querySelector(".btnLogin-popup");
    const iconClose = document.querySelector(".icon-close");
    const otherButton = document.querySelector("#otherButton");

    btnPopup.addEventListener("click", () => {
      btnPopup.classList.add("hide");
    });
    btnPopup.addEventListener("click", () => {
      otherButton.classList.add("show");
    });

    otherButton.addEventListener("click", () => {
      otherButton.classList.add("show");
    });
    otherButton.addEventListener("click", () => {
      btnPopup.classList.add("hide");
    });

    btnPopup.addEventListener("click", () => {
      wrapper.classList.add("active-popup");
    });

    iconClose.addEventListener("click", () => {
      wrapper.classList.remove("active-popup");
    });

    /*Sile Show */

    let slideIndex = 1;
    let slideId = "mySlides1";
    showSlides(slideIndex);
    autoSlide(5000); // Chuyển slide tự động sau mỗi 5 giây

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      let x = document.getElementsByClassName(slideId);

      if (n > x.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = x.length;
      }

      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

      x[slideIndex - 1].style.display = "block";
    }

    function autoSlide(interval) {
      setInterval(() => {
        plusSlides(1);
      }, interval);
    }

    /*music */

    const music = new Audio("audio/1.mp3");

    const songs = [
      {
        id: "1",
        songName: ` At My Worst
  <p class="subtitle">Pink Sweats</p> `,
        poster: "../../assets/1.jpg",
      },
      {
        id: "2",
        songName: `Sweet but Psycho
  <p class="subtitle">Ava Max</p> `,
        poster: "../../assets/2.jpg",
      },
      {
        id: "3",
        songName: `Leyla
  <p class="subtitle">mesto</p> `,
        poster: "../../assets/3.jpg",
      },
      {
        id: "4",
        songName: `Shape of You
  <p class="subtitle">Ed Sheeran</p> `,
        poster: "../../assets/4.jpg",
      },
      {
        id: "5",
        songName: `You Broke Me First
  <p class="subtitle">Tate Mcrae</p> `,
        poster: "../../assets/5.jpg",
      },
      {
        id: "6",
        songName: `Million Days
  <p class="subtitle">Sabai</p> `,
        poster: "../../assets/6.jpg",
      },
      {
        id: "7",
        songName: `Better Love
  <p class="subtitle">Camylio</p> `,
        poster: "../../assets/7.jpg",
      },
      {
        id: "8",
        songName: `Rude
  <p class="subtitle">MAGIC!</p> `,
        poster: "../../assets/8.jpg",
      },
      {
        id: "9",
        songName: `Long Binh Border
  <p class="subtitle">Obito</p> `,
        poster: "../../assets/9.jpg",
      },
      {
        id: "10",
        songName: `Creepin
  <p class="subtitle">Metro Boomin</p> `,
        poster: "../../assets/10.jpg",
      },
      {
        id: "11",
        songName: `Save Your Tears
  <p class="subtitle">The Weeknd</p> `,
        poster: "../../assets/11.jpg",
      },
      {
        id: "12",
        songName: `Unstoppable
  <p class="subtitle">Sia</p> `,
        poster: "../../assets/12.jpg",
      },
      {
        id: "13",
        songName: `A Thousand Years
  <p class="subtitle">Christina</p> `,
        poster: "../../assets/13.jpg",
      },
      {
        id: "14",
        songName: `Play Date
  <p class="subtitle">M.Martinez</p> `,
        poster: "../../assets/14.jpg",
      },
      {
        id: "15",
        songName: `You are the reason
  <p class="subtitle">Calum Scott</p> `,
        poster: "../../assets/15.jpg",
      },
      {
        id: "16",
        songName: `Havana
  <p class="subtitle">Camila Cabello</p> `,
        poster: "../../assets/16.jpg",
      },
      {
        id: "17",
        songName: `Closer
  <p class="subtitle">The Chainsmokers</p> `,
        poster: "../../assets/17.jpg",
      },
      {
        id: "18",
        songName: `Rolling in the Deep
  <p class="subtitle">Adele</p> `,
        poster: "../../assets/18.jpg",
      },
      {
        id: "19",
        songName: `Symphony
  <p class="subtitle">Clean Bandit</p> `,
        poster: "../../assets/19.jpg",
      },
      {
        id: "20",
        songName: `Way Back Home
  <p class="subtitle">Shaun</p> `,
        poster: "../../assets/20.jpg",
      },
      {
        id: "21",
        songName: `Dance Monkey
  <p class="subtitle">Tones and I</p> `,
        poster: "../../assets/21.jpg",
      },
      {
        id: "22",
        songName: `Attention
  <p class="subtitle">Charlie Puth</p> `,
        poster: "../../assets/22.jpg",
      },
      {
        id: "23",
        songName: `Nothing On You
  <p class="subtitle">B.o.B</p> `,
        poster: "../../assets/23.jpg",
      },
      {
        id: "24",
        songName: `DayLight
  <p class="subtitle">David Kushner</p> `,
        poster: "../../assets/24.jpg",
      },
      {
        id: "25",
        songName: `Impossible
  <p class="subtitle">James Aethur</p> `,
        poster: "../../assets/25.jpg",
      },
      {
        id: "26",
        songName: `We Dont Talk Anymore
  <p class="subtitle">Charlie Puth</p> `,
        poster: "../../assets/26.jpg",
      },
    ];

    Array.from(document.getElementsByClassName("songItem")).forEach(
      (element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].poster;
        element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
      }
    );

    let masterPlay = document.getElementById("masterPlay");
    let wave = document.getElementsByClassName("wave")[0];

    masterPlay.addEventListener("click", () => {
      if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove("bx-play");
        masterPlay.classList.add("bx-pause");
        wave.classList.add("active2");
      } else {
        music.pause();
        masterPlay.classList.add("bx-play");
        masterPlay.classList.remove("bx-pause");
        wave.classList.remove("active2");
      }
    });

    const makeAllPlays = () => {
      Array.from(document.getElementsByClassName("playListPlay")).forEach(
        (element) => {
          element.classList.add("bx-play-circle");
          element.classList.remove("bx-pause-circle");
        }
      );
    };

    const makeAllBackgrounds = () => {
      Array.from(document.getElementsByClassName("songItem")).forEach(
        (element) => {
          element.style.background = "rgb(105,105,170,0)";
        }
      );
    };

    let index = 0;
    let poster_master_play = document.getElementById("poster_master_play");
    let title = document.getElementById("title");
    Array.from(document.getElementsByClassName("playListPlay")).forEach(
      (element) => {
        element.addEventListener("click", (e) => {
          index = e.target.id;
          makeAllPlays();
          e.target.classList.remove("bx-play-circle");
          e.target.classList.add("bx-pause-circle");
          music.src = `audio/${index}.mp3`;
          poster_master_play.src = `img/${index}.jpg`;
          music.play();
          let song_title = songs.filter((ele) => {
            return ele.id == index;
          });

          song_title.forEach((ele) => {
            let { songName } = ele;
            title.innerHTML = songName;
          });
          masterPlay.classList.remove("bx-play");
          masterPlay.classList.add("bx-pause");
          wave.classList.add("active2");
          music.addEventListener("ended", () => {
            masterPlay.classList.add("bx-play");
            masterPlay.classList.remove("bx-pause");
            wave.classList.remove("active2");
          });
        });
      }
    );

    let currentStart = document.getElementById("currentStart");
    let currentEnd = document.getElementById("currentEnd");
    let seek = document.getElementById("seek");
    let bar2 = document.getElementById("bar2");
    let dot = document.getElementsByClassName("dot")[0];

    music.addEventListener("timeupdate", () => {
      let music_curr = music.currentTime;
      let music_dur = music.duration;

      let min = Math.floor(music_dur / 60);
      let sec = Math.floor(music_dur % 60);
      if (sec < 10) {
        sec = `0${sec}`;
      }
      currentEnd.innerText = `${min}:${sec}`;

      let min1 = Math.floor(music_curr / 60);
      let sec1 = Math.floor(music_curr % 60);
      if (sec1 < 10) {
        sec1 = `0${sec1}`;
      }
      currentStart.innerText = `${min1}:${sec1}`;

      let progressbar = parseInt((music.currentTime / music.duration) * 100);
      seek.value = progressbar;
      let seekbar = seek.value;
      bar2.style.width = `${seekbar}%`;
      dot.style.left = `${seekbar}%`;
    });

    seek.addEventListener("change", () => {
      music.currentTime = (seek.value * music.duration) / 100;
    });

    music.addEventListener("ended", () => {
      masterPlay.classList.add("bx-play");
      masterPlay.classList.remove("bx-pause");
      wave.classList.remove("active2");
    });

    let vol_icon = document.getElementById("vol_icon");
    let vol = document.getElementById("vol");
    let vol_dot = document.getElementById("vol_dot");
    let vol_bar = document.getElementsByClassName("vol_bar")[0];

    vol.addEventListener("change", () => {
      if (vol.value == 0) {
        vol_icon.classList.remove("bx-volume-full");
        vol_icon.classList.add("bx-volume-mute");
        vol_icon.classList.remove("bx-volume-low");
      }
      if (vol.value > 0) {
        vol_icon.classList.remove("bx-volume-full");
        vol_icon.classList.remove("bx-volume-mute");
        vol_icon.classList.add("bx-volume-low");
      }
      if (vol.value > 50) {
        vol_icon.classList.add("bx-volume-full");
        vol_icon.classList.remove("bx-volume-mute");
        vol_icon.classList.remove("bx-volume-low");
      }

      let vol_a = vol.value;
      vol_bar.style.width = `${vol_a}%`;
      vol_dot.style.left = `${vol_a}%`;
      music.volume = vol_a / 100;
    });

    let back = document.getElementById("back");
    let next = document.getElementById("next");

    back.addEventListener("click", () => {
      index -= 1;
      if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;
      }
      music.src = `../../assets/audio/${index}.mp3`;
      poster_master_play.src = `../../assets/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });

      song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });
      makeAllPlays();

      document.getElementById(`${index}`).classList.remove("bx-play");
      document.getElementById(`${index}`).classList.add("bx-pause");
    });

    next.addEventListener("click", () => {
      index -= 0;
      index += 1;
      if (
        index > Array.from(document.getElementsByClassName("songItem")).length
      ) {
        index = 1;
      }
      music.src = `../../assets/audio/${index}.mp3`;
      poster_master_play.src = `../../assets/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });

      song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });
      makeAllPlays();

      document.getElementById(`${index}`).classList.remove("bx-play");
      document.getElementById(`${index}`).classList.add("bx-pause");
    });

    /*Show music playlist  1*/
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tab = $$(".box_content .myStt .details");
    const first = $(".idea .dashboard.first");
    console.log(first);

    const content = tab.forEach(function (item, index) {
      item.onclick = function () {
        $(".box_content .myStt .details.active").classList.remove("active");
        this.classList.add("active");

        first.style.marginLeft = -100 * index + "%";
      };
    });

    /*Show music playlist  2*/
    const tab1 = $$(".box_content1 .myStt1 .details1");
    const first1 = $(".idea1 .dashboard1.first1");
    console.log(first1);

    const content1 = tab1.forEach(function (item, index) {
      item.onclick = function () {
        $(".box_content1 .myStt1 .details1.active5").classList.remove(
          "active5"
        );
        this.classList.add("active5");

        first1.style.marginLeft = -100 * index + "%";
      };
    });
  });

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
              <RiWallet2Line viewBox="-2 0 24 24"></RiWallet2Line>
            </p>

            <span>Connect Wallet</span>
          </button>
          <div id="otherButton" className="hide">
            <div className="After-logging-in">
              <Link to="/profile/PhucNguyen">
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
            <Link to="" onClick="connectWallet()">
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
