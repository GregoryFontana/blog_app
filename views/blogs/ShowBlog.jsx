const React = require('react')
    
class ShowBlog extends React.Component {
       render () {
        //console.log(this.props)
        //Receives the data from fruits.js
        const {blog} = this.props
        //const presentDate = this.props.date
        return (
        <div>
          <h1> {blog.title} </h1>
          
          <p>{blog.body}</p>
          <h6>Liked by {blog.likes}</h6>

          <h5>Written by: {blog.author}</h5>

        {/* <h6>Year:{presentDate}</h6> */}
      </div>
         );
        }
     }
     module.exports  = ShowBlog;