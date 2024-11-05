import { FC } from "react"
import { SButton } from "./Button.styled"
import { ButtonProps } from "@mui/material"

interface ButtonsProps extends ButtonProps {
  text: string
  isActive?: boolean
  handleClick: (...args: any[]) => void;
}

export const Button: FC<ButtonsProps> = ({ text, isActive, handleClick, ...buttonProps }) => {

  return (
    <SButton
      isActive={isActive}
      onClick={handleClick}
      {...buttonProps}
    >{text}
    </SButton>
  )
}