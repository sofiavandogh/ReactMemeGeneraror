import './MemeGenerator.css';
import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "./images/game.jpg",
            allMemeImages: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImages: memes})
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState( {
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImages.length);
        const randomMemeImage = this.state.allMemeImages[randomNum].url;
        this.setState({ randomImage: randomMemeImage })
    }

    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <label>
                        Top Text
                        <input type="text" 
                                name="topText" 
                                value={this.state.topText} 
                                placeholder="Insert Text" 
                                onChange={this.handleChange}>
                        </input>
                    </label>
                    <label>
                        Bottom Text
                        <input type="text" 
                                name="bottomText" 
                                value={this.state.bottomText} 
                                placeholder="Insert Text" 
                                onChange={this.handleChange}>
                        </input>
                    </label>
                    <button>GO!</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;