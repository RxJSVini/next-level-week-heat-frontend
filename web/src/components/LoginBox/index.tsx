  import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";

import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";



function LoginBox(){
  const { signInUrl } = useContext(AuthContext)

    return(
        <>
          <div className={styles.loginWrapper}>
            <strong>Entre e participe</strong>

            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="20"/>
                Entrar com o Github
            </a>

          </div>
        
        </>
    )
}
export { LoginBox };