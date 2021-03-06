import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import todoList from "../assets/images/portfolio/todoList.png";
import newTodoList from "../assets/images/portfolio/newTodoList.png";
import pokedex from "../assets/images/portfolio/pokedex.png";
import twitter from "../assets/images/portfolio/twitter.png";


const Portfolio = () => (
  <section id="portfolio">
    <div className="row"> 
      <div className="twelve columns collapsed">
        <h1>cliquez pour accéder à mes projets.</h1>

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://zya04.github.io/my-todo-list/" title="">
                <img alt="project todolist" src={todoList} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Todo-list</h5>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://zyo-new-todo-list.surge.sh/" title="">
                <img alt="project newtodolist" src={newTodoList} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>New todo-list</h5>
                    <p>ReactJS</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://zya04.github.io/pokedex/" title="">
                <img alt="project pokedex" src={pokedex} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Pokedex</h5>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
