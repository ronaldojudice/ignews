import {FaGithub} from 'react-icons/fa';
import styles from './styles.module.scss';
import {FiX} from 'react-icons/fi';


export function SignInButton(){
  const isUserLoggedIn = true;
return isUserLoggedIn ?(
  <button type="button" className={styles.signInButton}> 

  <FaGithub color="#04d361" />
  Sing in with GitHub
  <FiX color="#737380" className={styles.closeIcons} />
  </button>

):(
  <button type="button" className={styles.signInButton}> 

  <FaGithub color="#eba417"/>
  Ronaldo Júdice
  </button>
);
}