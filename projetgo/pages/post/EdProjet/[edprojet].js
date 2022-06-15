import styles from '../../../styles/Home.module.css';
import EditeurDeProjet from "../../EditeurDeProjet";

export default function ProjetEdit({projet}) {

    return (
        <div id="__next" className={styles.DivContainer}>
            {projet && (
                <>
                    <EditeurDeProjet projet={projet}/>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/ProjectDetails?client=${params.edprojet}`)
    const projet = await data.text();



    return {
        props: {projet,}
    }
}