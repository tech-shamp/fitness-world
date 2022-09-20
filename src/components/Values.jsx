import { GiCutDiamond } from "react-icons/gi"
import { values } from "../data"
import Image from "../img/values.jpg"
import Card from "../ui/Card"
import SectionHead from "./SectionHead"

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="rope values" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eaque labore vel ratione voluptate aut consequatur iste! Maiores
            nihil recusandae, harum quam, sit voluptates suscipit facilis
            repellat, iusto magnam nostrum!
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
