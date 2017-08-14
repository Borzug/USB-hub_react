import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, array } from 'prop-types';

import * as cardsActions from './actions/cardsActions';
import Grid from './components/Grid';

class App extends Component {
  static propTypes = {
    cards: array,
    actions: object.isRequired,
  }

  constructor(props) {
    super(props);
    window.socket.on('change', (card) => {
      this.props.actions.update(card);
    });    
  }

  render() {
    return (
      <Grid cards={this.props.cards} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cardsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);