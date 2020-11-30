import React from 'react';

class UserPost extends React.Component {
    render() {
        return (
            <div className="form-layout">
            <form className="form" onSubmit={this.props.handleSubmit}>
                <h2>Create new post</h2>
                <div>
                    <label htmlFor="title">Title: </label><br/>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={this.props.form.title}
                        onChange={this.props.handleChange}
                        placeholder="Title..."
                        required
                    />
                </div>
                <div className="texta">
                    <label htmlFor="post">Post:</label><br/>
                    <textarea id="post" name="post" value={this.props.form.post}
                        onChange={this.props.handleChange}
                        placeholder="Happy New Year everyone!"
                        required rows="8" cols="40">
                    </textarea>
                </div>
                <button className="sub" type="submit">Post</button>
            </form>
            </div>
        );
    }
}

export default UserPost;