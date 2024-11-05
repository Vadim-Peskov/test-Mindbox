import { FC } from "react"
import { SInput, SInputContainer } from "./TodoInputStyled"
import { TextFieldProps } from "@mui/material"

interface TodoInputProps extends TextFieldProps<'standard'>{
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const TodoInput: FC<TodoInputProps> = ({ inputValue, setInputValue, ...textFieldProps }) => {

  return (
    <SInputContainer>
      <SInput
        margin="none"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...textFieldProps}
      />
    </SInputContainer>
  )
}