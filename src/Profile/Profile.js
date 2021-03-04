import React,{useContext} from 'react'
import './Profile.scss'
import Book from '../Books/Book/Book'
import Owner from '../Owners/Owner/Owner'
import {AppContext} from "../App";

const Profile = props => {
    const value = useContext(AppContext)
    let id = props.match.params.id
    const books = value.owners[id-1].books

    return (
        <div className={'Profile'}>
            <Owner id={id}/>
            {books.map((book, index) => {
                return(
                    <Book key={index} id={book}/>
                )
            })}
        </div>
    )
}

export default Profile