import { connect } from 'react-redux';
import BleatIndex from './bleat_index';
import { fetchBleats } from '../actions/bleat_actions'; 

const mapStateToProps = (state) => {
  // debugger;
  return {
    bleats: Object.values(state.bleats), //uses bleats slice of state 
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  // debugger; 
  return {
    fetchBleats: () => dispatch(fetchBleats())
  }
}

//anything dispatched hits thunk
//no mdp - component does not need to "write" anything 

const containerFunc = connect(mapStateToProps, mapDispatchToProps); //connect watches for changes to msp or mdp 
//only re-renders with changes to slice of state 
const ConnectedBleatIndex = containerFunc(BleatIndex);

export default ConnectedBleatIndex;