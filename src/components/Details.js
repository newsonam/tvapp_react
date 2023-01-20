
import { useParams } from 'react-router-dom';
import './style.css';
import BeautyStars from "beauty-stars";
import { VscSearch } from 'react-icons/vsc';

function Details({ showData }) {
    let { name } = useParams();

    return (
        <>
            <div className='header-wrapper'>
                <h1 className='title'>TV MAZE SHOW</h1>
                <div className='right-side'>
                    <span className='search-icon'> <VscSearch /></span>
                    <input type="text" placeholder="search by name" />
                </div>
            </div>
            <div className='bg-color'>
                {showData.map((data) => {

                    if (name === data.show.name) {
                        return (
                            <div className=" card-container card-shadow mb-5 mt-5">
                                <div className="card mx-auto" style={{ maxWidth: '780px', height: '400px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img src={data.show.image.medium} className="pimage rounded-start" alt="loading" width="300px" height="200px" />

                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body text-left">
                                                <div className="title-stars">
                                                    <h3 className="card-title">{data.show.name} ({data.show.rating.average}) </h3>
                                                    <BeautyStars maxStars={5} inactiveColor="#FFBF00" size="20px" gap="4px" />
                                                </div>
                                                <p><b>Genre:</b>{data.show.genres[0]}</p>
                                                <p className="card-text"><b>Show Description: </b>{(data.show.summary)?.substring(4, 230)}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );

                    }
                    return null;
                })}
            </div>
        </>
    );
}

export default Details;