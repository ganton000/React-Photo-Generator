import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends React.Component {

    state =  { images: [] };

    onSearchSubmit = (term) => {
        unsplash.get('/search/photos', {
            params: { query: term }
        })
        .then(response => response.data.results)
        .then(data => this.setState({images: data}))
        .catch(err => JSON.stingify(err));

    }

    render() {
        return (
        <div className="ui container"
        style={{marginTop: '10px'}}
        >
            <SearchBar
            onSubmit={this.onSearchSubmit}
            />
            <ImageList
            images={this.state.images}
            />
            Found: {this.state.images.length} images
        </div>
        );
    }
}


export default App;