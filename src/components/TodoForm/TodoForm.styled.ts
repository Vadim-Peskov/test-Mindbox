import { Box, styled } from "@mui/material";
import { colBorder } from "../../variables";

export const STodoForm = styled(Box)(({
  display: 'flex',
  gap: '14px',
  padding: '14px',
  borderBottom: `1px solid ${colBorder}`
}))