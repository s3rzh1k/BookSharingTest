import React from "react";
import './Home.scss'

const Home = () => {
    return(
        <div className={'Home'}>
            <div className="Home--uppertext">
                Добро пожаловать
            </div>
            <div className="Home--lowertext">
                в Book-Sharing!
            </div>
            <div className="Home--text">
                Это приложение для обмена книгами среди пользователей
            </div>
        </div>
    )
}

export default Home