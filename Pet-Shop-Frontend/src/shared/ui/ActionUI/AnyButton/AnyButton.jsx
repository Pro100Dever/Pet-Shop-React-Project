import { useEffect, useState } from 'react'
import { StyledBtn } from './AnyButton.styles'

export default function AnyButton({
  text,
  activeText = '',
  width = '100%',
  type = null,
  succesForBtn = false,
  absolute = null,
}) {
  const [currentText, setCurrentText] = useState(text)
  const [isActive, setIsActive] = useState(false)

  function getChexk() {
    if (succesForBtn) {
      setIsActive(true)
      if (activeText) {
        setCurrentText(activeText)
      }
    }
  }

  function handleClick() {
    getChexk()
  }
  useEffect(() => {
    getChexk()
  }, [succesForBtn, activeText])

  useEffect(() => {
    if (isActive) {
      const id = setTimeout(() => {
        setCurrentText(text)
        setIsActive(false)
      }, 500)

      return () => clearTimeout(id)
    }
  }, [isActive, text])

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
