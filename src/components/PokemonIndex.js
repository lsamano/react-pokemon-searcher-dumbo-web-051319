import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import OurSearchBar from './OurSearchBar';

class PokemonPage extends React.Component {
  state = {
    initialPokemon: [],
    searchTerm: ""
  }

  filteredPokemons = () => {
    return this.state.initialPokemon.filter(singlePokemon => {
      return singlePokemon.name.includes(this.state.searchTerm)

      // We didn't account for lowercase/uppercase during lecture
      // this is what it would look like:
        // return singlePokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(jsonPokemon => {
      console.log(jsonPokemon)
      this.setState({
        initialPokemon: jsonPokemon
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleNewPokemon = (newPokemon) => {
    console.log(newPokemon)
    // manipulate the data to fit our backend
    const pokemonObj = {
      name: newPokemon.name,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      },
      stats: [
        {
          name: "hp",
          value: parseInt(newPokemon.hp)
        }
      ]
    }

    // run the POST fetch
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(res => res.json())
    .then(newestPokemon => {
      // update state to have new Pokemon
      this.setState({
        initialPokemon: [...this.state.initialPokemon, newestPokemon]
      })
    })
  }


  // Delete fetch and update state
  deletePokemon = (pokemon) => {
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
      method: "DELETE"
    })
    .then(() => {
      const updatedPokemons = this.state.initialPokemon.filter(onePokemon => {
        return onePokemon.id !== pokemon.id
      })
      this.setState({
        initialPokemon: updatedPokemons
      })
    })
  }

  // We wrote this code after lecture for sake of example; it is not implemented
  // anywhere in the code
  updatePokemon = (updatedPokemon) => {
    const newPokemons = this.state.initialPokemon.map(onePoke => {
      if (onePoke.id === updatedPokemon.id) {
        return updatedPokemon
      } else {
        return onePoke
      }
    })
    this.setState({
      initialPokemon: newPokemons
    })
  }

  render() {
    console.log(this.state.initialPokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <OurSearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <br />
        <PokemonCollection deletePokemon={this.deletePokemon} pokemon={this.filteredPokemons()} />
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
