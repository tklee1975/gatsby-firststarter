import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
    <div>
        <div>Hello Gatsby</div>
        <nav>
            <Link to="/">Home</Link>
            | <Link to="/about">About</Link>
        </nav>
    </div>
)

export default IndexPage;