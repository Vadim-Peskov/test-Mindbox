import { CSSProperties, FC, ReactNode } from "react"
import { SContainer } from "./Container.styled"

type ContainerProps = {
  children: ReactNode
  style?: CSSProperties
}

export const Container: FC<ContainerProps> = ({style, children}) => {

  return (
    <SContainer style={style} >{children}</SContainer>
  )
}