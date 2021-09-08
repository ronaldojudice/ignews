import styles from './styles.module.scss';
import Image from 'next/image';
import logoIgnews from '../../../public/imagens/ignews.svg';
import {SignInButton} from '../SignInButton';


export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoIgnews} alt="ignews" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>       
          </nav>
          <SignInButton/>
      </div>
    </header>
  )
}