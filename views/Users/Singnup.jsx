const React = require('react')
const NavBar = require('../components/Navbar')


class Signup extends React.Component {
    render() {
        return(
            <div>
            <h1>Create a New Account</h1>
            

            <form action='/user/signup' method='post'>
                <fieldset>
                    <legend>Create an Account</legend>

                   <label htmlFor='username'>Username</label>
                    <br/>
                    <input type='text' name='username' required/>
                    <br/>
                    <label htmlFor='email'>Email</label>
                    <br/>
                    <input type='text' name='email' required/>
                    <br/>
                     <label htmlFor='password'>Password</label> <br/>

                    <input type='password' name='password' required/> <br/>
                    <input type='submit' value='Signup' />
                </fieldset>
            </form>

            <div>
                <p>
                    Already have an account? <a href="/user/signin">Signin</a>{" "}
                </p>
            </div>
            </div>
        )
    }
}

module.exports = Signup