import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  const courses = ["react", "node js", "mongo db", "next js", "css"];

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((course) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <br />

      {/* <Snackbar open={true} autoHideDuration={2000}>
        <Alert severity="success">This Alert in Snackbar</Alert>
      </Snackbar> */}

      {/* Loading effect */}
      {/* <CircularProgress color="secondary" value={75}/> */}

      <Rating value={value} onChange={(e, val) => setValue(val)} size="large" precision={0.5}/>
      <Typography>Rated {value !== undefined ? value : 0} stars</Typography>
    </div>
  );
};

export default DrawerMenu;
