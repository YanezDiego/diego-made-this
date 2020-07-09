import React from "react"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"
import { Button, Container, Grid } from "@material-ui/core"
import Contact from "./contact"

import { Link } from "gatsby"

const Intro = () => (
  <>
    {/* <Container maxWidth="sm"> */}
    {/* <Grid container
                spacing={6}
                alignContent="center"
                direction="column"
                justify="center"
                alignItems="flex-end"
                
            > */}
    {/* <Grid item xs sm md lg xl> */}
    <div
      className="container"
      //  css={css`
      //     padding: 25%  0.5rem 0.04rem;
      //     maxWidth: 100%
      //  `}
    >
      <Fade>
        <h1
          css={css`
            font-family: "Merriweather", serif, "Open Sans", sans - serif,
              "Oswald", sans - serif, "Pacifico", cursive, "Josefin Slab", serif,
              "Francois One", sans - serif;
          `}
        >
          Welcome, My Name is Diego
        </h1>
        <p>
          <span role="img">🗽</span> NYC is my home.
        </p>
        <p>
          <span role="img">👨‍💻</span> <b>Coding</b> feels like living in NYC.
        </p>

        <Button variant="contained" orientation="center" color="primary">
          <Link
            to="/project"
            css={css`
              text-decoration: none;
              color: white;
            `}
          >
            Projects
          </Link>
        </Button>
      </Fade>
      <Contact />
    </div>

    {/* </Grid> */}

    {/* </Grid> */}
    {/* </Container> */}
  </>
)

export default Intro
