console.log('running');

const app = {
    tittle :'Indecision-app',
    subTittle : 'Put your life in the hands of computer',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value ='';
        render();
      
    }
  
};
const onRemoveAll = () => {
    app.options = [];
    render();
};
const onMakeDecision =() =>{
    const randomNum = Math.floor(Math.random() * (app.options.length));
    const option = app.options[randomNum];
    alert(option);
};

const appRoot =document.getElementById('app');
const render = ()=>{
    const template = (
        <div>
            <h1>{app.tittle}</h1> 
            {app.subTittle && <p>{app.subTittle}</p>}
            {app.options.length >0 ? 'Here is The Option':'No Options'}
            <p>{app.options.length}</p>
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What Should I do</button>
            <button onClick={onRemoveAll}>Clear</button>
            
           <ol> 
               {
                   app.options.map((option)=>   <li key={option}>{option}</li>)
               }
           </ol>
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option"/>
               <button>Add option</button>
               
           </form>
       </div>
    );

    ReactDOM.render(template, appRoot);

};
render();
