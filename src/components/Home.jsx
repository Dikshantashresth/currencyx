import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
  // State to hold the exchange rates data
  const [data, setData] = useState({});
  const [form, setForm] = useState({ currency1: '', currency2: '', value: '' });
  const [value, setValue] = useState('');
  const [currencyname, setCurrencyname] = useState([]);
  // Fetch exchange rates data from the API when the component mounts
  // useEffect is a hook that allows you to perform side effects in function components
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((response) => response.json())
      .then((data) => {
        setData(data.rates);
        setCurrencyname(Object.keys(data.rates));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  useEffect(() => {
    if (form.currency1 && form.currency2 && form.value) {
      // Perform the conversion
      const result = parseFloat((data[form.currency2] / data[form.currency1] * form.value)).toFixed(2);
      setValue(result);
    }
  }, [form, data]);
  // Handle changes in the form inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.toUpperCase()
    });
   
  };
  

  return (
    <div className="container">
      <h2 className="heading">💱 Currency Converter</h2>
   
      <div className="row">
        
        <select onChange={handleChange} value={form.currency1} name="currency1" className="select">
          <option value="">From</option>
          {currencyname.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
        

        <select onChange={handleChange} value={form.currency2} name="currency2" className="select">
          <option value="">To</option>
          {currencyname.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <input
        type="number"
        name="value"
        value={form.value}
        onChange={handleChange}
        placeholder="Amount"
        className="input"
      />

      

      <input
        type="text"
        readOnly
        value={value ? `${value} ${form.currency2}` : ''}
        className="result"
       onChange={handleChange}/>
    </div>
  );
};

export default Home;
