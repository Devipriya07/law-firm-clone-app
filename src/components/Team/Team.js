import React from 'react';
import danielDef from "../../assets/daniel def.png";
import sanfole from "../../assets/sanfole.png";
import cesforila from "../../assets/Cesforila.png";
import colleen from "../../assets/Colleen.png";
import haldone from "../../assets/Haldone.png";
import nikJeo from "../../assets/Nik Jeo.png"
import styles from "./Team.module.css";
import Card3 from '../Card3/Card3';


const teamMembers = [
    {
        name: "Danial Def",
        cases: 301,
        image: danielDef
    },
    {
        name: "Sanfole",
        cases: 850,
        image: sanfole
    },
    {
        name: "Cesforila",
        cases: 470,
        image: cesforila
    },
    {
        name: "Colleen",
        cases: 180,
        image: colleen
    },
    {
        name: "Haldone",
        cases: 212,
        image: haldone
    },
    {
        name: "Nik Jeo",
        cases: 350,
        image: nikJeo
    }
]

function Team() {
  return (
    <section className={styles.teamsSection} id='about-us'>
        <h1>Our Team</h1>
        <div className={styles.teamsWrapper}>
            {
                teamMembers.map((member) => <Card3 key={teamMembers.indexOf(member)} name={member.name} image={member.image} cases={member.cases} />)
            }
        </div>
    </section>
  )
}

export default Team;