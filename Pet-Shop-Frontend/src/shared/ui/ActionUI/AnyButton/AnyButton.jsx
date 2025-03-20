import { useEffect, useState } from 'react'
import { StyledBtn } from './AnyButton.styles'

export default function AnyButton({
  handleAddClick,
  text,
  activeText = '',
  width = '100%',
  type = null,
  succesForBtn = false,
  absolute = null,
}) {
  const [currentText, setCurrentText] = useState(text)
  const [isActive, setIsActive] = useState(false)
  function handleClick() {
    if (handleAddClick) {
      handleAddClick()
    }

    if (succesForBtn) {
      setIsActive(true)
      setCurrentText(activeText || text)

      setTimeout(() => {
        setCurrentText(text)
        setIsActive(false)
      }, 500)
    }
  }

  useEffect(() => {
    if (succesForBtn) {
      setIsActive(true)
      setCurrentText(activeText || text)

      const timeoutId = setTimeout(() => {
        setCurrentText(text)
        setIsActive(false)
      }, 500)

      return () => clearTimeout(timeoutId)
    }
  }, [succesForBtn])

  return (
    <StyledBtn
      width={width}
      type={type}
      className={isActive ? `active` : ''}
      absolute={absolute}
      onClick={handleClick}
    >
      {currentText}
    </StyledBtn>
  )
}
