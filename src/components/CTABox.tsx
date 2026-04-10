interface CTABoxProps {
  heading: string
  text: string
  onOpenModal: () => void
}

export default function CTABox({ heading, text, onOpenModal }: CTABoxProps) {
  return (
    <section className="cta reveal">
      <div className="container">
        <div className="cta-box">
          <div className="cta-text">
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
          <a
            href="#"
            className="btn-cta"
            onClick={(e) => { e.preventDefault(); onOpenModal() }}
          >
            Gratis Consult
          </a>
        </div>
      </div>
    </section>
  )
}
