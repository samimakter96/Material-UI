import { Typography } from "@mui/material";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Modals from "./components/Modals";
import Containers from "./components/Containers";
import ListsComponent from "./components/ListsComponent";
import AccordionComponent from "./components/AccordionComponent";
import DrawerMenu from "./components/DrawerMenu";
import ResponsiveGrid from "./components/ResponsiveGrid";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <Typography align="center" variant="h1" sx={{ color: "red" }}>
        Material UI
      </Typography> */}

      {/* <Form /> */}
      <div style={{marginTop: 100}}>
        {/* <Cards /> */}
        {/* <Modals /> */}
        {/* <Containers /> */}
        {/* <ListsComponent /> */}
        {/* <AccordionComponent /> */}
        {/* <DrawerMenu /> */}
        <ResponsiveGrid />
      </div>
    </>
  );
};

export default App;
