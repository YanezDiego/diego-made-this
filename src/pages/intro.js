import React  from 'react'
import { css } from '@emotion/core'
import Fade from 'react-reveal/Fade'
import { Button, Container, Grid } from '@material-ui/core'
import Contact from "./contact"

import {Link} from 'gatsby'

const Intro = () => (
        
       <>
           <Container maxWidth="sm">
            {/* <Grid container xs={12} m={6} align="center" spacing={1} className="intro"> */}
            <Grid item xs={12}>
             <div className="text" css={css`
                padding: 29%  18px 1.5rem 4rem;
                maxWidth: 100%
             `}>
            <Fade>
               
                <h1 css={css`
                font-family: 
                'Merriweather', serif,
                'Open Sans', sans - serif,'Oswald', 
                sans - serif,'Pacifico', 
                cursive,'Josefin Slab', serif, 
                'Francois One', sans - serif;
                `}>Welcome, I am Diego</h1>
                <p>🗽 NYC is my home, <b>Coding</b> is my passion</p>
                
            </Fade>
            </div>
            <div css={css`
                   padding: 0px 16vw 1vw 13vw;
                    width: 100%;
            `}>
            <Button variant='contained' orientation="center" color="primary" >
            <Link to='/project' 
                css={css`
                    text-decoration: none;
                    color:white;
                `}>Projects</Link></Button>
            </div>
            </Grid>
            

            <Contact/>

            {/* </Grid> */}
            </Container>
        </> 
        
    )



export default Intro