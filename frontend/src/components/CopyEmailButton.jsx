import { useState } from 'react'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('angelicahanley2@gmail.com')
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="contactButton"
      aria-live="polite"
    >
      {copied ? 'Email Copied!' : 'Contact Me!'}
    </button>
  )
}

export default CopyEmailButton