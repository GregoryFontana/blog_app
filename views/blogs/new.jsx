const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1>New Pokemon</h1>

                <form action='/pokemon' method='POST'>
                    Name: <input type='text' name='name'/>
                    <br/>
                    Image: <input type='text' name='image'/>
                    <br/>
                    Add New Pokemon: <input type='submit' value='Add New Pokemon'/>
                </form>
            </div>
        )
    }
}
module.exports = New