const React = require("react");
//import bg from './bg.png'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <header>
  <link rel="stylesheet" href="/CSS/app.css" />
 </header>
        <h1>Welcome to my Blog App</h1>

        {/* <img src={bg} height="300px"/> */}
       
       
        {/* <img src='../../public/CSS/bg.png' width="300px" height="300px"/>  */}

        <img src='/CSS/bg.png' width="500px" height="500px"/> 
      </div>
    );
  }
}

module.exports = HomePage;