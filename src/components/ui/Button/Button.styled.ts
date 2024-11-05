import { styled } from "@mui/material";
import { colorActive1, colText2 } from "../../../variables";

type SButtonProps = {
  isActive?: boolean
} 

export const SButton = styled('button')<SButtonProps>(({isActive}) => ({
  minWidth: '84px',
  padding: '10px 16px',
  fontSize: '16px',
  color: isActive ? colorActive1 : colText2,
  background: 'none',
  border: isActive ? `1px solid ${colorActive1}` : `1px solid transparent`,
  borderRadius: '50px',
  cursor: 'pointer',
  transition: '0.15s',

  '&:hover': {
    color: colorActive1,
    border: `1px solid ${colorActive1}`,
    transition: '0.15s',
  }
}))