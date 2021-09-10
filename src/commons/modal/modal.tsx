import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { IProps } from "../../component/landing/landing.types";

export default function Modal({ setOpen, handleOpen }: IProps) {
  return (
    <Dialog
      open={true}
      onClose={handleOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <h2>Terms of Use</h2>
        <h3 style={{ fontWeight: "normal" }}>Shutterstock</h3>
        <li style={{ marginTop: "1%" }}>
          Content is for digital use within Wayne Hills Ventures only and may
          not be used for printing.
        </li>
        <li style={{ marginTop: "1%" }}>
          You may not use the content as a trademark for a business.
        </li>
        <li style={{ marginTop: "1%" }}>
          You may not portray a person in a way that may be offensive,
          including: in connection with adult-oriented services or ads for
          dating services; in connection with the promotion of tobacco products;
          in connection with political endorsements; with pornographic,
          defamatory, unlawful, offensive or immoral content; and as suffering
          from, or being treated for, a physical or mental ailment.
        </li>
        <li style={{ marginTop: "1%" }}>
          You may only use the content in campaigns and content created on Wayne
          Hills Ventures, and not with other website or content services.
        </li>
      </DialogContent>

      <DialogActions>
        <Button style={{ color: "black" }} onClick={handleOpen} autoFocus>
          Got it!
        </Button>
      </DialogActions>
    </Dialog>
  );
}
