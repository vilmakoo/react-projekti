import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Ohjeistus from './Ohjeistus'
import Tehtava from './Tehtava'
import Vastaus from './Vastaus'
import malli from '../malli'

const kirjoitettava = malli;

class Sovellus extends React.Component {
  render () {
    return(
      <div>
        <div><Ohjeistus /></div>
        <div className="kirjoitettava-asia"><Tehtava
          kirjoitettavaAsia={kirjoitettava} /></div>
        <br></br>
        <div><Vastaus
          kirjoitettavaAsia={kirjoitettava} /></div>
      </div>
    )
  }
}

export default Sovellus
