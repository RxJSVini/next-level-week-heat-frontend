import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";

function LoginBox(){ 
    const signInUrl = ``;
    return(
        <>
          <div className={styles.loginWrapper}>
            <strong>Entre e participe</strong>
            <a href="#" className={styles.signInWithGithub}>
                <VscGithubInverted size="20"/>
                Entrar com o Github
            </a>

          </div>
        
        </>
    )
}
export { LoginBox };