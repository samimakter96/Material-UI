import { AppBar, Button, Typography, Toolbar, Tabs, Tab } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [value, setValue] = useState(0)
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">LOGO</Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          value={value}
          onChange={(e, val) => setValue(val)}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
