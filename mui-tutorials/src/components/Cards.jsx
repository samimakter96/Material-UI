import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card sx={{ maxWidth: 300, marginLeft: 5 }}>
        <CardMedia
          component={"img"}
          height={240}
          image="https://images.unsplash.com/photo-1722544078565-963a7e917ab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
          alt="sunflower"
        />
        <CardContent gutterBottom variant="h5" component="div">
          <Typography>Web Development</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            impedit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete this products?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cards;
