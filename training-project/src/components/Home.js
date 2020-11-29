import React from 'react';
import UserList from './UserList';
import UserPost from './UserPost';

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
        this.handleRemove = this.handleRemove.bind(this);
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
    handleRemove(i){
        this.setState(prevState =>({
           users: prevState.users.filter((row,j)=>j!==i),
        }));
    }
    handleEdit(i){
        this.setState(prevState =>({
           users: prevState.users.filter((row,j)=>j!==i),
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
                <UserPost
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                <UserList 
                handleRemove={this.handleRemove}
                handleEdit={this.handleEdit}
                users={this.state.users}
                />
            </div>
        );
    }
}

export default Home;
