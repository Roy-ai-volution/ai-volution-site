interface MarqueeItem {
  text: string
  ghost?: boolean
}

interface MarqueeProps {
  items: MarqueeItem[]
}

export default function Marquee({ items }: MarqueeProps) {
  // Dupliceer items voor infinite scroll effect
  const allItems = [...items, ...items]

  return (
    <section className="marquee">
      <div className="marquee-track">
        {allItems.map((item, i) => (
          <span key={i}>
            <span className={`marquee-text${item.ghost ? ' ghost' : ''}`}>{item.text}</span>
            <div className="marquee-sep"></div>
          </span>
        ))}
      </div>
    </section>
  )
}
