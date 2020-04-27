import React, { useState }  from 'react'
import { css } from '@emotion/core'
import Fade from 'react-reveal/Fade'
import { Button } from '@material-ui/core'


import {Link} from 'gatsby'

const Intro = () => 

    (
        
            <div className='intro'>
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
            <div css={css`
                padding: 0 8vw 0 8vw;
            `}>
            <Button variant='contained' orientation="center" color="primary">
            <Link to='/project' 
                css={css`
                    text-decoration: none;
                    color:white;
                `}>Project</Link></Button>
            </div>
            
            </div>
        
    )



export default Intro