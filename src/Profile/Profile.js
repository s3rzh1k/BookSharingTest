import React from 'react'
import './Profile.scss'
import Book from '../Books/Book/Book'
import Owner from '../Owners/Owner/Owner'

export default class Profile extends React.Component {
    render() {
        console.log(this.props)
        const state = this.props.location.state
        const taken = {
            name: state.name,
            surname: state.surname
        }
        return (
            <div className={'Profile'}>
                <Owner img={state.img} name={state.name} surname={state.surname} books={state.books}/>
                {state.books.map((book) => {
                    return(
                    <Book name={book.name} author={book.author} year={book.year} img={book.img} description={book.description} taken={taken}/>
                    )
                })}
            </div>
        )

    }
}