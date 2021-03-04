import React from 'react'
import './App.scss';
import Books from './Books/Books'
import Owners from './Owners/Owners'
import Profile from './Profile/Profile'
import Home from "./Home/Home"
import NewBook from "./Home/NewBook/NewBook"
import NewOwner from "./Home/NewOwner/NewOwner"
import {NavLink, Route} from 'react-router-dom'

export const AppContext = React.createContext(1)

export default class App extends React.Component {
    state = require('./data.json')


    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div>
                    <nav className={'Nav'}>
                        <h1><NavLink to="/" exact>Book-Sharing</NavLink></h1>
                        <h1><NavLink to="/books">Книги</NavLink></h1>
                        <h1><NavLink to="/owners">Пользователи</NavLink></h1>
                    </nav>
                    <div className="container">
                        <Route path="/" exact component={Home} />
                        <Route path="/books" render={(props)=><Books state={this.state} {...props}/>} />
                        <Route path="/owners" exact render={(props)=><Owners state={this.state} {...props}/>} />
                        <Route path="/owners/:id" exact component={Profile} />
                        <Route path="/NewBook" exact component={NewBook} />
                        <Route path="/NewOwner" exact component={NewOwner} />

                    </div>
                </div>
            </AppContext.Provider>
        )
    }
}
