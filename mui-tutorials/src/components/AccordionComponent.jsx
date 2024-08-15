import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

const AccordionComponent = () => {
  const courses = ["react", "node js", "js", "next js"];

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography variant="h6">What is Material UI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore
            libero aperiam id laboriosam, veniam fugit perspiciatis ad repellat
            laborum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* autocomplete component */}
      <Autocomplete
        sx={{ width: 200 }}
        options={courses}
        renderInput={(params) => (
          <TextField {...params} label="Select a course" />
        )}
      />
      <br />
      <br />
    </div>
  );
};

export default AccordionComponent;
