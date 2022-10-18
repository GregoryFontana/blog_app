const React = require(`react`)


class Navbar extends React.Component{
render() {
return(
    <nav style={styles.container}>

    <a href="/">Home</a>
    
    <a href="/blog">Blogs</a>
    
    <a href="/blog/new">Create New Blog</a>
    
    <a href="/users/signup">Signup</a>

    <a href='/users/signout'>Signout</a>
    </nav>
    
)
}
}
const styles = {
    container : {
        display: "flex",
        justifyContent: "space-between",
        background: `rgba(255, 233, 123, 9.8)`
    }
}

module.exports = Navbar