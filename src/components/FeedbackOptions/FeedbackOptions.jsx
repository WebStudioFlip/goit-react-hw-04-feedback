import PropTypes from "prop-types";
import style from './feedbackOptions.module.css'

const FeedbackOptions =  (props) => {
  const  {options, onLeaveFeedback} = props
const element = Object.keys(options).map((el)=><button className={style.btn} key={el} onClick={()=> onLeaveFeedback(el)}>{el}</button>)
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
            options: PropTypes.object, 
            onLeaveFeedback:PropTypes.func,        
    
}