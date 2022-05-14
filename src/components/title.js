import React from 'react'
import * as styles from './title.module.scss'

/**
 * props -> <Title title="xx" subTitle="xx" />
 */
const Title = (props) => (
    <section className={styles.container}>
        <h1 className={styles.title}>{props.title}</h1>
        {
            props.subTitle !== undefined &&                 
            <div className={styles.subtitle}>"{props.subTitle}"</div>
        }
        
    </section>
)
export default Title;