import React, {Component} from 'react';

const TITLES = [
    'I am a Web Developer',
    'I am an IT Geek',
    'I am an music lover'
]

class Title extends Component {
    state = {titleIndex : 0 ,fadeIn : false};

    componentDidMount() {
        setTimeout(() => {
            this.setState({fadeIn:false});
        }, 2000);
        this.animateTitles();    
    }
    
    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex,fadeIn:true});
            setTimeout(() => {
                this.setState({fadeIn:false});
            }, 2000);
            
        },4000);
    }

    render() {
        const {titleIndex,fadeIn} = this.state;
        const title = TITLES[titleIndex];

        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
        )
    }
}

export default Title;