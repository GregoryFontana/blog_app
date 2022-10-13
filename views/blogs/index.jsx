const react = require('react')
const fruits = require('../../models/fruits')

class Index extends React.Component{
    render(){

        return(<div>
            <h1>
                All fruits
            </h1>
            <ul>{fruits.map((fruit, idx) => {
            })}</ul>
        </div>)
    }
}

module.exports = Index