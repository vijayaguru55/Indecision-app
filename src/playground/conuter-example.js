class Counter extends React.Component{

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.clear = this.clear.bind(this);
        this.state = {
            count :0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count',this.state.count);
        }
    }
   
    handleAddOne() {
       this.setState((prevState) => {
        return{
            count:prevState.count + 1
        }
       })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return{
                count:prevState.count - 1
            }
           })
    }
    clear () {
        this.setState(() => {
            return{
                count:0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.clear}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 4
// };


ReactDOM.render(<Counter count={-45                  }/>,document.getElementById('app'))

