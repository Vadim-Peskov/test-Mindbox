import { FC, ReactNode } from "react"
import { SAppBg, SAppBgWrap } from "./AppBg.styled"

interface AppBgProps {
  children: ReactNode
}

export const AppBg: FC<AppBgProps> = ({ children }) => {

  return (
    <SAppBgWrap>
      <SAppBg>
        {children}
      </SAppBg>
    </SAppBgWrap>
  )
}