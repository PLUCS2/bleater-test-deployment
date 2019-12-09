import React from 'react';
import { fetchBleats } from '../util/apiUtil';  

class BleatIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    // debugger; 
    this.props.fetchBleats();
    // fetchBleats().then(
    //   bleats => this.setState({bleats: bleats})
    // );
  }

  render() {
    // debugger; 
    
    if (this.props.bleats.length == 0) {
      return <span>No bleats to display :(</span>;
    }

    const defaultAuthor = { email: "Anonymous" }

    const bleatLis = this.props.bleats.map(bleat => {
      const author = this.props.users[bleat.author_id] || defaultAuthor;
      return <li key={bleat.id}>{bleat.body} - {author.email}</li>
    });

    return (
      <>
        <img src={window.bleaterIMG} />
        <ul class="bleat-list">{ bleatLis }</ul>
      </>);
  }

};

export default BleatIndex;