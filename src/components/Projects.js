import React,{Component} from 'react';
import PROJECT_IMAGES from '../data/projectImages';

const Project = (props) => {
    const {name,html_url,description} = props.project;
    const image = props.rndImage;

    return (
        <div className='col'>
            <h3>{name}</h3>
            <img src={image} alt='project-img' style={{width:300,height:200}}/>
            <p>{description}</p>
            <a href={html_url} >{html_url}</a>
        </div>
    )
}

class Projects extends Component {
    state = ({repos: []});

    shuffle = array => {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }

    getRndInteger = array => {
        return array[Math.floor(Math.random() * array.length)];
    };

    randomRepos = repos => {
        repos = this.shuffle(repos);
        repos = repos.slice(0,3);
        return repos;
    }

    componentDidMount() {
        fetch('https://api.github.com/users/fuadps/repos')
        .then(response=>response.json())
        .then(json => this.setState({repos: this.randomRepos(json)}))
        .catch(error => alert(error.message));
    }
    
  
    render() {

        return (
            <div>
                {console.log(this.state.repos)}
                <h1>Random Repositories</h1>
                <div className='row'>
                    {
                        this.state.repos.map(repo => {
                            return (
                                <Project key={repo.id} rndImage={this.getRndInteger(PROJECT_IMAGES)} project={repo}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
}

export default Projects;