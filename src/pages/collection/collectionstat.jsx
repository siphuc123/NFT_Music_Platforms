import React from "react";
import "./collectionstats.css";
import { Link } from "react-router-dom";

// Icon
import { AiFillStar } from "react-icons/ai";

const CollectionStat = () => {
  return (
    <>
      <div className="collection_stats">
        <div className="collectionstats">
          <h1 className="collection-title">Collection stats</h1>
          <div className="button_collectionstats">
            <button className="btntrending active">Trending</button>
            <button className="btntop">Top</button>
            <button className="btnwatchlist">Watch List</button>
          </div>
        </div>

        <div className="allchains">
          <div className="allchainssol"></div>
          <div className="allchainssol mt-3">
            <div className="allchainssoltable">
              <div className="allchainssoltable3">
                <Link to="">
                  <div className="stt">
                    <h4>#</h4>
                    <span>Collection</span>
                  </div>
                  <div className="name"></div>
                  <div className="volume">
                    Volume <i className="fa-regular fa-angles-up-down"></i>
                  </div>
                  <div className="change">
                    % Change <i className="fa-regular fa-angles-up-down"></i>
                  </div>
                  <div className="floorprice">
                    Floor price <i className="fa-regular fa-angles-up-down"></i>
                  </div>
                  <div className="sales">
                    Sales <i className="fa-regular fa-angles-up-down"></i>
                  </div>
                  <div className="iconstar"></div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>1</h4>
                    <img src={require("../../assets/bids1.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>2</h4>
                    <img src={require("../../assets/bids2.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>3</h4>
                    <img src={require("../../assets/bids3.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>4</h4>
                    <img src={require("../../assets/bids4.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>5</h4>
                    <img src={require("../../assets/bids5.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>

              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>6</h4>
                    <img src={require("../../assets/bids6.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>7</h4>
                    <img src={require("../../assets/bids7.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>8</h4>
                    <img src={require("../../assets/bids1.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>9</h4>
                    <img src={require("../../assets/bids8.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
              <div className="allchainssoltable2">
                <Link to="">
                  <div className="stt">
                    <h4>10</h4>
                    <img src={require("../../assets/bids3.png")} alt="" />
                  </div>
                  <div className="name">Name</div>
                  <div className="volume">0.001 SOL</div>
                  <div className="change">--</div>
                  <div className="floorprice">0.00 SOL</div>
                  <div className="sales">1</div>
                  <div className="iconstar">
                    <AiFillStar />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionStat;
