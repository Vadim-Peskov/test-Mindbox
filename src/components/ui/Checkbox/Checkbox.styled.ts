import { styled, Checkbox } from "@mui/material";
import { colorActive1, colTextDisable } from "../../../variables";

export const SCheckbox = styled(Checkbox)(({
  display: 'inline-flex',
  width: '20px',
  maxWidth: '20px',
  height: '20px',
  borderRadius: '3px',

  '&.MuiCheckbox-root': {
    color: colTextDisable
  },

  '&.Mui-checked': {
    color: colorActive1,
  },

}))