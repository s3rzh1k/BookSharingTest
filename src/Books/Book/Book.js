import React from 'react'
import './Book.scss'
import {withRouter, NavLink} from 'react-router-dom'

const Book = props => {


    return(
    <div className="Book">
        <div className={'Book--header'}>
            <img src={props.img} alt="" className={'Book--img'}/>
            <div className={'Book--description'}>
                <div className="Book--name">
                    {props.name}
                </div>
                <div className="Book--author">
                    {props.author}
                </div>
                <div className="Book--year">
                    {props.year}
                </div>
            </div>
        </div>
        <div className="Book--padding">
            Подробнее
            <div className={'Book--block'}>
                <div className="Book--text">
                    {props.description}
                </div>
                <div className="Book--taken" onClick={() => props.history.push({
                    pathname: "/person",
                    state: {
                        name: props.taken.name,
                        surname: props.taken.surname,
                        img: props.taken.img,
                        books: props.books
                    }
                })}>
                    Владелец: {props.taken.name} {props.taken.surname}
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Book)
