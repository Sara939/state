import { Component } from "react"

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={counter:this.props.counter}
        // this.state= this.CngToStart.bind(this)

    }
    IncreaseByOne=()=>{
        this.setState({counter: this.state.counter+1})
    }
    DecreaseByOne=()=>{
        this.setState({counter: this.state.counter-1})
    }
    CngToStart=()=>{
        this.setState({counter: 0})
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.IncreaseByOne}>+</button>
                <button onClick={this.DecreaseByOne}>-</button>
                <button onClick={this.CngToStart}>restart </button>


            </div>
        )
    }

}


export default Counter;