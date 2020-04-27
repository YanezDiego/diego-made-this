import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = () => (
  <div className="project">
    <Layout>
      <SEO title="Project" />
      <section>
      <h2>Project(s) in the pipeline <span role="img">🚧</span>:</h2>
      <h3>Stay tuned for my Latest Project I0no</h3>
      <p>
      A Fullstack <b>M.E.R.N</b> application made for people who want to learn new things and people eager to teach.
      I0no offers a place for people to connect and receive lessons in any topic they would like from anyone in the world
      who is willing to teach. This is meant to help individuals who's reach cannot go beyond their local coffee shops.
      </p>
      </section>


      <section>
      <h2>Completed Project(s)</h2>
        <h3>
          Readus
        </h3>
          <p>
            Readus is a Fullstack application using React, Readux on the Frontend and PostgreSQL
            and Rails on the Backend. Utilizing the NYT API to gather the top stories, most shared stories and movie reviews.
            This application is meant for the person on the go who only has time to read a quick synopses on an article.
          <span>
            <a css={css`
            text-decoration: underline;
            color: black;
            padding-left: 2.5px;
          `} href='https://github.com/YanezDiego/Readus-v2-Client' target="_blank"> 
          Take a look at the GH <FontAwesomeIcon icon={faCode}/>
          </a>
        </span>
        </p>
      </section>

      <Link css={css`
          text-decoration: none;
          text-colot: black;
      `} to="/">&larr; Go back to the homepage</Link>
    </Layout>
  </div>
)

export default Project
