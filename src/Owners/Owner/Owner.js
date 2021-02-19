import React from 'react'
import './Owner.scss'
import {withRouter, NavLink} from 'react-router-dom'

const Owner = props => {
    return(
        <div className={'Owner'}>
            <div className="Owner--image">
                <img src={props.img} alt="" className="Owner--img"/>
            </div>
            <div className="Owner--description">
                <div className="Owner--name">
                    <div className={'Owner--href'} onClick={() => props.history.push({
                        pathname: "/person",
                        state: {
                            name: props.name,
                            surname: props.surname,
                            img: props.img,
                            books: props.books
                        }
                    })}><span className={"Owner--firstname"}>{props.name}</span><br/><span className={"Owner--surname"}>{props.surname}</span></div>
                    <div className="Owner--books">
                        Количество книг: <strong>{props.books.length}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Owner)