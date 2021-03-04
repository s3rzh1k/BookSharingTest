import React, {useContext} from 'react'
import {AppContext} from '../../App'
import './NewBook.scss'

const NewBook = props => {
    const value = useContext(AppContext)
    const submitHandler = e => {
        e.preventDefault()
        let file = e.target[5].files[0]
        let img = '/img/books/' + file.name
        const book = {
            id: value.select.length + 1,
            name: e.target["name"].value,
            author: e.target["author"].value,
            year: parseInt(e.target["year"].value),
            img: img,
            description: e.target["description"].value,
            taken: parseInt(e.target["owner"].value),
            counter: 0,
            avg: 0
        }
        value.select.push(book)
        value.owners[book.taken - 1].books.push(book.id)
        props.history.push('/books')
    }
    return (
        <div  className="NewBook">
            <form className="NewBook--form" onSubmit={submitHandler} action="#">
                <input type="text" name="name" placeholder="Название"/>
                <input type="text" name="author" placeholder="Автор"/>
                <input type="number" name="year" placeholder="Год"/>
                <textarea name="description" placeholder="Описание"/>
                <input type="number" name="owner" placeholder="id владельца"/>
                <input type="file" name="file" />
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}

export default NewBook
