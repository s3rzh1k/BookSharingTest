import React from 'react'
import Owner from './Owner/Owner'
import './../Books/Books.scss'

export default class Owners extends React.Component {
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
                                this.sorted.owners.sort((a,b)=>(a.id-b.id))
                                this.setState (this.state)}}>↑ id</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.owners.sort((a,b)=>(b.id-a.id))
                                this.setState (this.state)}}>↓ id</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.owners.sort((a,b)=>(a.surname>b.surname?1:-1))
                                this.setState (this.state)}}>↑ Фамилия</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.owners.sort((a,b)=>(b.surname>a.surname?1:-1))
                                this.setState (this.state)}}>↓ Фамилия</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.owners.sort((a,b)=>(a.books.length-b.books.length))
                                this.setState (this.state)}}>↑ количество книг</li>
                            <li className="Sort--item" onClick={() => {
                                this.sorted.owners.sort((a,b)=>(b.books.length-a.books.length))
                                this.setState (this.state)}}>↓ количество книг</li>
                        </ul>
                    </div>
                    <div className="Finder">
                        <input type="text" placeholder={'Поиск по фамилии'} onInput={(event) => {
                            if (event.target.value !== '') {
                                this.sorted.owners = this.sorted.owners.filter(item => item.surname.toLowerCase().indexOf(event.target.value.toLowerCase(), 0) !== -1)
                                this.setState (this.state)
                            }
                            else {
                                this.sorted = JSON.parse(JSON.stringify(this.state))
                                this.setState (this.state)
                            }

                        }}/>
                    </div>
                </div>
                {this.sorted.owners.map((owner, index) => {
                    return(
                        <Owner key={index} id={owner.id}/>
                    )
                })}
            </div>
        )
    }
}
