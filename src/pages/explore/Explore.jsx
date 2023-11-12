import React from 'react';
import './Explore.css';

const Explore = () =>{

    return (
        <div className='explore section__padfing'>
            <div className='search'>
                <div className="search-formGroup">
                    <input type="text" placeholder='Search for anything'  />
                </div>
                <button className='upload' type='submit'>Upload</button>
                {/* <Link /> */}
            </div>
            <div className='explore1'>
                <label>Charts</label>
                <div className="explore-container">
                    
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                </div>
            </div>
            <div className='explore1'>
                <label>Sound by Genre</label>
                <div className="explore-container">
                    
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    
                </div>
                <div className="explore-container">
                    
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    <div className="chart-group">

                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Explore;