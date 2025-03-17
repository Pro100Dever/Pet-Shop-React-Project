import { useEffect, useState } from 'react'
import { StyledBtn } from './AnyButton.styles'

export default function AnyButton({
  text,
  activeText,
  width = '100%',
  type = null,
}) {
  const [currentText, setCurrentText] = useState(text)
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    setIsActive(true)
    setCurrentText(activeText)
  }

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrentText(text)
      setIsActive(false)
    }, 500)

    return () => clearTimeout(id)
  }, [handleClick])

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
