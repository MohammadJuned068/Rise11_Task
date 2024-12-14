import React,{Component} from "react";
import "./App.css";
import Pt from 'prop-types';
// const Student =(props)=>{
//     return <h1 className={"bg"}>hello {props.name} </h1>
// }
class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"juned",
            rollno:this.props.rollno
        };
    }
    handleClick=()=>{
        this.setState({name:"khan",rollno:102});
        console.log("clicked button");
    }
    render(){
        return (
            <>
            <h1>hello ,your name is {this.state.name} and roll number is {this.state.rollno} </h1>
            <button onClick={this.handleClick}>click me</button>
            </>
        )
    }
}
/*function Student(props){
    function handleClick(e){
        console.log('button clicked',props);
    }
    return (
        <React.Fragment>
                <h1>hello</h1>
                <a href="https://leetcode.com/u/junedkhann/" onClick={handleClick}>click me</a>
            </React.Fragment>
    )
};*/

Student.propTypes={
    name:Pt.string.isRequired,
    rollno:Pt.number
};

export default Student;