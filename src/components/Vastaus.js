import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Sovellus from './Sovellus'

class Vastaus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Kirjoita tähän.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  tarkistaOnkoOikein(annettuMjono) {
    var onkoOikein = "Kirjoitus palautettu oikein! Päivitä sivu uuden tehtävän saamiseksi.";
    // var annettuMjono = this.state.value;
    var varjattyMjono = "";

    for (var i = 0; i < annettuMjono.length; i++) {
      var c = annettuMjono.charAt(i);
      if (c !== this.props.kirjoitettavaAsia.charAt(i)) {
        onkoOikein = "Kirjoitus palautettu väärin.";
        varjattyMjono += c.fontcolor("red");
        } else  {
          varjattyMjono += c;
        }
      }
      if (onkoOikein === "Kirjoitus palautettu väärin.") {
        document.getElementById("vaaramjono").innerHTML = "Virheet: " + varjattyMjono;
      } else {
        document.getElementById("vaaramjono").innerHTML = "";
      }
      return onkoOikein;
    }


  handleSubmit(event) {
    let onkoOikein = this.tarkistaOnkoOikein(this.state.value);
    alert(onkoOikein);
    event.preventDefault();
    // ReactDOM.render(
    //   Vastaus,
    //   document.getElementById("root")
    // )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default Vastaus
