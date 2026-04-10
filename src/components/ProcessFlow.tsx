interface ProcessStep {
  num: string
  icon: string
  title: string
  description: string
}

interface ProcessFlowProps {
  title: string
  steps: ProcessStep[]
  timeline: string[]
}

export default function ProcessFlow({ title, steps, timeline }: ProcessFlowProps) {
  return (
    <section className="process-flow reveal">
      <div className="container">
        <div className="section-eyebrow">Het proces</div>
        <h2 className="section-title">{title}</h2>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="process-num">{step.num}</div>
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="process-timeline">
          {timeline.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
