import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/actions';

class ButtonComp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      getNews: this.props.getNews,
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.state.getNews} >
          Press to see news
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  getNews: getNews,
});

ButtonComp = connect(null, mapDispatchToProps)(ButtonComp);

export default ButtonComp;