import React from 'react';
import { connect } from 'react-redux';
import img from '../../spinner.gif'

class LoadingComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.state = {
      ...this.state,
      loading: this.props.loading,
    };

    return (
        this.state.loading ?
        <div style={{ textAlign: 'center' }}> 
          <img src={img} alt={this.state.loading}/>
          <h1> 
            Loading ...
          </h1>
        </div> :
        null
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

LoadingComp = connect(mapStateToProps, null)(LoadingComp);

export default LoadingComp;