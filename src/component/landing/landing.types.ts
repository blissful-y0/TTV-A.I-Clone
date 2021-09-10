import { Dispatch, SetStateAction } from "react";

export type IProps = {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
};
