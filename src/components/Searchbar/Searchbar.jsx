import { Component } from 'react';
import css from "./Searchbar.module.css";
import PropTypes from 'prop-types'


export class Searchbar extends Component {
  state = {
    searhValue: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ searhValue: value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    if(this.state.searhValue.trim() === ""){
        alert("Missing words")
        return
    }
    this.props.onSubmit(this.state.searhValue);
    this.setState({searhValue:""})
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.buttonSearch}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            value={this.state.searhValue}
            onChange={this.handleChange}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes={
  onSubmit: PropTypes.func.isRequired,
}