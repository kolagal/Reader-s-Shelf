import React, { Component } from 'react'
import { storeGenres, detailGenre } from "./data";
const GenreContext = React.createContext();
//Provider
//Consumer
class GenreProvider extends Component {
    state = {
        genres: [],
        detailGenre:detailGenre,
        modalOpen : true,
        modalGenre : detailGenre,
    };
    componentDidMount(){
        this.setGenres();
    }
    setGenres = () =>{
        let tempGenres = [];
        storeGenres.forEach(item => {
            const singleItem = {...item};
            tempGenres = [...tempGenres,singleItem];

        });
        this.setState(() =>{
            return {genres:tempGenres};
        });
    }
    getItem = id => {
        const genre = this.state.genres.find(item => item.id === id);
        return genre;
    };
    handleDetail = id => {
        const genre = this.getItem(id);
        this.setState(() => {
            return {detailGenre:genre}
        })
    };
    addToWishlist = () => {
        console.log('hello from add to wishlist');
    };
    openModal = id => {
        const genre = this.getItem(id);
        this.setState(() => {
            return {modalGenre:genre,modalOpen:true}
        })
    }
    closeModal = () => {
        this.setState(() =>{
            return {modalOpen:false}
        })
    }
    render() {
        return (
            <GenreContext.Provider 
                value={{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToWishlist:this.addToWishlist,
                    openModal:this.openModal,
                    closeModal:this.closeModal
            }}>
                {this.props.children}
            </GenreContext.Provider>
        );
    }
}

const GenreConsumer = GenreContext.Consumer;

export { GenreProvider, GenreConsumer };