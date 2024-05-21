import './AdviceCard.scss'
import { useAdvice } from '../../hooks/useAdvice.ts'

export const AdviceCard = () => {
  const { advice, handleFetchAdvice } = useAdvice()

  return (
    <div className="advice">
      <div className="advice__id">Advice #{advice.id}</div>
      <div className="advice__text">{advice.advice}</div>
      <div className="advice__separator" />
      <button
        type="button"
        className="advice__btn"
        onClick={() => {
          void handleFetchAdvice()
        }}
      >
        <img src="/icon-dice.svg" alt="Refresh" />
      </button>
    </div>
  )
}
