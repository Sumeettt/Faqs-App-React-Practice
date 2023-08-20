import {Component} from 'react'

import './index.css'

const PLUS_ICON =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_ICON =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {eachFaq} = this.props
    const {answerText} = eachFaq

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="faq-answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  getButton = () => {
    const {isActive} = this.state

    const buttonIcon = isActive ? MINUS_ICON : PLUS_ICON

    const iconAlt = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img src={buttonIcon} alt={iconAlt} />
      </button>
    )
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq

    return (
      <li className="each-faq">
        <div className="faq-question-container">
          <h1 className="faq-question-text">{questionText}</h1>
          {this.getButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
