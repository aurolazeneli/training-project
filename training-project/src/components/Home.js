import React from 'react';
import UserList from './UserList';
import UserPost from './UserPost';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            clicked: true,
            editIdx: -1,
            form: {
                title: '',
                post: ''
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.vote = this.vote.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: event.target.value,
                }
            }
        });
    }
    startEdit = (i) => {
        console.log('e sakte');
        const editIdx = this.state.editIdx;
        this.setState({ editIdx: i })
        console.log(editIdx);
    };

    stopEditing = () => {
        this.setState({ editIdx: -1 });
    };

    handleEdit = (event, name, i) => {

        // const {value}= event.target;   
        this.setState(prevState => ({
            users: prevState.users.map((row, j) => j === i ? ({ ...row, [name]: event.target.value }) : row)
        })
        )
    }
    vote(event) {
        // event.target.preventDefault;
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }
    handleRemove(i) {
        this.setState(prevState => (
            {
                users: prevState.users.filter((row, j) => j !== i),
            }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                users: [
                    prevState.form,
                    ...prevState.users
                ],
                form: {
                    title: '',
                    post: ''
                }
            };
        });
    }
    render() {
        return (

            <div>
                <div id="parent">What's on your mind?<div id="border"></div></div>
                <UserPost
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                <UserList
                    handleRemove={this.handleRemove}
                    startEdit={this.handleEdit}
                    stopEditing={this.stopEditing}
                    handleEdit={this.handleEdit}
                    editIdx={this.state.editIdx}
                    clicked={this.state.clicked}
                    vote={this.vote}
                    users={this.state.users}
                />
            </div>
        );
    }
}

export default Home;
