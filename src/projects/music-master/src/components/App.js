import React , {Component} from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App  extends Component {

    state = ({artist: null ,tracks: []})      

    searchArtist = artistQuery => {
        //console.log('this.state',this.state);
        fetch(API_ADDRESS + '/artist/' + artistQuery)
        .then(response => response.json())
        .then(json => {
            //console.log(json);

            if (json.artists.total > 0) {
                const artist = json.artists.items[0];
                this.setState({artist});
                //console.log(this.state.artist);

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => this.setState({tracks: json.tracks}))
                .catch(error => alert(error.message));

            }
            else {
                alert('No artist found!');
            }
        })
        .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist}/>
                <Tracks tracks={this.state.tracks}/>
            </div>
        )
    }
}

export default App;