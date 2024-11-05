import { styled } from "@mui/material";
import { bg1 } from "../../../variables";
import GirlImage from '../../../assets/girl.jpg'

export const SAppBgWrap = styled('div')(({
  width: '100%',
  height: '100vh',
  maxHeight: '100vh',
  background: bg1,
}))

export const SAppBg = styled('div')(({theme}) => ({
  maxWidth: '1920px',
  height: '100%',
  margin: '0 auto',
  overflowY: 'auto',

  [theme.breakpoints.up(1150)]: {
    background: `url(${GirlImage})`,
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '500px auto',
  },

  [theme.breakpoints.up(1600)]: {
    backgroundSize: '33% auto',
  },
}))