const React = require(`react`);
//import bg from './bg.png'
const Navbar = require(`../components/Navbar`)
const Footer = require(`../components/Footer`);

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
  <link rel="stylesheet" href="CSS/app.css" />
 </head>

 <Navbar/>

 <section>
        <h1>Welcome to my Blog Application</h1>

        <img src='/images/bg.png' style={styles.headerImg}/> 

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid molestiae, fugiat in quo quisquam iusto sapiente, rerum pariatur assumenda veritatis eius maiores harum ad nisi maxime, adipisci optio labore.
        </p>
        </section>

        <section section className="margin-section">
          <h1>Bio</h1>
          <div style={styles.intro}>
            <img src="/images/bg.png" style={styles.me}/>
            
            
            <div>
              <h2>Developer</h2>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in. At consectetur lorem donec massa sapien faucibus et molestie. Nunc sed augue lacus viverra vitae congue. Dictum non consectetur a erat nam at lectus urna. Quis risus sed vulputate odio ut enim blandit. Orci porta non pulvinar neque laoreet suspendisse interdum. Egestas quis ipsum suspendisse ultrices. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Pharetra pharetra massa massa ultricies mi. Id aliquet lectus proin nibh nisl condimentum id. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Hendrerit gravida rutrum quisque non tellus orci ac. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Volutpat diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod. 
              </p>
            </div>
            </div>
            </section>

            <section className="margin-section">
              <div>
                <h1>Feature Blog</h1>
              <div>
              <h3>Intro to JS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit nobis unde aperiam porro temporibus quisquam quia harum eveniet soluta, magnam praesentium hic consequuntur a dignissimos quae aspernatur, vel fuga!
              </p>
              <span>Author: Jimmy Flick</span>
              </div>
              </div>
              </section>


              <Footer/>
              </div>
    );
  }
}



const styles = {
  headerImg: { width: '50%', height: '50%', objectFit: 'fill'}, 
  me: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'fill',
    marginRight: '5px',
  },
  intro: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },

};

module.exports = HomePage;