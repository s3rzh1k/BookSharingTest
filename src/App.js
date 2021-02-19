import React from 'react'
import './App.scss';
import Books from './Books/Books'
import Owners from './Owners/Owners'
import Profile from './Profile/Profile'
import Home from "./Home/Home";
import {NavLink, Route, Switch} from 'react-router-dom'

export default class App extends React.Component {
  state = {
    select: [
      {id: 1, name: 'Гарри Поттер и принц полукровка', author: 'Джоан Роулинг', year: 2005, img: '/img/books/harry.jpg', description: 'Шестая книга из серии романов Дж. К. Роулинг о волшебнике-подростке Гарри Поттере. В книге описывается шестой год обучения героев в Хогвартсе.', taken: 1},
      {id: 2, name: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', year: 1997, img: '/img/books/filcam.jpg', description: 'Первый роман в серии книг про юного волшебника Гарри Поттера, написанный Дж. К. Роулинг. В нём рассказывается, как Гарри узнает, что он волшебник, встречает близких друзей и немало врагов в Школе Чародейства и Волшебства «Хогвартс», а также с помощью своих друзей пресекает попытку возвращения злого волшебника Лорда Волан-де-Морта, который убил родителей Гарри.', taken: 1},
      {id: 3, name: 'Гарри Поттер и тайная комната', author: 'Джоан Роулинг', year: 1998, img: '/img/books/taikom.jpg', description: 'Второй роман в серии книг про юного волшебника Гарри Поттера, написанный Джоан Роулинг. Книга рассказывает о втором учебном годе в школе чародейства и волшебства Хогвартс.', taken: 2},
      // {name: 'Bbb', year: 35, img: '/img/harry.jpg'},
      // {name: 'Ccc', year: 31, img: '/img/harry.jpg'}
    ],
    owners: [
      {id:1, name: 'Евгений', surname: 'Залуцкий', books: [1,2], img: '/img/owners/1.jpg'},
      {id:2, name: 'Мария', surname: 'Бедросова', books: [3], img: '/img/owners/2.jpg'},
    ],
  }


  render() {
    return (
        <div>
          <nav className={'Nav'}>
            <h1><NavLink to="/" exact>Book-Sharing</NavLink></h1>
            <h1><NavLink to="/books">Книги</NavLink></h1>
            <h1><NavLink to="/owners">Пользователи</NavLink></h1>
          </nav>
          <div className="container">
              <Route path="/" exact component={Home} />
              <Route path="/person" component={Profile} />
              <Route path="/books" render={(props)=><Books state={this.state} {...props}/>} />
              <Route path="/owners" render={(props)=><Owners state={this.state} {...props}/>} />

          </div>
        </div>
    )
  }
}

