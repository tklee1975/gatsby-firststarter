import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Title from "../components/title";

const AboutPage = () => (
    <Layout>
        <Title title="About" subTitle="Somethings about me"/>
        <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ipsum eu
        </p>
    </Layout>
)

export default AboutPage;