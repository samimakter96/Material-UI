import { Box, Typography } from "@mui/material";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media: (max-width:600px)": {
            mt: 0,
          },
        }}
      >
        <Typography variant="h4">Welcome to our restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          cumque expedita cupiditate autem, ullam voluptatibus repellat
          exercitationem voluptatum in rerum! Repudiandae ducimus harum, autem
          saepe in quibusdam quas deserunt voluptatem itaque? Odio ducimus cum
          obcaecati placeat eius delectus quis nobis omnis magnam cupiditate,
          similique consequuntur quas dicta minus, vel nam voluptatem est illum,
          ipsam eum. Corrupti, laboriosam? Sed ex aliquid qui consequuntur modi
          facere tenetur et eum culpa est quam, illo ad consequatur
          reprehenderit repellendus iure nulla repellat voluptas neque
          cupiditate nemo! Libero veniam maxime ipsa numquam asperiores in vero,
          omnis, consectetur dicta quam eius perspiciatis perferendis impedit
          fuga sapiente?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus
          natus, blanditiis, aspernatur magni ea, placeat voluptas officia
          nesciunt aliquid omnis neque! Officiis nesciunt vitae maxime nam eum
          praesentium sunt est ipsum, explicabo excepturi perferendis rem dicta,
          minima quaerat blanditiis? Aperiam et quas placeat nisi quia tempora
          saepe quis ea quam esse reprehenderit impedit perferendis vel eius
          cumque dolorem quidem aut, obcaecati ad sapiente numquam maxime
          molestiae? Quod dolores doloribus aperiam molestiae rerum illo quia
          tenetur iusto quam deleniti officiis a fuga optio velit, perferendis
          qui! Non, id, saepe incidunt aperiam doloribus error tenetur, minima
          excepturi corporis accusamus fugit rerum.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
