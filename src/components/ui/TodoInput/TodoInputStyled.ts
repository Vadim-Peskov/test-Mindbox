import { styled, TextField } from "@mui/material";
import { colText1 } from "../../../variables";

export const SInputContainer = styled('div')(({
  width: '220px',
  height: '40px',
}))

export const SInput = styled(TextField)(({
  width: '100%',
  margin: '0',
  borderRadius: '3px',

  ".MuiInputBase-root": {
    maxHeight: '40px',
  },

  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: '3px',
  },

  ".MuiInputBase-input": {
    height: '40px',
    padding: '0 14px',
    color: colText1,
  },

}))