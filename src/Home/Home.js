import React from "react";
import './Home.scss'
import {NavLink} from 'react-router-dom'


const Home = () => {
    return(
        <div className={'Home'}>
            <div className="Home--upperHeader">
                Добро пожаловать
            </div>
            <div className="Home--lowerHeader">
                в Book-Sharing!
            </div>
            <div className="Home--text">
                Это приложение для обмена книгами среди пользователей
            </div>
            <NavLink to="/NewBook" exact><button className="Home--button">Новая книга</button></NavLink>
            <NavLink to="/NewOwner" exact><button className="Home--button">Новый пользователь</button></NavLink>
        </div>
    )
}

export default Home