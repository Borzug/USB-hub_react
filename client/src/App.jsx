import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, array, string } from 'prop-types';

import * as cardsActions from './actions/cardsActions';
import Grid from './components/Grid';

class App extends Component {
  static propTypes = {
    cards: array.isRequired,
    error: object.isRequired,
    actions: object.isRequired
  }

  constructor(props) {
    super(props);
    window.socket.on('change', (card) => {
      this.props.actions.update(card);
    });    
  }

  render() {
    return (
      <Grid 
        cards={this.props.cards}
        error={this.props.error}
       />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    cards: state.cards,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cardsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);