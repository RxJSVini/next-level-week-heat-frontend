import React from 'react';
import styles from "./App.module.scss"
import "./styles/global.scss";

export const App: React.FC<{}> = () =>{
  return(
    <> 
      <main className={styles.contentWrapper}>
        <h1>Olá Mundo!</h1>
        
      </main>

    </>
  )

};