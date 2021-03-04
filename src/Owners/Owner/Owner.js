import React,{useContext} from 'react'
import './Owner.scss'
import {withRouter} from 'react-router-dom'
import {AppContext} from '../../App'

const Owner = props => {
    const value = useContext(AppContext)
    const owner = value.owners[props.id-1]
    return(
        <div className={'Owner'}>
            <div className="Owner--image">
                <img src={owner.img} alt="" className="Owner--img"/>
            </div>
            <div className="Owner--description">
                <div className="Owner--name">
                    <div className={'Owner--href'} onClick={() => props.history.push('/owners/'+ props.id)}><span className={"Owner--firstname"}>{owner.name}</span><br/><span className={"Owner--surname"}>{owner.surname}</span></div>
                    <div className="Owner--books">
                        Количество книг: <strong>{owner.books.length}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Owner)