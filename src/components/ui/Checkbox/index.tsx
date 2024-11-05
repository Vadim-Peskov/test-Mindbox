import { FC } from "react"
import { SCheckbox } from "./Checkbox.styled"

interface CheckboxProps {
  checked: boolean
}

export const Checkbox: FC<CheckboxProps> = ({ checked }) => {

  return (
    <SCheckbox
      checked={checked}
      disableTouchRipple
    />
  )
}