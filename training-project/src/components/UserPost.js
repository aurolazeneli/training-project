import React from 'react';

class UserPost extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>
                <h2>Create new post</h2>
                <div>
                    <label htmlFor="title">Title: </label>
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
                <div>
                    <label htmlFor="post">Post... </label>
                    <textarea id="post" name="post" value={this.props.form.post}
                        onChange={this.props.handleChange}
                        placeholder="Happy New Year everyone!"
                        required rows="4" cols="50">
                    </textarea>
                </div>
                <button type="submit">Post</button>
            </form>
        );
    }
}

export default UserPost;