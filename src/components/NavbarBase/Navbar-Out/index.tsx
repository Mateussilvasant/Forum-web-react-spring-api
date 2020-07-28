import React, { Fragment } from 'react';
import { FiSearch } from 'react-icons/fi';
import './index.css';

export const NavbarOutContent = () =>{
    return (
        <Fragment>
        <div className="search-content">
          <input
            alt="Pesquisar por título"
            type="text"
            id="searchTopico"
            placeholder="Pesquisar por título"
          />
          <button type="button">
            <FiSearch className="search-icon" />
          </button>
        </div>
        <ul>
          <li>
            <a className="buttonLink" href="/">
              Ranking
            </a>
          </li>
          <li>
            <a className="buttonLink" href="/">
              Tópicos
            </a>
          </li>
        </ul>
      </Fragment>
    );
}

export type NavbarOut = ReturnType<typeof NavbarOutContent>