import PropTypes from 'prop-types';

function Card({
  name,
  pricetext,
  color,
  groupNumber,
  type
}) {
  return (
    <div className={['space', type].join(' ')}>
      <div className="container">
        {color !== '' && (<div className={['color-bar', color].join(' ')}></div>)}
        <div className="name">{name}</div>
        {(pricetext !== '') && (<div className="price">${pricetext}</div>)}
      </div>
    </div >
  )
}

Card.defaultProps = {
  name: '',
  pricetext: '',
  color: '',
  groupNumber: '',
  type: []
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  pricetext: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  groupNumber: PropTypes.string.isRequired,
  type: PropTypes.array.isRequired
};

export default Card