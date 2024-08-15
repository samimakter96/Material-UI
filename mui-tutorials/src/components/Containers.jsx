import { Container, Typography } from "@mui/material"


const Containers = () => {
  return (
    <>
      <Container sx={{backgroundColor: 'yellow'}} maxWidth="xs">
        <Typography variant="body2">This is extra small</Typography>
      </Container>
      <br />
      <Container sx={{backgroundColor: 'yellow'}} maxWidth="sm">
        <Typography variant="body2">This is  small</Typography>
      </Container>
      <br />
      <Container sx={{backgroundColor: 'yellow'}} maxWidth="md">
        <Typography variant="body2">This is medium</Typography>
      </Container>
      <br />
      <Container sx={{backgroundColor: 'yellow'}} maxWidth="lg">
        <Typography variant="body2">This is large</Typography>
      </Container>
      <br />
      <Container sx={{backgroundColor: 'yellow'}} maxWidth="xl">
        <Typography variant="body2">This is extra large</Typography>
      </Container>
    </>
  )
}

export default Containers