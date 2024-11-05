import { TypographyProps } from "@mui/material"
import { STodosTitle } from "./Title.styled"
import { FC } from "react"

interface TodosTitleProps extends TypographyProps {
  text: string
}

export const TodosTitle: FC<TodosTitleProps> = ({text, ...typographyProps}) => {

  return (
    <STodosTitle
      variant="h1"
      {...typographyProps}
    >{text}
    </STodosTitle>
  )
}