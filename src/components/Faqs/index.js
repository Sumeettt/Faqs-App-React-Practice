import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
