

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/ProjetDetails?projets_id=${projet_id}`)
    const projet = await data.json();



    console.log(membre)
    return {
        props: {projet, membre}

    }
}
