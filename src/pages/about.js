import * as React from "react"
import {Link} from "gatsby"


const AboutPage = () => (
    <div style={{margin: '10px'}}>
    <h1>About Page</h1>
    <nav>
        <Link to="/">Home</Link> 
        | <Link to="/about">About</Link> 
    </nav>
    <br></br>
    <p>
    ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ipsum eu
    </p>
    </div>
)

export default AboutPage;