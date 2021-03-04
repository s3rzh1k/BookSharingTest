import React,{useContext} from 'react'
import {AppContext} from '../../../../App'

const Stats = props => {
    const value = useContext(AppContext)
    return(
        <div>
            {value.select[props.id-1].avg.toFixed(1)}
        </div>
    )
}

export default Stats