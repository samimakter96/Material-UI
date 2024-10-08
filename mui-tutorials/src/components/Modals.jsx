import { Box, Button, Link, Modal, Typography } from "@mui/material";
import { useState } from "react";

const Modals = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>This is Modal</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            cancel
          </Button>
        </Box>
      </Modal>

      <Link variant="h6" color='secondary' underline="hover" href="https://www.google.com">Nav Link</Link>
    </div>
  );
};

export default Modals;
