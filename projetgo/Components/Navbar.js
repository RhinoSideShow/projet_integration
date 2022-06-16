import styled from 'styled-components'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import {useState} from "react";
import {useRouter} from "next/router";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0 2rem;
`;

const Image = styled.image`
  margin-right: 90rem;
`;

export default function Navbar({membre}) {

    const router = useRouter();
    const [show, setShow] = useState(true);

    //Fonction pour montrer l'image d'un utilisateur connecter
    const handleShow = () => {
        setShow(!show);
    }
    //Fonctionp pour aller a la home page
    const handleHomeButton = () => {
        return router.push('/post/membre/' + membre._id)
    }
    //Fonction pour editer les information du memebre connecter
    const handleParametresButton = () =>{
        return router.push('/'+membre._id+'/edit')
    }

    return (
        //Vue page
        <Nav>{/* Affichage de la bar de navigation*/}
            <div className={styles.NavContainer}>
                <div className={styles.NavContainerImg}>
                    <div className={styles.NavImg}>
                        {/*Retour a la home page reguliere pour non membre et personaliser pour membre*/}
                        {membre === undefined ? <Link href='/Homepage' passHref>
                                <Image>
                                    <img className={styles.DivImageNav} src="/Image_Navbar/logoMoon.png" alt="nope"/>
                                </Image>
                            </Link> :
                            <a onClick={handleHomeButton}>
                                <Image>
                                    <img className={styles.DivImageNav} src="/Image_Navbar/logoMoon.png" alt="nope"/>
                                </Image>
                            </a>}
                    </div>
                    <div className={styles.NavOption}>
                        <div className={styles.NavFlex}>
                            <div className={styles.NavComment}>
                                {/*Section comment ca marche*/}
                                <Link href='/CommentCaMarche' passHref>
                                    <StyledLink>Comment ça marche</StyledLink>
                                </Link>
                            </div>
                            {/*Section connexion pour un non membre ou image + parametre et deconnexion pour un membre connecte*/}
                            <div className={styles.NavDrop}>
                                {membre === undefined ? <Link href='/Sign_In' passHref>
                                        <StyledLink>
                                            <div className={styles.NavConnexion}>Connexion</div>
                                        </StyledLink>
                                    </Link> :
                                    <div className={styles.Dropdown}>
                                        <button className={styles.DropButton} onClick={handleShow}><img
                                            className={styles.DivImageNavUser} src="/Image_Navbar/user.png" alt="user"/>
                                        </button>
                                        <div style={show === true ? {display: 'none'} : {display: 'inline'}}>
                                            <div id="myDropdown" className={styles.DropdownContent}>
                                                <a onClick={handleParametresButton}>Paramètres</a>
                                                <a href="/">Déconnexion</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Nav>
    )
}