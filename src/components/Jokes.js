import React,{Component} from 'react';

const Joke = ({joke: {setup,punchline}}) => (
        <p>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = {joke: {},jokes:[]};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke: json}));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}));
    }
    
    render() {
        return (
            <div>
                <h3>Highlighted Joke</h3>
                <Joke joke={this.state.joke}/>
                <hr/>
                <h4>Want more jokes?</h4>
                <button onClick={this.fetchJokes}>Click Me!</button>
                {
                    this.state.jokes.map(joke => {
                        return <Joke key={joke.id} joke={joke}/>
                    })
                }
            </div>
        )   
    }
}

export default Jokes;