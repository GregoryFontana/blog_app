const React = require(`react`)


class Footer extends React.Component{
render() {
return(
    <footer style={styles.container}>

    <a href="">Privacy</a>
    <a href="">Contact</a>
    <a href="">Location</a>
    <a href="">Terms</a>
    </footer>
)
}
}
const styles = {
    container : {
        display: "flex",
        justifyContent: "space-between",
        background: `rgba: (3456, 3455, 2345, 9.8)`
    }
}

module.exports = Footer