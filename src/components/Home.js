import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { VscSearch } from 'react-icons/vsc';
import { useEffect } from 'react';
import axios from 'axios';

function Home({ showData }) {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    useEffect(()=>{
        
        const getSearchData = async() => {
           
            if (search) {
                const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
                setSearchData(response.data);
            }
        }
        getSearchData(); 
    },[search]);
   

    return (
        <>
            <div className='header-wrapper'>
                <h1 className='title'>TV MAZE SHOW</h1>
                <div className='right-side'>
                    <span className='search-icon'> <VscSearch /></span>
                    <input type="text" value={search} placeholder="search by show name" onChange={(e)=>setSearch(e.target.value)} />
                </div>
            </div>
            <div className='home-wrapper'>
               
 {(search !== "") && (searchData.length >= 0) && searchData.map((item) => {
                            return (
                                <div className=" card-container col-sm-4 mb-3 mt-3">
                                    <div className="card mx-auto" style={{ maxWidth: '350px', height: '178px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img  src={item.show.image.medium} className="rounded-start showimg" alt="loading" height="100px" />

                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5  className="card-title">{item.show.name}</h5>
                                                    <p  className="card-text">{(item.show.summary)?.substring(6, 50)}</p>
                                                    <NavLink key={item.show.id} to={`/details/${item.show.name}`} >
                                                        <button key={item.show.id} className="btn btn-primary">Show Details</button></NavLink>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            );
                      
                    })}





?

{search==="" && <h3 className='container text-white d-flex justify-content-start text-decoration-underline p-3'>Genre:Drama</h3>}
                {search.length<=0 && showData.map((item) => {
                    if (item.show.genres[0] === 'Drama')
                        return (
                            <div className=" card-container col-sm-4 mb-3 mt-3">
                                <div className="card mx-auto" style={{ maxWidth: '350px', height: '178px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img key={item.show.id} src={item.show.image.medium} className="rounded-start showimg" alt="loading" height="100px" />

                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 key={item.show.id} className="card-title">{item.show.name}</h5>
                                                <p key={item.show.id} className="card-text">{(item.show.summary)?.substring(6, 74)}</p>
                                                <NavLink key={item.show.id} to={`/details/${item.show.name}`} >
                                                    <button key={item.show.id} className="btn btn-primary">Show Details</button></NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        );
                        return null;
                })}
:
{search==="" && <h3 className='container text-white d-flex justify-content-start text-decoration-underline'>Genre:Comedy</h3>}

                {search.length<=0 && showData.map((item) => {
                    if (item.show.genres[0] === 'Comedy')
                        return (
                            <div className=" card-container col-sm-4 mb-3 mt-3">
                                <div className="card mx-auto" style={{ maxWidth: '350px', height: '178px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img key={item.show.id} src={item.show.image.medium} className="rounded-start showimg" alt="loading" height="100px" />

                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 key={item.show.id} className="card-title">{item.show.name}</h5>
                                                <p key={item.show.id} className="card-text">{(item.show.summary)?.substring(6, 74)}</p>
                                                <NavLink key={item.show.id} to={`/details/${item.show.name}`} >
                                                    <button key={item.show.id} className="btn btn-primary">Show Details</button></NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        );
                        return null;
                })}


            </div >
            
        </>
    );
}

export default Home;

