import { useEffect } from 'react'

interface GHLFormProps {
  formId: string
  formName: string
  height: number
}

export default function GHLForm({ formId, formName, height }: GHLFormProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://fc.future-growth.nl/js/form_embed.js'
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <iframe
      src={`https://fc.future-growth.nl/widget/form/${formId}`}
      style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '3px' }}
      id={`inline-${formId}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height={String(height)}
      data-layout-iframe-id={`inline-${formId}`}
      data-form-id={formId}
      title={formName}
    />
  )
}
