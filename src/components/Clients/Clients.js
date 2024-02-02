import React, { useState } from 'react';
import leftNavigation from "../../assets/left navigation.png";
import rightNavigation from "../../assets/right navigation.png";
import styles from "./Clients.module.css";
import janeCooper from "../../assets/jane cooper.png";
import devonLane from "../../assets/devon lane.png";
import robertFox from "../../assets/rober fox.png";
import Card2 from '../Card2/Card2';

const clients = [       //card2 component inserted here   
    {
        name: "Jane Cooper",
        image: janeCooper
    },
    {
        name: "Devon Lane",
        image: devonLane
    },
    {
        name: "Robert Fox",
        image: robertFox
    },
    {
        name: "Devon Lane",
        image: devonLane
    },
    {
        name: "Jane Cooper",
        image: janeCooper
    },
    {
        name: "Jane Cooper",
        image: janeCooper
    },
    {
        name: "Jane Cooper",
        image: janeCooper
    },
    {
        name: "Devon Lane",
        image: devonLane
    },
    {
        name: "Robert Fox",
        image: robertFox
    }

]


function Clients() {

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);

    const increaseIndex = () => {           //add new 3 or change all 3 on each click
        if(endIndex <= clients.length - 1) {  
            setStartIndex((prevInd) => prevInd + 3);
            setEndIndex((prevInd) => prevInd + 3);
        }
    }

    const decreaseIndex = () => {
        if(startIndex >= 3) {
            setStartIndex((prevInd) => prevInd - 3);
            setEndIndex((prevInd) => prevInd - 3);
        }
    }


  return (
    <section className={styles.clientsWrapper}>

        <div className={styles.clientsHeader}>
                <h1>What says our <br />happy Clients</h1>
                <div className={styles.clientsNavigation}>
                    <button className={styles.navigationBtn} onClick={decreaseIndex}>
                        <img width={20} src={leftNavigation} alt="left" />
                    </button>
                    <button className={styles.navigationBtn} onClick={increaseIndex}>
                        <img width={20} src={rightNavigation} alt="right" />
                    </button>
                </div>
        </div>
        <div className={styles.clients}>
            {
                clients.slice(startIndex, endIndex).map((client) => <Card2 name={client.name} image={client.image} />)
            }
        </div>
    </section>
  )
}

export default Clients;