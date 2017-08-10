import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardsActions from './actions/cardsActions';
import Grid from './components/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    window.socket.on('change', (card) => {
      this.props.actions.update(card);
    });
  }

  render() {
    return (      
      <div className="app">
        <Grid cards={this.props.cards} />
      </div>
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