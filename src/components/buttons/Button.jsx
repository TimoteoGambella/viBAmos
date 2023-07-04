import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({number,text,status,screen,child1,child2,child3}){
    return(
        <div className={
                `button
                ${number===1?"button1":number===2?"button2":number===3?"button3":number===4?"button4":"button5"}
                ${!status&&number!==3?"disabled":!status&&number===3?"specialDisabled":""}`
            }
            style={{cursor:screen==="desktop"?"pointer":"default"}}
        >
            {child1 && 
                <FontAwesomeIcon icon={faBars} size="xl"/>
            }
            {child2 && 
                <p className={screen==="mobile"?"font-mobile-14":"font-desktop-16"}>{text}</p>
            }
            {child3 &&
                <FontAwesomeIcon icon={faArrowRight} size="xl"/>
            }
        </div>
    )
}