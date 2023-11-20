import React, { useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

// ------- ICONS -------
import { BiCartDownload, BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { GoShare } from "react-icons/go";
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

// ------- IMAGE -------
import nft_1 from "../../assets/NFT-1.jpg";
import jpg_17 from "../../assets/17.jpg";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>;

const Profile = () => {
  useEffect(() => {
    // thay đổi ảnh và lưu tạm để reset trang
    const fileInput = document.getElementById("fileInput");
    const image = document.getElementById("image");
    const resetButton = document.getElementById("resetButton");
    const editButton = document.querySelector(".hiden-edit");

    function triggerFileInput() {
      fileInput.click();
    }

    fileInput.addEventListener("change", function () {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (event) {
          image.src = event.target.result;
          localStorage.setItem("selectedImage", event.target.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    });

    resetButton.addEventListener("click", function () {
      localStorage.removeItem("selectedImage");
      image.src = "";
    });

    editButton.addEventListener("click", function () {
      triggerFileInput();
    });

    window.addEventListener("load", function () {
      const savedImage = localStorage.getItem("selectedImage");
      if (savedImage) {
        image.src = savedImage;
      }
    });

    // Phân chia nội dung
    function showPage(pageNumber) {
      const pages = document.querySelectorAll(".page");
      pages.forEach(function (page) {
        page.classList.remove("active");
      });

      const selectedPage = document.getElementById(`page${pageNumber}`);
      selectedPage.classList.add("active");

      const listItems = document.querySelectorAll("li");
      listItems.forEach(function (item) {
        item.classList.remove("active");
      });
      document
        .querySelector(`li:nth-child(${pageNumber})`)
        .classList.add("active");
    }

    // scoll trang và dừng khi kết thúc
    const scrollableFrame = document.getElementById("scrollable-frame");

    scrollableFrame.addEventListener("scroll", function () {
      if (
        scrollableFrame.scrollHeight - scrollableFrame.scrollTop ===
        scrollableFrame.clientHeight
      ) {
        window.scrollBy(0, 100);
      }
    });
  });

  return (
    <div className="profiles section__padding">
      <div className="banner-use-box">
        <div className="change-img-banners">
          <label for="fileInput" id="fileLabel">
            <img id="image" className="banner-use" src="" alt="" />
          </label>
          <input type="file" id="fileInput" />
          <img id="image" src="" alt="Hình ảnh" />
          <button id="resetButton">Reset</button>

          <button className="hiden-edit">
            <HiOutlinePencil className="bx bx-pencil"></HiOutlinePencil>
          </button>
        </div>
        <div className="photo-user">
          <img src={nft_1} alt="" />
        </div>
      </div>
      <div className="name-user-box">
        <div className="name-user">
          <h3>User Name </h3>
          <div>
            <p className="chain">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 101 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z"
                  fill="url(#paint0_linear_174_4403)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_174_4403"
                    x1="8.52558"
                    y1="90.0973"
                    x2="88.9933"
                    y2="-3.01622"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.08" stop-color="#ccc8aa" />
                    <stop offset="0.5" stop-color="#ccc8aa" />
                    <stop offset="0.6" stop-color="#ccc8aa" />
                    <stop offset="0.72" stop-color="#ccc8aa" />
                    <stop offset="0.97" stop-color="#ccc8aa" />
                  </linearGradient>
                </defs>
              </svg>
              <p>HRHyTZJ3u.....WgL2</p>
            </p>
            <p className="timer-user">Joined September 2023</p>
          </div>
        </div>
        <div className="show-more">
          <Link to="#">
            <BiDotsHorizontalRounded className=""></BiDotsHorizontalRounded>
          </Link>
          <Link to={""}>
            <GoShare className=""></GoShare>
          </Link>
        </div>
      </div>
      <tbody>
        <section className="information">
          <div className="information-option">
            <ul>
              <li onclick="showPage(1)" class="active">
                Items Collected <p>0</p>
              </li>
              <li onclick="showPage(2)">Offers made</li>
              <li onclick="showPage(3)">Deals</li>
              <li onclick="showPage(4)">Favorited</li>
              <li onclick="showPage(5)">
                Created <p>7 Ss</p>
              </li>
              <li onclick="showPage(6)">Activity</li>
            </ul>
          </div>
          <div class="page active" id="page1">
            <div className="collected-box">
              <div className="collected">
                <button className="sliders">
                  <i className="fa-solid fa-sliders fa-rotate-270"></i>
                </button>
                <button className="Status">
                  <Link to={""}>Status</Link>{" "}
                  <i className="bx bx-chevron-down Status-dow"></i>
                </button>
                <div classNameName="search-collectl-item">
                  <form action="">
                    <i className="bx bx-search-alt-2"></i>
                    <input type="text" placeholder="Search by name" />
                  </form>
                </div>
                <button className="Recently-created">
                  <Link to={""}>Recently created</Link>
                  <i className="bx bx-chevron-down recently"></i>
                </button>
              </div>
              <div></div>
            </div>

            <div className="collect-item-box">
              <h3>
                <p>0</p>Items
              </h3>
              <div className="collect-item">
                <div className="show-items-collectd">
                  <h2>No items found for this search</h2>
                  <button>Back to all items</button>
                </div>
              </div>
            </div>
          </div>
          <div className="page" id="page2">
            <div className="collected-box">
              <div className="collected">
                <button className="collected-filter">
                  <IoFilter></IoFilter>
                </button>
                <button className="Status">
                  {" "}
                  <Link to={""}>Type</Link>
                  <FaAngleDown className="Status-dow"></FaAngleDown>
                </button>
                <button className="Status">
                  {" "}
                  <Link to={""}>Status</Link>
                  <FaAngleDown className="Status-dow"></FaAngleDown>
                </button>
              </div>
              <div></div>
            </div>

            <div className="collect-item-box">
              <div className="collect-item">
                <div className="show-items-collectd">
                  <h2>No deals to display</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="page" id="page3">
            <div className="collected-box">
              <div className="collected1">
                <div className="collected-deals-title">
                  <h2>0 deals</h2>
                </div>
                <button className="Status1">
                  {" "}
                  <Link to={""}>All Deals</Link>
                  <FaAngleDown className="Status-dow"></FaAngleDown>
                </button>
                <button className="Status1">
                  {" "}
                  <Link to={""}>Most Recent</Link>
                  <FaAngleDown className="Status-dow"></FaAngleDown>
                </button>
                <div className="collected-make-deal-box">
                  <button className="collected-make-deal">
                    {" "}
                    <Link to={""}>Make a deal</Link>{" "}
                  </button>
                </div>
              </div>
              <div></div>
            </div>

            <div className="collect-item-box1">
              <div className="collect-sidebar">
                <ul>
                  <li>
                    <Link to={""}>All</Link>
                  </li>
                  <li>
                    <Link to={""}>Active</Link>
                  </li>
                  <li>
                    <Link to={""}>Acceptrd</Link>
                  </li>
                  <li>
                    <Link to={""}>Canceled</Link>
                  </li>
                  <li>
                    <Link to={""}>Inactive</Link>
                  </li>
                  <li>
                    <Link to={""}>Expired</Link>
                  </li>
                </ul>
              </div>
              <div className="collect-item1">
                <div className="show-items-collectd1">
                  <h2>No deals to display</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="page" id="page4">
            <div className="scrollable-frame" id="scrollable-frame">
              <div className="scrollable-frame-box">
                <div className="favorite-item">
                  <div className="favorite-item-box">
                    <img src={jpg_17} alt="" />
                    <div className="favorite-item-title">
                      <Link to={""}>
                        <h2>Name</h2>
                        <h3>Name Album</h3>
                        <span>
                          <p>1,202 SOL</p>|<p>Last sale: 1,01</p>
                        </span>
                      </Link>
                    </div>
                    <div className="favorite-item-title-buy">
                      <button>
                        <Link to={""}>Buy now</Link>
                        <BiCartDownload></BiCartDownload>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="favorite-item">
                  <div className="favorite-item-box">
                    <img src={jpg_17} alt="" />
                    <div className="favorite-item-title">
                      <Link to={""}>
                        <h2>Name</h2>
                        <h3>Name Album</h3>
                        <span>
                          <p>1,202 SOL</p>|<p>Last sale: 1,01</p>
                        </span>
                      </Link>
                    </div>
                    <div className="favorite-item-title-buy">
                      <button>
                        <Link to={""}>Buy now</Link>
                        <BiCartDownload></BiCartDownload>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="favorite-item">
                  <div className="favorite-item-box">
                    <img src={jpg_17} alt="" />
                    <div className="favorite-item-title">
                      <Link to={""}>
                        <h2>Name</h2>
                        <h3>Name Album</h3>
                        <span>
                          <p>1,202 SOL</p>|<p>Last sale: 1,01</p>
                        </span>
                      </Link>
                    </div>
                    <div className="favorite-item-title-buy">
                      <button>
                        <Link to={""}>Buy now</Link>
                        <BiCartDownload></BiCartDownload>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="favorite-item">
                  <div className="favorite-item-box">
                    <img src={jpg_17} alt="" />
                    <div className="favorite-item-title">
                      <Link to={""}>
                        <h2>Name</h2>
                        <h3>Name Album</h3>
                        <span>
                          <p>1,202 SOL</p>|<p>Last sale: 1,01</p>
                        </span>
                      </Link>
                    </div>
                    <div className="favorite-item-title-buy">
                      <button>
                        <Link to={""}>Buy now</Link>
                        <BiCartDownload></BiCartDownload>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="favorite-item">
                  <div className="favorite-item-box">
                    <img src={jpg_17} alt="" />
                    <div className="favorite-item-title">
                      <Link to={""}>
                        <h2>Name</h2>
                        <h3>Name Album</h3>
                        <span>
                          <p>1,202 SOL</p>|<p>Last sale: 1,01</p>
                        </span>
                      </Link>
                    </div>
                    <div className="favorite-item-title-buy">
                      <button>
                        <Link to={""}>Buy now</Link>
                        <BiCartDownload></BiCartDownload>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="favorite-item">
                  <div className="favorite-item-box">
                    <img src={jpg_17} alt="" />
                    <div className="favorite-item-title">
                      <Link to={""}>
                        <h2>Name</h2>
                        <h3>Name Album</h3>
                        <span>
                          <p>1,202 SOL</p>|<p>Last sale: 1,01</p>
                        </span>
                      </Link>
                    </div>
                    <div className="favorite-item-title-buy">
                      <button>
                        <Link to={""}>Buy now</Link>
                        <BiCartDownload></BiCartDownload>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page" id="page5"></div>
          <div class="page" id="page6"></div>
        </section>
      </tbody>
    </div>
  );
};

export default Profile;
