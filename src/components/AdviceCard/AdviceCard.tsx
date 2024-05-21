import './AdviceCard.scss'
import { useEffect, useState } from 'react'

function getImageUrl(name: string) {
  return new URL(`../../assets/${name}`, import.meta.url).href
}

interface Advice {
  id: number
  advice: string
}

export const AdviceCard = () => {
  const [advice, setAdvice] = useState<Advice>({ id: 0, advice: '' })

  async function fetchAdvice(): Promise<Advice> {
    const response = await fetch('https://api.adviceslip.com/advice')
    const { slip } = (await response.json()) as { slip: Advice }

    return slip
  }

  async function handleFetchAdvice() {
    const advice = await fetchAdvice()
    setAdvice(advice)
  }

  useEffect(() => {
    void handleFetchAdvice()
  }, [])

  return (
    <div className="advice">
      <div className="advice__id">Advice #{advice.id}</div>
      <div className="advice__text">{advice.advice}</div>
      <div className="advice__separator" />
      <button type="button" className="advice__btn" onClick={handleFetchAdvice}>
        <img src={getImageUrl('icon-dice.svg')} alt="Refresh" />
      </button>
    </div>
  )
}
