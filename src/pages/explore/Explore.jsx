import React from 'react';
import './Explore.css';


// ---------- Images ---------
import banner0 from '../../assets/banner0.jpg'

const Explore = () =>{
    return (
        <div className='explore section__padfing'>
            {/* <div className='search'>
                <div className="search-formGroup">
                    <input type="text" placeholder='Search for anything'  />
                </div>
                <button className='upload' onClick={transferSol}>Upload</button>
                <button className='upload' onClick={connectWallet}>Upload</button>
            </div> */}
            <div className='explore1'>
                <h3>Charts</h3>
                <div className="explore-container">
                    
                    <div className="chart-group">
                        <h5 className='m-3'>Viral Sounds</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group">
                        <h5 className='m-3'>Viral Playsit</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group">
                        <h5 className='m-3'>Top Song</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group">
                        <h5 className='m-3'>Top Artists</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='explore1'>
                <h3>Sound by Genre</h3>
                <div className="explore-container">
                    
                    <div className="chart-group"
                        style={{
                            background: 'rgb(238,174,202)',
                            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',

                        }}
                    >
                        <h5 className='m-3'>Hip-hop & Rap</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group"
                        style={{
                            background: 'rgb(63,94,251)',
                            background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,0.7819502801120448) 100%)'

                        }}          
                    >
                        <h5 className='m-3'>Electronic</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group"
                        style={{
                            background: 'rgb(34,193,195)',
                            background: 'linear-gradient(118deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'

                        }}  
                    >
                        <h5 className='m-3'>Pop</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group"
                        style={{
                            background: 'rgb(58,171,180)',
                            background: 'linear-gradient(118deg, rgba(58,171,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'

                        }}
                    >
                        <h5 className='m-3'>R&B Soul</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className="explore-container">
                    
                    <div className="chart-group"
                        style={{
                            background: 'rgb(180,175,58)',
                            background: 'linear-gradient(317deg, rgba(180,175,58,1) 0%, rgba(253,29,237,1) 50%, rgba(81,69,252,1) 100%)'
                        }}
                    >
                        <h5 className='m-3'>Indie</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group"
                        style={{
                            background: 'rgb(148,187,233)',
                            background: 'radial-gradient(circle, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)'
                        }}  
                    >
                        <h5 className='m-3'>Dance & EDM</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group"
                        style={{
                            background: 'rgb(148,187,233)',
                            background: 'radial-gradient(circle, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)'
                        }} 
                    >
                        <h5 className='m-3'>Latin</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    <div className="chart-group"
                        style={{
                            background: 'rgb(253,0,82)',
                            background: 'radial-gradient(circle, rgba(253,0,82,1) 0%, rgba(0,74,255,0.6362920168067228) 59%)'
                        }} 
                    >
                        <h5 className='m-3'>Country</h5>
                        <div className='anh'>
                            <img src={banner0} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Explore;