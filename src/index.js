import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo:'',
      todos:[]
    }
    this.todochange = this.todochange.bind(this);
    this.todoarray =this.todoarray.bind(this);
    this.remove =this.remove.bind(this);
  }
  todochange(e){
    var inputvalue=e.target.value;
    this.setState({todo:inputvalue})
  }

   todoarray(e){
    e.preventDefault()
    if(this.state.todo ===" ") return
   var inputvalue=(this.state.todo);
    var updatearray = this.state.todos;
   
    updatearray.push(inputvalue);
    
    this.setState({todos:updatearray});
    console.log(this.state.todos);
    e.target.reset()
    
   }
   remove(e){
var id= e.target.id;
console.log(id);
var todoid=this.state.todos;
todoid.splice(id,1);
this.setState({
  todos:todoid
})
   }

    render() {
      var list= this.state.todos.map((e,i)=><li key={i}>{e }<button onClick={this.remove} id={i}>  Delete</button></li>)
        return (
          <div>
            <div className="row mt-5">
              <div className="offset-md-4 col-md-4">
        <div className="card"> 
        <div className="card-body">     
        <h1 className="heading">MY LIST OF TODOS</h1>
        <form className="box" onSubmit={this.todoarray}> 
        <input  placeholder="your todo..." onChange={this.todochange}/>
        </form>
        <ul className="list">
       {list}
        </ul> 
        </div>
        </div>
        </div>
        </div>


        </div>


      )
    }
  }
 
  const rootElement = document.getElementById('root');
ReactDOM.render(<Todo/>, rootElement);