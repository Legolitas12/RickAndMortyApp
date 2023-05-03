import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.AboutCard}>
      <h1>Hola, mi nombre es Samuel Patiño.</h1>
      <p className={styles.AboutMe}>
        Actualmente soy programador especializandome en el area del front end
        donde estoy teniendo muy buenas capacidades de aprender el ambito de
        react y asi poder crecer cada dia mas como programador front end y muy
        pronto full stack developer cuando termine mi carrera de Full Stack
        Developer by SoyHenry. Actualmente ando trabajando en un proyecto muy
        comun en la comunidad de programadores que es el api de Rick and Morty
        donde alli me estoy especializando en el area a un 100% donde aca he
        aprendido mucho
      </p>
    </div>
  );
};

export default About;
