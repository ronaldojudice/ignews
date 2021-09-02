import styles from './styles.module.scss';


/* eslint-disable @next/next/no-img-element */
export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/public/imagens/ignews.svg" alt="ignews" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <button className="SignIn">

          </button>
        </nav>
      </div>
    </header>
  )
}