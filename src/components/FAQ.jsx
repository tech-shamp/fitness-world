import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const FAQ = ({ question, answer }) => {
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          <AiOutlinePlus />
          <AiOutlineMinus />
        </button>
      </div>
      <p>{answer}</p>
    </article>
  )
}

export default FAQ
