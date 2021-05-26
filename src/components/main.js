import React, { Component } from 'react'
import Questions from '../share/question'
import Todo from './todo'
export default class Main extends Component {



    render() {

        
        return (
            <div className="home-screen-layout">
                
                <Todo/>
            </div>
        )
    }
}
