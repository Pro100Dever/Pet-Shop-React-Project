import { useEffect, useState } from 'react'
import { StyledBtn } from './AnyButton.styles'

export default function AnyButton({
  text,
  activeText = '',
  width = '100%',
  type = null,
  succesForBtn = false,
}) {
  const [currentText, setCurrentText] = useState(text)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      const id = setTimeout(() => {
        setCurrentText(text)
        setIsActive(false)
      }, 500)

      return () => clearTimeout(id)
    }
  }, [isActive, text])

  function handleClick() {
    if (succesForBtn) {
      setIsActive(true)
      if (activeText) {
        setCurrentText(activeText)
      }
    }
  }

  return (
    <StyledBtn
      width={width}
      type={type}
      className={isActive ? `active` : ''}
      onClick={handleClick}
    >
      {currentText}
    </StyledBtn>
  )
}
