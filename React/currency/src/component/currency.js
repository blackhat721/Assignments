
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Currency() {
  const [curr_type, setCurr_type] = useState('');

  const [inp, setInp] = useState();
  const [curr_type2, setCurr_type2] = useState('');

  function curr_typeChanged(event) {
    setCurr_type(event.target.value);
    console.log(curr_type);
  }
  function curr_typeChanged2(event) {
    setCurr_type2(event.target.value);
    console.log(curr_type2);
  }
  function convert() {
    console.log(curr_type);
    console.log(curr_type2);

    if (curr_type === 'usd') {
      setInp(inp * 81.24500);
      console.log(inp);
    }
    else if (curr_type === 'pound') {
      setInp(inp * 100.37611);
    }
    else if (curr_type === 'yen') {
      setInp(inp * 0.63586959);
    }
    call_back();
  }


  function call_back() {

    if (curr_type2 === 'usd') {
      setInp(inp * 0.01227);
    }
    else if (curr_type2 === 'pound') {
      setInp(inp * 0.009971662);
    }
    else if (curr_type2 === 'yen') {
      setInp(inp * 1.599876);
    }
  }

  return (
    <>
      <h1>2.Convert into Different Currencies</h1>

      <Form.Select aria-label="Default select example" value={curr_type} onChange={e => setCurr_type(e.target.value)}>
        <option>Enter the input Currency type</option>
        <option  >pound</option>
        <option >usd</option>
        <option >yen</option>
      </Form.Select>
      <br />
      <br />
      <Form.Control onChange={e => setInp(e.target.value)} type="number" placeholder="Enter input" />

      <br />
      <br />
      <Form.Select aria-label="Default select example" value={curr_type2} onChange={e => setCurr_type2(e.target.value)}>
        <option>Enter the currency to be converted</option>
        <option  >pound</option>
        <option >usd</option>
        <option >yen</option>
      </Form.Select>
      <br />
      <br />
      <Button variant="outline-primary" onClick={convert}>convert</Button>
      <h3>{inp}</h3>

    </>

  );
}

export default Currency;
