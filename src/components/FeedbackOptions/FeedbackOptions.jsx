
import PropTypes from "prop-types";
import style from './feedbackOptions.module.css'

const FeedbackOptions =  ({options, onLeaveFeedback}) => {  
const element = options.map((el)=><button className={style.btn} key={el} onClick={()=> onLeaveFeedback(el)}>{el}</button>)
    return (
        <div>
           {element}
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
    options: []
}

FeedbackOptions.propTypes = {       
            options: PropTypes.array.isRequired, 
            onLeaveFeedback:PropTypes.func.isRequired,        
    
}