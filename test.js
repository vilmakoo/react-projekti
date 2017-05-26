import test from 'ava';
import ReactTestUtils from 'react-dom/test-utils';
import Vastaus from './src/components/Vastaus';
import malli from './src/malli';

// testit ei onnistuneet

test('Ohjelma kertoo väärästä vastauksesta, kun siihen syötetään väärä vastaus',
(t) => {
    const vastaus = Vastaus;
    const node = vastaus.refs.textarea;
    node.value = "Kirahvi";
    ReactTestUtils.Simulate.change(node);

    const submitButton = ReactTestUtils.findRenderedComponentWithType(submit);
    ReactTestUtils.Simulate.click(submitButton);

    // t.false(ReactTestUtils.findRenderedDOMComponentWithTag("vaaraMjono") === "");
    // Vastaus.setState({value: "Moi"});
    // t.false(Vastaus.state.value == malli);
});