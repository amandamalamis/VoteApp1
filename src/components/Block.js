import React from 'react';

class Block extends React.Component{
    constructor (props){
        super(props);
        this.state = {
        count: 0,
        text: "State is going to change!",
        hovers: false
        }
    }

    updateCount = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const { lang } = this.props;
        const style = (this.state.hovers)
        ? {
            border: `8px solid ${this.props.lang}`
        } : {
        }
        return (
            <div 
            onMouseEnter={() => this.setState({hovers: true})}
            onMouseLeave={() => this.setState({hovers: false})}
            onClick={this.updateCount} 
            style={style} className="block">
            
            <h2 style={{color:lang}}>{lang} {this.state.count} {} </h2>
            <button> {`Vote for ${this.props.lang} `} </button>
            </div>
        );
    }
}
export default Block;


