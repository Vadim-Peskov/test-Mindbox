import { styled } from "@mui/material";
import { colBorder, colorActive1, colText1, colText2, colTextDisable } from "../../../variables";
import { TodoStatus } from "../../../types";

type STodoProps = {
  status: TodoStatus;
};


export const STodo = styled('li')<STodoProps>(({ status }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '18px 14px',
  fontSize: '18px',
  color: status === 'active' ? colText1 : colTextDisable,
  textDecorationLine: status === 'active' ? 'none' : 'line-through',
  borderBottom: `1px solid ${colBorder}`,
  cursor: 'pointer',
  transition: '0.15s',

  '&:hover': {
    background: 'rgba(189, 214, 241, 0.6);',
    transition: '0.15s',
  },

  '&:hover span': {
    border: status === 'completed' ? `1px solid ${colorActive1}` : `1px solid ${colText2}`
  },

  '&:last-child': {
    borderBottom: 'none'
  },

  // Стили MUI чекбокса
  
  '&:hover .MuiCheckbox-root': {
    border: 'none'
  },

  '&:hover .MuiCheckbox-root .MuiTouchRipple-root': {
    border: 'none',
  },
}))