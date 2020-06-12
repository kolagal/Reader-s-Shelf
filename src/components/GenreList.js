import React, { Component } from 'react'
// import { Card } from 'antd';
import GenreTitle from './GenreTitle'
import Genre from "./Genre"
// import {storeGenres} from '../data'
// import GenreDetails from './GenreDetails';
import { Carousel } from 'antd';
import { GenreConsumer } from "../context";
import styled from 'styled-components';
import Search from "../components/Search";
import BookInfo from "../components/BookInfo";
import carousel1 from '../carouselimg/carousel1.png';
import carousel2 from '../carouselimg/carousel2.png';
import carousel3 from '../carouselimg/carousel3.jpg';
import carousel4 from '../carouselimg/carousel4.jpg';
import "./GenreList.css";

export class GenreList extends Component {
    // state = {
    //     genre: storeGenres
    // }; 
    state = {
        results: [],
        expandedBook: null
      };
      setResults = results => {
        this.setState({ results });
      };
    
      collapseBook = () => {
        this.setState({
          expandedBook: null
        });
      };
    
      expandBook = expandedBook => {
        this.setState({ expandedBook });
      };
    render() {
        
        // console.log(this.state.genres)
        return (
            <div>
             <Carousel className = "carousel" autoplay>
        {/* <div class = "carousel-inner"> */}
    
        <div class="item active">
          <img className ="image1" src = {carousel1} alt="900x500" />
        </div>
    
        <div class="item">
          <img className = "image2" src = {carousel2} alt="900x500" />
        </div>
    
        <div class="item">
          <img className = "image3" src = {carousel3} alt="900x500" />
        </div>
    
        <div class="item">
          <img className = "image4" src = {carousel4} alt="900x500" />
        </div>
    
        {/* </div> */}
    
      </Carousel>
            <div className="container">
           <div className="header clearfix mt-5">
              <h3 className="text-muted">Reader's Shelf Book Search</h3>
           </div>
          <div className="jumbotron search-container">
            {this.state.expandedBook ? (
              <BookInfo
                bookData={this.state.expandedBook}
                collapseBook={this.collapseBook}
              />
            ) : (
              <Search
                results={this.state.results}
                setResults={this.setResults}
                expandBook={this.expandBook}
              />
            )}
          </div>
        </div>
           <React.Fragment>
               <div className = "py-5">
                   <div className= "container">
                       <GenreTitle title="Genres" />

                       <div className="row">
                        <GenreConsumer>
                            {value => {
                                return value.genres.map( genre =>{
                                    return <Genre key={genre.id} genre=
                                    {genre} />;
                                });
                        }}
                        </GenreConsumer>
                       </div>
                   </div>
               </div>
           </React.Fragment>
           </div>
        )
    }
}

export default GenreList;
