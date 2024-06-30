import { useState } from 'react'
import './App.css'

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState();

  const handleHeight = (e) => {
    setHeight(e.target.value);
    handleBmi();
  }

  const handleWeight = (e) => {
    setWeight(e.target.value);
    handleBmi();
  }

  const handleBmi = () => {
    let bmi = weight / Math.pow((height / 100), 2);
    setBmi(bmi);
    if (bmi <= 18.5)
      setStatus("Under Weight");
    else if (bmi < 25)
      setStatus("Normal Weight");
    else if (bmi < 30)
      setStatus("Overweight");
    else
      setStatus("Obese");
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div>
        <div className='bg-blue-600 p-5'><h1 className='text-4xl font-bold'>BMI CALCULATOR</h1></div>
        <div className='bg-white text-black p-5'>
          <p>Weight: {weight} KG</p>
          <input type="range" min={0} max={250} className='accent-blue-600 w-full' value={weight} onChange={handleWeight} />
          <p>Height: {height} CM</p>
          <input type="range" min={0} max={500} className='accent-blue-600 w-full' value={height} onChange={handleHeight} />
          <div className='bg-blue-600 text-white flex justify-center items-center p-2 font-semibold mt-5'>
            BMI: {bmi}
          </div>
          {status && <h2 className='text-center font-semibold text-2xl pt-2'>{status}</h2>}
        </div>
      </div>
    </div>
  )
}

export default App
