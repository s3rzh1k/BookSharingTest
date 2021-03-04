import React,{useContext} from 'react'
import {AppContext} from '../../../App'
import {BsFillStarFill} from 'react-icons/bs'
import Stats from './Stats/Stats'
import {Link} from 'react-router-dom'


const Rating = props => {
    const value = useContext(AppContext)
    const book = value.select[props.id-1]
    const rate = (num) => {
        book.avg = (book.avg * book.counter + num) / (book.counter + 1)
        book.counter += 1
    }

    return(
        <div>
            <div>
                <Link refresh="true">
                    <BsFillStarFill onClick={rate.bind(this, 1)}/>
                </Link>
                <Link refresh="true">
                    <BsFillStarFill onClick={rate.bind(this, 2)}/>
                </Link>
                <Link refresh="true">
                    <BsFillStarFill onClick={rate.bind(this, 3)}/>
                </Link>
                <Link refresh="true">
                    <BsFillStarFill onClick={rate.bind(this, 4)}/>
                </Link>
                <Link refresh="true">
                    <BsFillStarFill onClick={rate.bind(this, 5)}/>
                </Link>
            </div>
            <Stats id={props.id}/>

        </div>
    )
}

export default Rating

// export default class Rating extends React.Component {
//     value = this.context
//     book = this.value.select[this.props.id-1]
//         rate = (num) => {
//         this.book.avg = (this.book.avg * this.book.counter + num) / (this.book.counter + 1)
//         this.book.counter += 1
//         console.log(this.book)
//         this.forceUpdate()
//     }
//
//     render() {
//         return (
//             <AppContext.Consumer>
//                 <div className="Rating">
//                     <div className="Rating--stars">
//                         <BsFillStarFill onClick={() => {this.rate(1)
//                             console.log(this.book.avg)}}/>
//                         <BsFillStarFill onClick={this.rate(2)}/>
//                         <BsFillStarFill onClick={this.rate(3)}/>
//                         <BsFillStarFill onClick={this.rate(4)}/>
//                         <BsFillStarFill onClick={this.rate(5)}/>
//                         <Link to="" refresh="true">
//                             <span>Reload</span>
//                         </Link>
//
//                     </div>
//                     <Stats id={this.props.id}/>
//                 </div>
//             </AppContext.Consumer>
//         )
//     }
//
//
// }

