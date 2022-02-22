import Notification from 'shared/Notification'
import PropTypes from "prop-types";
import style from './statistics.module.css'


const Statistics =  (props) => {
    const {good, neutral, bad, total, positivePercentage} = props
    console.log(total)
    return (
        (total>0)?(
            <div>
            <ul className={style.statList}>
                <li>
                    <p>good: {good}</p>
                </li>
                <li>
                    <p>neutral: {neutral}</p>
                </li>
                <li>
                    <p>bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive Feedback: {Number.parseInt(positivePercentage)}%</p>
                </li>
            </ul>
                    </div>
                ) : (<Notification message="There is no feedback"></Notification>)
    )
}


Statistics.propTypes = {       
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,    
}

export default Statistics;