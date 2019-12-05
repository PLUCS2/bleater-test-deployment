import React from 'react';
import BleatIndex from './bleat_index_container';
import BleatForm from './bleat_form_container';
import { Route, Switch } from 'react-router-dom'; 
import BleatShow from './bleat_show'; 

//store refers to redux store 
//react component getting redux store 
//Provider component allows us to not pass store to BleatForm and BleatIndex - gives child components redux store 

//Route path is a partial match = as long as the part of your route matches it will render (default)
//:bleatId is the wildcard - will appear as a number in URL 
// "/bleats/:bleatId" has a / at beginning = thinks its a partial match and renders both: 
//use a switch statement (only renders 1st pratial match) - if you use a switch, put "/" at bottom of Routes 
//use "exact" keyword - it will only render component if it is an exact match - means exactly that character
const App = () => {
  // props.name = "something else" // this would be bad! don't do!!
  return (
    <section>
      <Switch>
        <Route path="/bleats/:bleatId" component={ BleatShow }/> 
        {/* <Route exact path="/">  */}
        <Route path="/">
          <BleatForm />
          <BleatIndex />
        </Route>
      </Switch>
    </section>
  )
};

export default App;
