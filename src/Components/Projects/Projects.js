import React, { createContext, useState } from "react";
import Modal from "./Modal";
import styles from "./Projects.module.css";

export const ModalContext = createContext();

function Projects() {
  const links = {
    html: ["tuoitrevn24h.ga"],
    js: ["vietkhanhvn.ddns.net"],
    PHP: ["khanhdev.ddns.net"],
  };
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState();
  const handleModal = (e) => {
    setModal(!modal);
    const href = e.target.closest("." + styles.item);
    if (href) {
      setLink(links[href.dataset.link]);
    }
  };
  const value = {
    modal,
    handleModal,
  };
  return (
    <ModalContext.Provider value={value}>
      <section className="section" id="projects">
        <header className="section__heading">
          <p className="section__desc">My Products</p>
          <h2 className="section__title">Projects</h2>
        </header>
        <div className={styles.list}>
          <div onClick={handleModal} className={styles.item} data-link="html">
            <h3 className={styles.title}>HTML/CSS</h3>
            <span className={styles.icon}>
              <i className="fa-solid fa-folder" />
            </span>
          </div>
          <div onClick={handleModal} className={styles.item} data-link="js">
            <h3 className={styles.title}>JS</h3>
            <span className={styles.icon}>
              <i className="fa-solid fa-folder" />
            </span>
          </div>
          <div onClick={handleModal} className={styles.item} data-link="PHP">
            <h3 className={styles.title}>PHP</h3>
            <span className={styles.icon}>
              <i className="fa-solid fa-folder" />
            </span>
          </div>
        </div>
        {modal && <Modal links={link} />}
      </section>
    </ModalContext.Provider>
  );
}

export default Projects;
