import { Component } from "react"

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={counter:this.props.counter}
        this.CngToStart= this.CngToStart.bind(this)
        this.DecreaseByOne= this.DecreaseByOne.bind(this)
        

    }
    IncreaseByOne=()=>{
        this.setState({counter: this.state.counter+1})
        // console.log(this.state.counter);
        if (this.state.counter %7==0){
        //   console.log("boom");
       
           
        }
    }
    DecreaseByOne(){
        this.setState({counter: this.state.counter-1})
    }
    CngToStart(){
        this.setState({counter: 0})
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.IncreaseByOne}>+</button>
                <button onClick={this.DecreaseByOne}>-</button>
                <button onClick={this.CngToStart}>restart </button>
                {/* <h1>{console.log(this.state.counter)}</h1> */}


            </div>
        )
    }

}


export default Counter;