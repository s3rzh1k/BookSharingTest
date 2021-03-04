import React,{useContext} from 'react'
import './Book.scss'
import {withRouter} from 'react-router-dom'
import {AppContext} from '../../App'
import Rating from './Rating/Rating'
const Book = props => {

    const value = useContext(AppContext)
    const book = value.select[props.id-1]
    return(
    <div className="Book">
        <div className={'Book--header'}>
            <img src={book.img} alt="" className={'Book--img'}/>
            <div className={'Book--description'}>
                <div className="Book--name">
                    {book.name}
                </div>
                <div className="Book--author">
                    {book.author}
                </div>
                <div className="Book--year">
                    {book.year}
                </div>
            </div>
        </div>
        <Rating id={book.id}/>
        <div className="Book--padding">
            Подробнее
            <div className={'Book--block'}>
                <div className="Book--text">
                    {book.description}
                </div>
                <div className="Book--taken" onClick={() => props.history.push('/owners/'+value.owners[book.taken-1].id)}>
                    Владелец: {value.owners[book.taken-1].name} {value.owners[book.taken-1].surname}
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Book)


