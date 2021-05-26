import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:""
        }
        this.onChangeHandler.bind(this);
        this.onSubmitHandler.bind(this);
    }

    onChangeHandler=(e)=>{
        
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state.data);
    }
    
    render() {
        const {data} = this.state
        return (
            <div className="todo-container">
                <div className="todo-title-input">
                    <h3>Todo Application</h3>
                    <span className="app-discription">"To do" list, i.e., list of things that need to be done. Miscellaneous.</span>
                    <div className="user-txt-input">
                        <form onSubmit={this.onSubmitHandler}>
                        <input autoFocus  type="text" name="data" className="user-input-field" value={data} onChange={this.onChangeHandler}/>
                        
                        <button type="submit" className="btn-for-save"><span>&#10010;</span></button>
                        </form>
                        
                    </div>
                </div>
               
            </div>
        )
    }
}
