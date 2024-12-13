import React from "react";
class Moviecard extends React.Component {
    
    render(){
        console.log(this.props);   
        const {movies, addStars, remStars, toggleFav, toggleCart}= this.props;     
        const {title, plot, poster, price, rating, stars, fav, isInCart} = movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster} alt="poster"/>  
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img 
                                    className="str-btn" alt="decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                    onClick={() => remStars(movies)}/>
                                <img 
                                    className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                <img
                                    className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                                    onClick={()=> addStars(movies)}/>

                                    <span>{stars}</span>
                            </div>
                            {fav? <button className="unfavourite-btn" onClick={()=> toggleFav(movies)}>Un-favourite</button>:<button className="favourite-btn" onClick={()=> toggleFav(movies)}>Favourite</button>}
                            <button className={isInCart? "remove-cart-btn":"cart-btn"} onClick={()=> toggleCart(movies)}>{isInCart? "Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;