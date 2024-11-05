import { Box, styled, Typography } from "@mui/material";
import { colBorder, colText2 } from "../../variables";

export const SNavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 8px',
  borderBottom: `1px solid ${colBorder}`,

  '& button[data-clear]': {
    order: 2,
  },

  [theme.breakpoints.up(700)]: {

    '& button[data-clear]': {
      order: 3,
    },
  }
}))

export const SActiveItemsCount = styled(Typography)(({
  padding: '0 14px',
  color: colText2,
  order: 1,
}))

export const SNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  order: 3,
  flex: '1 1 100%',
  gap: '8px',

  [theme.breakpoints.up(700)]: {
    flex: '0 0 auto',
  }
}))