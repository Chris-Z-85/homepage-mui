import React from "react";
import { Container, Grid, Typography, Card } from "@mui/material";
import { Icon } from "@iconify/react";
import Heading from "./Heading";

const Skills = () => {
  const stack = [
    { name: "HTML", icon: "iconoir:html5" },
    { name: "CSS", icon: "iconoir:css3" },
    { name: "JavaScript", icon: "teenyicons:javascript-outline" },
    { name: "Node.js", icon: "fontisto:nodejs" },
    { name: "Express", icon: "simple-icons:express" },
    { name: "React", icon: "akar-icons:react-fill" },
    { name: "Redux", icon: "akar-icons:redux-fill" },
    { name: "Git", icon: "ion:git-branch-outline" },
    { name: "Github", icon: "akar-icons:github-outline-fill" },
    { name: "BEM Methodology", icon: "simple-icons:bem" },
    { name: "Sass", icon: "cib:sass-alt" },
    { name: "Styled Components", icon: "simple-icons:styledcomponents" },
    { name: "RESTful API", icon: "ant-design:api-outlined" },
    { name: "Contentful", icon: "simple-icons:contentful" },
    { name: "Postgres SQL", icon: "simple-icons:postgresql" },
    { name: "Command Line", icon: "bi:terminal" },
    { name: "VS Code", icon: "tabler:brand-visual-studio" },
    { name: "Figma", icon: "akar-icons:figma-fill" },
    { name: "Responsive Design", icon: "fluent:phone-desktop-16-regular" },
  ];

  const learning = [
    { name: "TypeScript", icon: "file-icons:typescript" },
    { name: "GraphQL", icon: "akar-icons:graphql-fill" },
    { name: "Vue.js", icon: "file-icons:vue" },
    { name: "Firebase", icon: "teenyicons:firebase-outline" },
    { name: "Tailwind", icon: "teenyicons:tailwind-outline" },
    { name: "Bootstrap", icon: "tabler:brand-bootstrap" },
    { name: "Framer Motion", icon: "feather:framer" },
    { name: "MongoDB", icon: "teenyicons:mongodb-outline" },
  ];
  return (
    <Container>
      <Heading title="Skills" subtitle="My powers" />
      <Typography textAlign="center" sx={{ marginBottom: "2rem" }}>
        The tools and technologies I use:
      </Typography>
      <Grid
        container
        gap="1rem"
        sx={{ display: "flex", justifyContent: "center", alignItem: "center" }}
        columns={{ lg: 12 }}
      >
        {stack.map((item, index) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              textAlign: "center",
              gap: "10px",
              padding: "5px",
            }}
          >
            <Icon
              icon={item.icon}
              inline={true}
              style={{ fontSize: "2rem" }}
              key={index}
            />
            {item.name}
          </Card>
        ))}
      </Grid>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        color="primary"
        sx={{ padding: "2rem" }}
      >
        Learning
      </Typography>
      <Typography textAlign="center" sx={{ marginBottom: "2rem" }}>
        I am currently expanding my skills by learning:
      </Typography>
      <Grid
        container
        gap="1rem"
        sx={{ display: "flex", justifyContent: "center", alignItem: "center" }}
      >
        {learning.map((item, index) => (
          <Grid item>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "120px",
                height: "120px",
                textAlign: "center",
                gap: "10px",
                padding: "5px",
              }}
            >
              <Icon
                icon={item.icon}
                inline={true}
                style={{ fontSize: "2rem" }}
                key={index}
              />
              {item.name}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
