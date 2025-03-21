import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../../redux/slices/formFilterSlice'
import { StyledContainer, StyledInput, StyledText } from './Filter.styles'

export default function Filter({ type = false }) {
  const [currFilter, setCurrFilter] = useState({
    sort: 'default',
    priceMin: null,
    priceMax: null,
    checked: type,
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateFilter(currFilter))
  }, [])

  const handleChange = field => e => {
    const value = field === 'checked' ? e.target.checked : e.target.value
    const updatedFilter = { ...currFilter, [field]: value }
    setCurrFilter(updatedFilter)
    dispatch(updateFilter(updatedFilter))
  }

  return (
    <StyledContainer style={{ gap: '40px', marginBottom: '40px' }}>
      <StyledContainer>
        <StyledText>Price</StyledText>
        <StyledInput
          type='number'
          placeholder='from'
          min='0'
          onChange={handleChange('priceMin')}
        />
        <StyledInput
          type='number'
          placeholder='to'
          min='0'
          onChange={handleChange('priceMax')}
        />
      </StyledContainer>
      <StyledContainer>
        <StyledText>Discounted items</StyledText>
        <Checkbox
          checked={currFilter.checked}
          onChange={handleChange('checked')}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 40 },
          }}
        />
      </StyledContainer>
      <StyledContainer>
        <StyledText>Sorted</StyledText>
        <Box>
          <FormControl sx={{ width: 200, marginBottom: '8px' }} size='small'>
            <Select value={currFilter.sort} onChange={handleChange('sort')}>
              <MenuItem value='default'>By default</MenuItem>
              <MenuItem value='newest'>Newest</MenuItem>
              <MenuItem value='high-low'>Price: high-low</MenuItem>
              <MenuItem value='low-high'>Price: low-high</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </StyledContainer>
    </StyledContainer>
  )
}
