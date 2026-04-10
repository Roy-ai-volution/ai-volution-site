export default function KlantenScroll() {
  const logos = (
    <>
      <img src="/assets/klanten/easystorage.png" alt="easyStorage" style={{ height: '22px' }} />
      <img src="/assets/klanten/fundingteam.png" alt="Fundingteam" style={{ height: '90px' }} />
      <img src="/assets/klanten/motul.png" alt="Motul" style={{ height: '40px' }} />
      <img src="/assets/klanten/lassoo-ariaans.svg" alt="Lassoo Ariaans" style={{ height: '32px' }} />
      {/* ISS logo: herplaats als <img src="/assets/klanten/iss.png" alt="ISS" style={{ height: '38px' }} /> */}
      <img src="/assets/klanten/endeavour.webp" alt="Endeavour" style={{ height: '22px' }} />
      <img src="/assets/klanten/minerva.png" alt="Minerva Development" style={{ height: '22px' }} />
      <img src="/assets/klanten/tis.png" alt="TIS" style={{ height: '24px' }} />
    </>
  )

  return (
    <section className="klanten reveal">
      <div className="container">
        <div className="klanten-inner">
          <div className="klanten-label">Vertrouwd door</div>
          <div className="klanten-divider"></div>
          <div className="klanten-scroll">
            <div className="klanten-track">
              {logos}
              {logos}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
