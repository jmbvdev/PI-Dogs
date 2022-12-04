import React from "react";
import { useDispatch } from "react-redux";
import { isDark } from "../redux/actions";
import s from "../styles/config.module.css";

const Config = ({ setConfig, setDogsPerPage, dark }) => {
  const dispatch = useDispatch();

  function onClose() {
    setConfig(false);
  }

  function handleChange(e) {
    e.preventDefault();
    setDogsPerPage(e.target.value);
  }
  function handleDark() {
    dispatch(isDark(dark));
  }

  return (
    <div className={s.container}>
      <div className={s.panel_container}>
        <div className={s.panel}>
          <button onClick={onClose} className={s.close}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className={s.dark}>
            <p>Dark mode</p>
            <button onClick={handleDark}>
              <i className="fa-solid fa-moon"></i>
            </button>
          </div>
          <div className={s.select}>
            <p>Dogs per page</p>
            <select name="dogsPerPage" onChange={handleChange}>
              <option value={8}>Dogs per page</option>
              <option value={4}>4 dogs</option>
              <option value={8}>8 dogs</option>
              <option value={12}>12 dogs</option>
            </select>
          </div>
          <div className={s.social}>
            <button>
              <a
                href="https://github.com/jmbvdev/PI-Dogs"
                target="_blanck"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/jmbv-dev"
                target="_blanck"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </button>
            <button>
              <a
                href="https://jmbv.netlify.app/"
                target="_blanck"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </button>
          </div>
          <p className={s.develop}>Develop by Juan Manuel Blanco</p>
        </div>
      </div>
    </div>
  );
};

export default Config;
