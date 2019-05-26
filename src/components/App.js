import React , {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
//import profilePic from '../assets/profile.png';
import Title from './Title';

class App  extends Component {
    state = {displayDetails : false};

    toggleDisplay = () => {
        this.setState({ displayDetails : !this.state.displayDetails})
    }

    render() {

        return (
            <div>
                <img src='https://avatars3.githubusercontent.com/u/22338914?v=4' alt='profile' className='profile' />
                <h1>Hello</h1>
                <p>My name is Fuad.</p>
                <Title/>
                <p>This website developed using ReactJS</p>
                {
                    this.state.displayDetails ? (
                    <div>
                        <p>Im also consider myself as Jack of All Trades </p>
                        <p>But Im passion in Web Development!</p>
                        <button onClick = {this.toggleDisplay}>Show less</button>
                    </div>
                    ) : 
                    <button onClick = {this.toggleDisplay}>Show more</button>
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;