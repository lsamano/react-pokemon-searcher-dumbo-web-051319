import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardFlipped: false
  }

  flipCard = event => {
    this.setState({
      cardFlipped: !this.state.cardFlipped
    })
  }

  handleDeleteClick = (event) => {
    // send pokemon up to farm - I mean, index
    // let index handle delete fetch
    this.props.deletePokemon(this.props.pokemon)
  }

  render() {
    const hp = this.props.pokemon.stats.find(stat => stat.name === "hp").value

    const sprite = this.state.cardFlipped ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front
    return (
      <Card>
        <div >
          <div onClick={this.flipCard} className="image">
          <img src={sprite} alt={this.props.pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
            <button onClick={this.handleDeleteClick}>DELETE</button>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
