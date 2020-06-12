import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { GenreConsumer } from "../context";
import PropTypes from 'prop-types'

export default class Genre extends Component {
    render() {
        const {id, title, img, book, inWishlist} = this.props.genre;
        return (
            <GenreWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className = "card">
                    <GenreConsumer>
                        {(value) => (<div className = "img-container p-5" 
                onClick={() => value.handleDetail(id)
                }
                >
                    <Link to = "/details">
                        <img src = {img} alt = "genre" className="card-img-top" />
                    </Link>
                    {/* <button 
                    className = "wishlist-button" 
                    disabled = {inWishlist ? true : false}
                    onClick={() => {
                        console.log("added to the wishlist");
                    }}
                >
                {inWishlist ? (
                <p className = "text-capitalize mb-0" disabled>
                    {" "}
                    in Wishlist
                </p>
                ) : (
                    <i className = "fas fa-cart-plus" />
                )}
                </button> */}
                </div>)}
        
                </GenreConsumer>
                {/* card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <h5 className = "align-self-center mb-1">
                        {title}
                    </h5>
                    {/* <h5 className = "text-blue font-italic mb-0">
                        <span className = "mr-1">No.</span>
                        {book}
                    </h5> */}
                </div>
            </div>
            </GenreWrapper>
        );
    }
}
Genre.propTypes = {
    genre : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        title : PropTypes.string,
        info : PropTypes.string,
        inWishlist : PropTypes.bool
    }).isRequired
};

const GenreWrapper =styled.div`
.text-blue {
    font-family: 'Barlow', sans-serif;
}
.card {
    border-color : transparent;
    transition : all 1s linear;
    // background-color : #C38D9E;

    // box-shadow: 0 4px 8px 0 #171D4B, 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    // box-shadow: 0  0 20px rgba(0,0,0,.5);
    // box-shadow: 0 0 20px blue; 
    // box-sahdow: 0 5px 20px rgba(0,0,0,.25);

}
.card-footer {
    background : transparent;
    border-top : transparent;
    transition : all 1s linear;
    // background-color : #E8A87C;
}
.card-footer h5 {
    font-family: 'Barlow', sans-serif;
}
}
&:hover {
    .card {
        border : 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow : 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        // background-color : darkgrey;
        box-shadow: 0 4px 8px 0 #171D4B, 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   }
   .card-footer {
       background : rgba(247, 247, 247);
    //    background-color : orange;
   }
}

.img-container {
    position : relative;
    overflow : hidden;
}
.card-img-top {
    transition : all 1s linear;
}
.img-container:hover .card-img-top {
    transform : scale(1.3);
} 
                    // its cart now

.wishlist-btn {
    position : absolute;
    bottom : 0;
    right : 0;
    padding : 0.2rem 0.4rem;
    background : var(--lightBlue);
    border : none;
    color : var(--mainWhite);
    font-size :1.4rem;
    border-radius : 0.5rem 0 0 0;
    transform : translate(100%,100%);
    transition : all 1s linear;
}
.img-container : hover .wishlist-btn {
    transform : translate(0, 0);
}
.wishlist-btn : hover {
    color  : var(--mainWhite);
    cursor : pointer;
}
`;