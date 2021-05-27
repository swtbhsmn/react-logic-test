import React, { Component } from 'react'
import Questions from '../share/question'
export default class QuestionSolve extends Component {

    constructor(props) {
        super(props)

        this.state = {

            arrayContainer: [1, 3, 5, 6, 15, 24, 65, 18, 96, 24, 32, 45],
            evenArray: []


        }
        this.questionOne.bind(this);
        this.questionTwo.bind(this);
        this.questionThree.bind(this);
        this.questionFour.bind(this);
        this.questionFive.bind(this);
    }


   

    questionOne = () => {
        
        let { arrayContainer, evenArray } = this.state;

        let updateArray = []

        if(evenArray.length!==0){
            this.setState({evenArray:updateArray});
            return
        }

        console.log(arrayContainer);

        for (let i = 0; i < arrayContainer.length; i++) {


            if (arrayContainer[i] % 2 === 0) {

                updateArray.push(arrayContainer[i])

            }

        }

        this.setState({ evenArray: updateArray });

        console.log(updateArray)
    }


    questionTwo=(e)=>{
        e.preventDefault();
    }

    questionThree=(e)=>{
        e.preventDefault();
    }

    questionFour=(e)=>{
        e.preventDefault();
    }

    questionFive=(e)=>{
        e.preventDefault();
    }


    render() {
        return (
            <div className="q-solve-container">
                <h3>ReactJs Logical Test Question</h3>

                <div className="answer q-number-container">

                    <div className="question" >
                        <b>Question:{Questions[0].reactjs_logical_test[0].id}</b>
                        <p>{Questions[0].reactjs_logical_test[0].question}</p>
                        <div className="divider"></div>
                        <b>Answer:</b>
                        <p>let arrayContainer = {JSON.stringify(this.state.arrayContainer)};</p>
                        <p> let evenArrayContainer = [];</p>
                        <div className="divider"></div>
                        <button className="button-btn" onClick={this.questionOne}>
                            {this.state.evenArray.length !== 0 ?  "Hide" : "Click To View Answer"}</button>
                        {this.state.evenArray.length !== 0 ?
                            <div>
                                {JSON.stringify(this.state.evenArray)}
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </div>

                    <div className="question" >
                        <b>Question:{Questions[0].reactjs_logical_test[1].id}</b>
                        <p>{Questions[0].reactjs_logical_test[1].question}</p>
                        <div className="divider"></div>
                        <b>Answer:</b>
                      
                        <div className="divider"></div>
                        <button className="button-btn" onClick={this.questionTwo}>
                            {this.state.evenArray.length !== 0 ?  "Hide" : "Click To View Answer"}</button>
                        {this.state.evenArray.length !== 0 ?
                            <div>
                               
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </div>
                    <div className="question" >
                        <b>Question:{Questions[0].reactjs_logical_test[2].id}</b>
                        <p>{Questions[0].reactjs_logical_test[2].question}</p>
                        <div className="divider"></div>
                        <b>Answer:</b>
                      
                        <div className="divider"></div>
                        <button className="button-btn" onClick={this.questionThree}>
                            {this.state.evenArray.length !== 0 ?  "Hide" : "Click To View Answer"}</button>
                        {this.state.evenArray.length !== 0 ?
                            <div>
                              
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </div>

                    <div className="question" >
                        <b>Question:{Questions[0].reactjs_logical_test[3].id}</b>
                        <p>{Questions[0].reactjs_logical_test[3].question}</p>
                        <div className="divider"></div>
                        <b>Answer:</b>
                      
                        <div className="divider"></div>
                        <button className="button-btn" onClick={this.questionFour}>
                            {this.state.evenArray.length !== 0 ?  "Hide" : "Click To View Answer"}</button>
                        {this.state.evenArray.length !== 0 ?
                            <div>
                           
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </div>

                    <div className="question" >
                        <b>Question:{Questions[0].reactjs_logical_test[4].id}</b>
                        <p>{Questions[0].reactjs_logical_test[4].question}</p>
                        <div className="divider"></div>
                        <b>Answer:</b>
                      
                        <div className="divider"></div>
                        <button className="button-btn" onClick={this.questionFive}>
                            {this.state.evenArray.length !== 0 ?  "Hide" : "Click To View Answer"}</button>
                        {this.state.evenArray.length !== 0 ?
                            <div>
                              
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}
