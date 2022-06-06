import styled from 'styled-components'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

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

const Navbar = () => {
    return (
        <Nav>
            <div className={styles.DivNav}>
                <Link href='/' passHref>
                    <Image>
                        <img className={styles.DivImageNav} src="/Image_Navbar/logoMoon.png" alt="nope"/>
                    </Image>
                </Link>
            </div>
            <div>
                <Link href='/' passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/About' passHref>
                    <StyledLink>About</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/Contact' passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar