import React, { Component } from 'react'
import Questions from '../share/question'
export default class QuestionSolve extends Component {

    constructor(props) {
        super(props)

        this.state = {

            arrayContainer: [1, 3, 5, 6, 15, 24, 65, 18, 96, 24, 32, 45],
            evenArray: [],
            visible_a_2: false,
            visible_a_4: false,
            visible_a_5: false,
            array_of_consecutive_numbers: {
                array_of_consecutive_number1: [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
                array_of_consecutive_number2: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]

            },
            array_of_consecutive_numbers_q3: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10],
            answer3: [],
            answer4: {},
            // obj: {"id" : 4, "name": "abc", "id" : 10, "name" : "ab2","id": 5, "name" : "abc3", "id" : 6, "name" : "abc5"} 



        }
        this.questionOne.bind(this);
        this.questionTwo.bind(this);
        this.questionThree.bind(this);
        this.questionFour.bind(this);
        this.questionFive.bind(this);
    }

    componentDidMount() {
        this.questionFour()
    }



    questionOne = () => {

        let { arrayContainer, evenArray } = this.state;

        let updateArray = []

        if (evenArray.length !== 0) {
            this.setState({ evenArray: updateArray });
            return
        }

        // console.log(arrayContainer);

        for (let i = 0; i < arrayContainer.length; i++) {


            if (arrayContainer[i] % 2 === 0) {

                updateArray.push(arrayContainer[i])

            }

        }

        this.setState({ evenArray: updateArray });

        // console.log(updateArray)
    }


    questionTwo = (array_of_consecutive_numbers = []) => {

        //Max num of consecutive 1's
        //array_of_consecutive_number1: [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
        //array_of_consecutive_number2: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]

        if (array_of_consecutive_numbers.length === 0) {
            return
        }

        console.log(array_of_consecutive_numbers);

        let max_count = 0, count = 0;




        for (let i = 0; i < array_of_consecutive_numbers.length; i++) {

            //console.log(array_of_consecutive_numbers[i])

            count = array_of_consecutive_numbers[i] === 1 ? count + 1 : 0;

            if (count > max_count) {
                max_count = count;
            }

        }

        //console.log(` ${max_count}`)
        return max_count;




    }

    questionThree = (e) => {

        this.setState({ visible_a_3: !this.state.visible_a_3 });
        let { array_of_consecutive_numbers_q3 } = this.state

        let find_value = [];

        for (let i = 0; i < array_of_consecutive_numbers_q3.length; i++) {

            if (array_of_consecutive_numbers_q3[i] === array_of_consecutive_numbers_q3[i + 1]) {

                //console.log(array_of_consecutive_numbers_q3[i])
                find_value.push(array_of_consecutive_numbers_q3[i]);
            }

        }

        this.setState({ answer3: find_value });


    }

    questionFour = (e) => {

        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(response => {

                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    throw error;
                }
            )
            .then(response => response.json())
            .then(response => {

                //console.log(response);
                this.setState({ answer4: response })


            })
            .catch((err) => {
                console.log(err);


            });


    }

    questionFive = (e) => {

        // console.log(JSON.stringify({"id" : 4, "name": "abc", "id" : 10, "name" : "ab2","id": 5, "name" : "abc3", "id" : 6, "name" : "abc5"}) )


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
                            {this.state.evenArray.length !== 0 ? "Hide" : "Click To View Answer"}</button>
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
                        <button className="button-btn" onClick={() => this.setState({ visible_a_2: !this.state.visible_a_2 })}>
                            {this.state.visible_a_2 ? "Hide" : "Click To View Answer"}</button>
                        {this.state.visible_a_2 ?
                            <div className="divider">
                                <p>{JSON.stringify(this.state.array_of_consecutive_numbers)} </p>
                                <div className="divider"></div>
                                <b>Output</b>
                                <p> Maximum consecutive 1's in an array in {JSON.stringify(this.state.array_of_consecutive_numbers.array_of_consecutive_number1)}  = {this.questionTwo(this.state.array_of_consecutive_numbers.array_of_consecutive_number1)}</p>
                                <p> Maximum consecutive 1's in an array in {JSON.stringify(this.state.array_of_consecutive_numbers.array_of_consecutive_number2)}={this.questionTwo(this.state.array_of_consecutive_numbers.array_of_consecutive_number2)}</p>
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
                            {this.state.visible_a_3 ? "Hide" : "Click To View Answer"}</button>
                        {this.state.visible_a_3 ?
                            <div>

                                {this.state.answer3.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            {item}
                                        </div>
                                    );
                                })}
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
                        <button className="button-btn" onClick={() => this.setState({ visible_a_4: !this.state.visible_a_4 })}>
                            {this.state.visible_a_4 ? "Hide" : "Click To View Answer"}</button>
                        {this.state.visible_a_4 ?
                            <div>
                                {JSON.stringify(this.state.answer4)}
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
                        <button className="button-btn" onClick={() => this.setState({ visible_a_5: !this.state.visible_a_5 })}>
                            {this.state.visible_a_5 ? "Hide" : "Click To View Answer"}</button>

                        {this.state.visible_a_5 ?
                            <div className="divider">
                                <code>
                                    &#123;
                                <br />
                               &nbsp;&nbsp;"id" : 4, "name" : "abc",<br />
                               &nbsp;&nbsp;"id" : 10,"name" : "ab2",<br />
                               &nbsp;&nbsp;"id" : 5, "name" : "abc3",<br />
                               &nbsp;&nbsp;"id" : 6, "name" : "abc5"<br />
                               &#125;
                            </code>

                                <p>This type of format disallow duplicate keys in object literals (no-dupe-keys)</p>
                                <p>It should be dictionary of dictionary or dictionary of iterables(list,array,tuples etc) </p>

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
