import React from 'react';
import Block from './Block';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                blocks:[
                    {lang: "React:"},
                    {lang: "Vue:"},
                    {lang: "Angular:"},
                    {lang: "Ember:"}
                ],
                message: "",
            }
    }
    // <Block message="React" onClickMessage={}
    handleMessage(lang) {
        const newMessage = `You just voted for ${lang}!`;
        this.setState({message: newMessage});
    }


    renderBlocks() {
        return this.state.blocks.map((block) => {
            return <Block lang={block.lang} />
        })
    }
    render() {
        this.renderBlocks();
        return(
            <div className="container">
            <h1> VOTE FOR YOUR FAVORITE JavaScript LANGUAGE: </h1>
                {this.renderBlocks()}
            <h3> {this.state.message} </h3>
            </ div>
        )
    }
}
export default App;
