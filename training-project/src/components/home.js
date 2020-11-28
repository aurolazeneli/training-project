import React from 'react';
import UserList from './UserList';
import UserForm from './UserPost';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: true,
            form: {
                title: '',
                post: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: event.target.value
                }
            }
        });
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
                <UserForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                <UserList users={this.state.users} />
            </div>
        );
    }
}

export default Home;