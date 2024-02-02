import React from 'react';
import styles from "./FaqSection.module.css"
import BasicAccordion from '../Accordion/Accordion';

const faqs = [
    {
        heading: "How much is my case worth?"
    },
    {
        heading: "What should I do right after car accident"
    },
    {
        heading: "How much is my case worth?"
    }
]

function FaqSection() {
  return (
    <section style={{padding: "50px"}} >
        <h1 className={styles.faqHeading}>FAQ</h1>
        <div className={styles.faqWrapper}>
            <p>
            Amet minim mollit non deserunt ullamco est sit <br />
            aliqua dolor do amet sint. 
            </p>
            <div className={styles.accordions}>
                <div style={{paddingLeft: "20px"}}>
                    <h5 style={{marginBottom: "10px"}}>Do I need a personal injury report?</h5>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit <br />
                    aliqua dolor do amet sint. Velit officia consequatduis <br />
                    enim velit mollit Exer. Amet minim mollit non deserunt <br />
                    ullamco est sit aliqua dolor do amet sint. Velit officia <br />
                    consequatduis enim velit mollit Exer.
                    </p>
                </div>
                <hr/>

                {faqs.map((faq, index) => [
                    <BasicAccordion key={index} heading={faq.heading} />,
                    index < faqs.length - 1 && <hr key={`hr-${index}`} />
                ])}

                {/* {
                    faqs.map((faq) => <BasicAccordion heading={faq.heading} />) //without <hr> tag
                } */}
                
            </div>
        </div>
    </section>
  )
}

export default FaqSection;