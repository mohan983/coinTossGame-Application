import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {totalTossCount: 0, isTrails: 0, headCount: 0, trailCount: 0}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        totalTossCount: prevState.totalTossCount + 1,
        isTrails: tossResult,
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        totalTossCount: prevState.totalTossCount + 1,
        isTrails: tossResult,
        trailCount: prevState.trailCount + 1,
      }))
    }
  }

  render() {
    const {totalTossCount, isTrails, headCount, trailCount} = this.state

    let imageUrl = ''
    if (isTrails === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="coinToss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} className="Toss-image" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="tossResults-container">
            <p className="tossResults">Total: {totalTossCount}</p>
            <p className="tossResults">Heads: {headCount}</p>
            <p className="tossResults">Tails: {trailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
