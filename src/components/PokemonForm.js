import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    // send data (ex. this.state) to pokemon index
    this.props.handleNewPokemon(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.name} name='name' onChange={this.handleChange} placeholder='Name' />
        <input type='text' value={this.state.hp} name='hp' onChange={this.handleChange} placeholder='HP'/>
        <input type='text' value={this.state.frontUrl} name='frontUrl' onChange={this.handleChange} placeholder='Front URL'/>
        <input type='text' value={this.state.backUrl} name='backUrl' onChange={this.handleChange} placeholder='Back URL'/>
        <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default PokemonForm
