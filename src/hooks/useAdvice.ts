import { useCallback, useEffect, useState } from 'react'
import { Advice } from '../types'

export const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice>({ id: 0, advice: '' })

  async function fetchAdvice(): Promise<Advice> {
    const response = await fetch('https://api.adviceslip.com/advice')
    const { slip } = (await response.json()) as { slip: Advice }

    return slip
  }

  const handleFetchAdvice = useCallback(async (): Promise<void> => {
    const newAdvice = await fetchAdvice()
    setAdvice(newAdvice)
  }, [])

  useEffect(() => {
    void handleFetchAdvice()
  }, [handleFetchAdvice])

  return { advice, handleFetchAdvice }
}
