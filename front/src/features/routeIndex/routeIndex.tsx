import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RouteIndex = () => {
  const navigate = useNavigate()

  useEffect(() => {
    toAboutPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toAboutPage = () => {
    navigate('/about')
  }

  return (
    <>
      <p>Loading...</p>
    </>
  )
}
