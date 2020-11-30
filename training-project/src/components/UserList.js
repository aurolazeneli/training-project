import React from 'react';


class UserList extends React.Component {
   state= {
       date: new Date()}
    render() {
      
        const users = this.props.users.map((e, i) => {
          
            const currentlyEditing = this.props.editIdx === i;
            console.log(e);
            return (
                <tr key={i}>
                    <td>{currentlyEditing ?<input value={e.title}
                     type="text"
                    
                     name="title"
                        onChange={(event)=>this.props.handleEdit(event,"title",i,this.value)}/>:e.title}<br/><br/><div className="date">{this.state.date.toLocaleDateString()}</div></td>
                    <td>{e.post}</td>
                   <td>{currentlyEditing?<button className="btn" onClick={this.props.stopEdit}>Save</button>:<button className="btn" onClick={()=>this.props.startEdit(i)} >Edit</button>}</td>
                    <td><button className="btn" onClick={()=>this.props.handleRemove(i)}>Delete</button></td>
                    <td ><button className="btn" onClick={(i)=>this.props.vote(i)}>{this.props.clicked ? <i class="fa fa-chevron-up" aria-hidden="true"></i> : <i class="fa fa-chevron-down" aria-hidden="true"></i>}</button></td>
                </tr>
            );
        })

        return (
              
            <div className="table-layout">
                <h2 className="table1">List of Posts</h2>
                <table className="table" >
                    <thead>
                        <tr className="tr">
                            <th>Title</th>
                            <th>Posts</th>
                            <th>Edit</th>
                            <th>Delete</th>
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