import React from "react";
import AddOptions from './AddOption';
import Options from './options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal'; 

export default class IndecisionApp extends React.Component {
    state={
        options:[],
        selectedOption: undefined 
     
    }
   
    handleDeleteOptions=() => {
        
        this.setState(() => ({options:[]}));
    }
    handleClearSelectedOption=() => {
        this.setState(() => ({selectedOption:undefined}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option)=> optionToRemove !== option)
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random () * this.state.options.length)
        const option =this.state.options[randomNum]
        this.setState(() =>({
           selectedOption : option
       }));    
        
    }
    handleAddOption = (option) => {
        if(!option){
            return'Enter valid value to  add item';
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option is already exist'
        }
     
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
   
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state={
    //     options :[]
    //     };    
    // }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
     
            if(options) {
             this.setState(()=> ({options}));
            }
        } catch (e) {
            
        }
       
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    }  
    
    render() {
        
        const subTittle = "Put your life in the hands of Computer.";
       
        return(
        <div>
            <Header subTittle={subTittle}/>
            <div className="container">
            <Action 
            hasOption ={  this.state.options.length> 0}
                handlePick = {this.handlePick}
            /><div className="widget">
             <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions
                handleAddOption  ={this.handleAddOption}
            />

            </div>
           
            </div>
            <OptionModal
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption = {this.handleClearSelectedOption}
            />
            
        </div>
        );
    }
}; 


