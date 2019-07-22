import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  createCards = () => {
    return this.props.pokemon.map(singlePokemon => <PokemonCard key={singlePokemon.id} pokemon={singlePokemon} deletePokemon={this.props.deletePokemon}/>)

    // Can also do this, but the logic changes a little
    // return this.props.pokemon.map(singlePokemon => <PokemonCard key={singlePokemon.id} {...singlePokemon}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.createCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
