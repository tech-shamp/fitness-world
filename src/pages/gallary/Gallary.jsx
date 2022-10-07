import { useEffect } from "react"
import Header from "../../components/Header"
import HeaderImage from "../../img/header_bg_3.jpg"
import "./Gallary.css"

const Gallary = () => {
  useEffect(() => {
    document.title = "Gallary - Fitness World"
  })

  const gallaryLength = 15
  const images = []

  for (let i = 1; i <= gallaryLength; i++) {
    images.push(require(`../../img/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallary" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        voluptatem veritatis labore eveniet eum repudiandae tenetur impedit
        earum illum mollitia.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallary img ${index + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallary
