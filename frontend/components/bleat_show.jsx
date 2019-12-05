import React from 'react'; 
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { fetchBleat } from '../actions/bleat_actions'; 

//it is possible to have container component and presentational component in one file: 

class BleatShow extends React.Component {
    //no need to worry about state = no reason to make constructor 
    //react by default will call super(props)

    //link will change URL
    //Have text in your link so its visible 
    //manual a tag will trigger a refresh, it won't just change URL
    //Link also works nicely with react and react props = use Link! 
    //Wrap chunks of code in a Link tag, anything within will send by default

    componentDidMount() { //will fetch bleats after first render (only invoked once)
        // debugger; 
        this.props.fetchBleat(this.props.match.params.bleatId);
    }

    //conventionally prevProps, will pass a copy of component props prior to update 
    componentDidUpdate(prevProps) { //lifecycle method, invoked whenever component updates (component re-renders or receives new props)
        if (this.props.match.params.bleatId != prevProps.match.params.bleatId) {
            // debugger; 
            this.props.fetchBleat(this.props.match.params.bleatId); 
        }
    }

    //render happens right away
    //Component will mount is depricated - most will mounts are depricated 
    //try not to use depricated methods
    render () {
        // if (!this.props.bleat){
        //     return (
        //         <Link to="/" >GO Back</Link>
        //     )
        // }
        //^ another valid solution rather than passing an empty object in msp 
        //prevents calling .body on "undefinded" within return statement

        return (
            <>
                <p>{this.props.bleat.body}</p>
                <Link to="/" >Go Back</Link>
            </>
        )
    }
}

//Having the bleat ID allows us to find the bleat information in the bleat slice of state 
//we can get this from the wildcard - second argument (ownProps) - inline props and routing props 
//Keying into an empty object returns undefined 
const msp = (state, ownProps) => {
    // debugger; 
    const bleatId = ownProps.match.params.bleatId; 
    const bleat = state.bleats[bleatId] || {}; 
    //if our state is not populated we do not have bleat: must get it
    return {
        bleat
    }
}

const mdp = (dispatch) => {
    return {
        fetchBleat: id => dispatch(fetchBleat(id))
    }
}

export default connect(msp, mdp)(BleatShow); 

