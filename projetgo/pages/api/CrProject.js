import CreateProject from "../../CreateProject";
import styles from '../../../styles/Home.module.css';


export default function CrProject({Project}){

    return (

        <div id ="__next" className={styles.DivContainer}>
            {Project && (

                <>
                    <CreateProject ProjectCreate = {Project}/>
                </>
            )}
        </div>

    )

}

