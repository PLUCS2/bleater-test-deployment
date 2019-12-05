import { connect } from 'react-redux';
import { addBleat, createBleat } from '../actions/bleat_actions';
import BleatForm from './bleat_form';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  // debugger;
  return {
    createBleat: (body) => dispatch(createBleat(body))
  }
}

// Key value pair, key: function in mdp, key: object in msp

//Connect wants two arguments: mapStateToProps and mapDispatchToProps
// One msp or mdp can be null
//msp - allow presentational to read what it needs to read 
//mdp - allow presentational to write what it needs to write 

export default connect(mapStateToProps, mapDispatchToProps)(BleatForm);