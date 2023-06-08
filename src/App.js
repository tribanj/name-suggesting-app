import React from 'react'
import './components/App.css'
import Header from './components/Header/Header'
import Search from './components/SearchBox/Search'
import ResultsContainer from './components/ResultsContainer/ResultsContainer'

const name = require('@rstacruz/startup-name-generator')
class App extends React.Component {
    constructor() {
        super()

        this.state = {
            headerText: 'Name It!',
            headerExpended: true,
            suggestedNames: [],
        }
    }
    handleInputChange = (inputText) => {
        // alert("I am called");
        // console.log(name());

        this.setState({
            headerExpended: !inputText,
            suggestedNames:inputText ? name(inputText) : [],
        })
    }
    render() {
        return (
            <>
                <Header
                    headerExpanded={this.state.headerExpended}
                    headTitle={this.state.headerText}
                />
                <Search onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </>
        )
    }
}
export default App
