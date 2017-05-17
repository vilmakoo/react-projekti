import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Ohjeistus extends React.Component {
  render() {
    return (
      <p>Kirjoita tekstikenttään alla oleva koodirunko.
      Ohjelma ilmoittaa väärin menevistä merkeistä.</p>
    )
  }
}

const kirjoitettavaAsia = `public class Hei {

}`;

class Tehtava extends React.Component {
  render() {
    return (
      <textarea readonly>{kirjoitettavaAsia}</textarea>
    )
  }
}

class Kirjoituskentta extends React.Component {
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

  tarkistaOnkoOikein() {
    var onkoOikein = "kyllä";
    var annettuMjono = this.state.value;
    var varjattyMjono = "";

    for (var i = 0; i < annettuMjono.length; i++) {
      var c = annettuMjono.charAt(i);
      if (c !== kirjoitettavaAsia.charAt(i)) {
        onkoOikein = "ei";
        varjattyMjono += c.fontcolor("red");
        } else  {
          varjattyMjono += c;
        }
      }
      //this.setState({value: varjattyMjono});
      if (onkoOikein === "ei") {
        document.getElementById("vaaramjono").innerHTML = "Virheet: " + varjattyMjono;
      }
      return onkoOikein;
    }


  handleSubmit(event) {
    let onkoOikein = this.tarkistaOnkoOikein();
    alert('Kirjoitus palautettu oikein: ' + onkoOikein);
    event.preventDefault();
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

class Sovellus extends React.Component {
  render () {
    return(
      <div>
        <div><Ohjeistus /></div>
        <div><Tehtava /></div>
        <br></br>
        <div><Kirjoituskentta /></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Sovellus />,
  document.getElementById('root')
);
