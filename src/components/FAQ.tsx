interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={i} className="faq-item">
          <summary>{item.question}</summary>
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </details>
      ))}
    </div>
  )
}
