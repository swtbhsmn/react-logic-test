import React, { Component } from 'react'
import QuestionSolve from './questionsolve'
import Todo from './todo'
export default class Main extends Component {



    render() {


        return (
            <div className="home-screen-layout">
                <div className="side-nav-layout">
                    <div className="fixed-layout">
                        <div className="topic">
                            <h4>Assignments</h4>
                        </div>

                        <nav className="nav" >
                            <b>ReactJs Final Logical Test</b>

                            <ul className="active-section">

                                <li className="nav-item"><a className="active"  href="#1">To-do</a></li>
                                

                            </ul>
                            <b>ReactJs Logical Test</b>
                            <ul className="active-section">

                            <li className="nav-item"><a href="#2">Questions</a></li>
                              

                            </ul>


                        </nav>
                    </div>

                </div>

                <div className="view-layout">
                    <section id="1">
                        <Todo />
                    </section>
                    <section id="2">
                        <QuestionSolve />
                    </section>
                </div>



            </div>
        )
    }
}
