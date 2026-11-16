import { useNavigate } from 'react-router-dom'

export default function useScrollToSection() {
  const navigate = useNavigate()
  const goToSection = (id) => {
    navigate('/')

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      })
    }, 100)
  }

  return goToSection
}