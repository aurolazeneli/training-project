import React from 'react';

class UserList extends React.Component {
    state= {clicked: true}
    render() {
        
        const users = this.props.users.map((e, i) => {
       
            return (
                <tr key={i}>
                    <td>{e.title}</td>
                    <td>{e.post}</td>
                    <td><button onClick={()=>this.props.handleEdit(i)}>Edit</button><br/>
                        <button onClick={()=>this.props.handleRemove(i)}>Delete</button></td>
                    <td><button onClick= {() => this.setState({clicked: !this.state.clicked})}>{ this.state.clicked? 'Upvote' : 'Downvote'}</button></td>
                </tr>
            );
        })

        return (
            <div>
                <h2 className="form">List of Posts</h2>
                <table className="form" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Posts</th>
                            <th>Change</th>
                            <th>Upvote/Downvote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;