class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state={
        options :[]
        };    
    }
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
    handleDeleteOptions() {
        // this.setState(() => {
        //     return{
        //         options:[]
        //     }
        // })
        this.setState(() => ({options:[]}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options : prevState.options.filter((option)=> optionToRemove !== option)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random () * this.state.options.length)
        const option =this.state.options[randomNum]
        alert(option);
    }
    handleAddOption (option) {
        if(!option){
            return'Enter valid value to  add item';
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option is already exist'
        }
        // this.setState((prevState) => {
        // return{
        //     options: prevState.options.concat([option])
        // }
        // }); Alternate option Here;;;
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
   
    render() {
        
        const subTittle = "Put your life in the hands of Computer";
       
        return(
        <div>
            <Header  subTittle={subTittle}/>
            <Action 
            hasOption ={  this.state.options.length> 0}
                handlePick = {this.handlePick}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions
                handleAddOption  ={this.handleAddOption}
            />
        </div>
        );
    }
}

// IndecisionApp.defaultProps ={
//     options :[]
// }

const Header  = (props) =>{
    return  (
        <div>
            <h1>{props.tittle}</h1>
            <h2>{props.subTittle}</h2>
        </div>
    );
}

Header.defaultProps =  {
   tittle : 'Indecision'
};

// class Header extends React.Component {
//    render() {
//        return  (
//            <div>
//                <h1>{this.props.tittle}</h1>
//                <h2>{this.props.subTittle}</h2>
//            </div>
//        )
//    }
    
// }
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} 
            disabled = {!props.hasOption}>What Should i do</button>
        </div>
    );
}
// class Action extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} 
//                 disabled = {!this.props.hasOption}>What Should i do</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Reset all</button>
            {props.options.length === 0 && <p>Please add an Option</p>}
            {
                props.options.map((options) => (
                <Option 
                key={options} 
                optionsText={options}
                handleDeleteOption = {props.handleDeleteOption}
                />
                ))
            }
        </div>
    );
}

// class Options extends React.Component {
//      render() {
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Reset all</button>
//                 {
//                     this.props.options.map((options) => <Option key={options} optionsText={options}/>)
//                 }
//             </div>
//         );
//     }
// }
 const Option = (props) =>{
    return(
        <div>
       {props.optionsText}
       <button 
       onClick={(e) => {
        props.handleDeleteOption(props.optionsText);
       }}
       >
       remove
       </button>
    </div>
    );
 } 
        
    
// class Option extends React.Component {
//     render() {
//         return(
//             <div>
//             Options:
//            {this.props.optionsText}
//         </div>
//         );
//     }
// }
class AddOptions extends React.Component {
    constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
        error : undefined
    }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.options.value.trim();
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return { error}
            
        // })
        this.setState(()=>({error}));
        if (!error) {
            e.target.elements.options.value ='';
        }
    }
    render() {
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="options"/>
                <button>Add option</button>
            </form>
            AddOptions Component here
        </div>
        )
    }
}

// const User = (props) => {
//     return(
//         <div>
//             <p>Name : {props.name} </p>
//             <p>Age:{props.age} </p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={['vijay', 'guru']}/>, document.getElementById('app'));