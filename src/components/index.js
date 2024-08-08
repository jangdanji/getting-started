import { styled as muiStyled  } from '@mui/material/styles'
import { Input, Button } from '@mui/material'


// MUI
export const TextInput = (props) => {

const CustomInput = muiStyled(Input)({
  '&:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid black',
  },
  '&::after': {
    borderBottom: '2px solid black'
  },
})

  return (
    <CustomInput {...props} />
  )
}

// MUI
export const CustomButton = (props) => {
  return <Button sx={{color: "black", border: "1px solid black"}} {...props}>버튼</Button>
}


