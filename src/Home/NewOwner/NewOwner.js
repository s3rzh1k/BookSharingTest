import React, {useContext} from 'react'
import {AppContext} from '../../App'
import './../NewBook/NewBook.scss'

const NewOwner = props => {
    const value = useContext(AppContext)
    const submitHandler = e => {
        e.preventDefault()
        let file = e.target[3].files[0]
        let img = '/img/owners/' + file.name
        let books = e.target["books"].value.split(' ')
        const owner = {
            id: value.owners.length + 1,
            name: e.target["name"].value,
            surname: e.target["surname"].value,
            books: books,
            img: img,
        }
        value.owners.push(owner)
        props.history.push('/owners')
    }
    return(
        <div className="NewBook">
            <form className="NewBook--form" onSubmit={submitHandler} action="#">
                <input type="text" name="name" placeholder="Имя"/>
                <input type="text" name="surname" placeholder="Фамилия"/>
                <input type="text" name="books" placeholder="id книг через пробел"/>
                <input type="file" name="file" />
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}

export default NewOwner