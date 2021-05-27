import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {

            data: "",
            arrayList: [],
            error: ""

        }

        this.onChangeHandler.bind(this);
        this.onSubmitHandler.bind(this);
    }

    onChangeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const { data, arrayList } = this.state;

        let info = {
            id: arrayList.length + 1,
            data: data,
            time: Date.now()
        }

        if (data.length !== 0) {
            arrayList.push(info)
            this.setState({ data: "", error: "" });
        }
        else {

            this.setState({ error: "Make sure input field is not empty." })

        }



        // console.log(arrayList);
    }


    render() {
        const { data, arrayList, error } = this.state
        return (
            <div className="todo-container">
                <div className="todo-title-input">
                    <h3>Todo Application</h3>
                    <span className="app-description">"To do" list, i.e., list of things that need to be done.</span>
                    <div className="user-txt-input">
                        <form onSubmit={this.onSubmitHandler}>
                            <input autoFocus type="text" placeholder="Write here!" name="data" className="user-input-field" autoComplete="off" value={data} onChange={this.onChangeHandler} />

                            <button type="submit" className="btn-for-save"><span>&#10010;</span></button>
                        </form>

                    </div>
                    {<span className="error">{error}</span>}
                </div>
                <div className="todo-data-show-div">
                    {arrayList.length === 0 ? <p>Your Todo List Is Empty.</p> :
                        <>

                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>DATA</th>
                                        <th>OPERATIONS</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {arrayList.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{item.id}</td>
                                                <td>{item.data}</td>
                                                <td>{item.time}</td>

                                            </tr>


                                        )
                                    })}
                                </tbody>
                            </table>
                        </>
                    }
                </div>

            </div>
        )
    }
}
