import css from "./Button.module.css"
import PropTypes from 'prop-types'

export const Button = ({ onAddImg }) => {
  return <button className={css.buttonAdd} onClick={onAddImg}>Load more</button>;
};

Button.propTypes={
  onAddImg: PropTypes.func.isRequired
}