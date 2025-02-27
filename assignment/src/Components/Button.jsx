import PropTypes from 'prop-types';
import './../index.css';

const Button = ({ textContent, style={} }) => {
  return (
    <div className='flex relative justify-center items-center hover:cursor-pointer'>
      <svg width={`${style.width ? style.width : "150"}`} height={`${style.height ? style.height : "53"}`} viewBox="0 0 150 53" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
          fill='#D9D9D9' fillOpacity="0.05" stroke='#B026FF' />
        <path d='M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z'
          stroke='#B026FF' strokeWidth="0.7" fillOpacity="0.05"/>
      </svg>
      <p className={`absolute text-white ${style.fontStyle ? style.fontStyle : "font-Proxon"} font-normal ${style.fontSize ? style.fontSize : "text-base"} text-center
       ${style.dropShadow ? style.dropShadow : ""}`}>{textContent}</p>
    </div>
  );
}

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Button;
