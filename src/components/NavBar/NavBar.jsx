import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.primaryContainer}>
      <section className={style.secundaryContainer}>
        <div>
          <h1>imagen</h1>
        </div>
        <div className={style.listContainer}>
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
