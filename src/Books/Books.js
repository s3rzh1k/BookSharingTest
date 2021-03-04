import React from 'react'
import './Books.scss'
import Book from './Book/Book'

export default class Books extends React.Component {
    constructor(props) {
        super(props)
        this.sorted = JSON.parse(JSON.stringify(props.state))
        this.state = props.state
    }

    render() {
        return(
            <div>
                <div className="Sort">
                    <div className="Sort--header">
                        <span>Сортировать</span>
                        <ul className="Sort--list">
                            <li className="Sort--item" onClick={() => {
                                this.sorted.select.sort((a,b)=>(a.id-b.id))
                                this.setState (this.state)}}>↑ id</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.select.sort((a,b)=>(b.id-a.id))
                                this.setState (this.state)}}>↓ id</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.select.sort((a,b)=>(a.name>b.name?1:-1))
                                this.setState (this.state)}}>↑ название</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.select.sort((a,b)=>(b.name>a.name?1:-1))
                                this.setState (this.state)}}>↓ название</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.select.sort((a,b)=>(a.year-b.year))
                                this.setState (this.state)}}>↑ год</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.select.sort((a,b)=>(b.year-a.year))
                                this.setState (this.state)}}>↓ год</li>
                        </ul>
                    </div>
                    <div className="Finder">
                        <input type="text" placeholder={'Поиск'} onInput={(event) => {
                            if (event.target.value !== '') {
                                this.sorted.select = this.sorted.select.filter(item => item.name.toLowerCase().indexOf(event.target.value.toLowerCase(), 0) !== -1)
                                this.setState (this.state)
                            }
                            else {
                                this.sorted = JSON.parse(JSON.stringify(this.state))
                                this.setState (this.state)
                            }

                        }}/>
                    </div>
                </div>
                {
                    this.sorted.select.map((book, index)=> {
                        return(
                            <Book key={index} id={book.id}/>
                        )
                    })
                }
            </div>
        )
    }
}