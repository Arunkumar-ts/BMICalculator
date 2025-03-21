import { useEffect, useState } from 'react'

function App() {
  const [height, setHeight] = useState("123");
  const [weight, setWeight] = useState("23");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [error, setError] = useState("");

  const bmiCal = ()=>{
    let isheight = /^\d+$/.test(height);
    let isweight = /^\d+$/.test(weight);

    if(isheight && isweight){
      let heightInMeter = height/100;
      let bmiValue = weight/(heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("Under Weight");
      }
      else if(bmiValue >= 18.5 && bmiValue <24.9){
        setBmiStatus("Normal Weghit");
      }
      else if(bmiValue >=25 && bmiValue < 29.9){
        setBmiStatus("Over Weghit");
      }
      else{
        setBmiStatus("Obese");
      }
      setError("");
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setError("Please enter valied numeric values for height and weight.")
    }

  };
  const clearAll = ()=>{
    setBmi(null);
    setBmiStatus("");
    setHeight("");
    setWeight("");
    setError("");
  };

  useEffect(()=>{
    bmiCal();
    console.log('hello');
  },[]);
  return (
    <>
      <div className="container-fluid  d-flex justify-content-center align-items-center min-vh-100  ">
        <div className="container  w-75 h-75 d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-75 h-100 max-vh-100 p-2 py-4 border border-secondary rounded shadow">
          <div className="col d-none d-lg-block ">
            <img src="weight.jpg" alt="diet image" className="rounded " height={350} width={330} />
          </div>
          <div className="col">
            <div className="h3 text-primary">BMI CALCULATOR</div>
            <div className="h6 text-danger" style={{fontSize:"11px"}}>{error}</div>
            <label htmlFor='height' className='mb-2'>Height (cm) :</label>
            <input type="text" className='form-control mb-2 border-black' id="height" value={height} onChange={(e)=> setHeight(e.target.value)}/>
            <label htmlFor='weight' className='mb-2 '>Weight (kg) :</label>
            <input type="text" className='form-control mb-3 border-black' id="weight" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
            <button className='btn text-white bg-primary' onClick={bmiCal}>Calculate BMI</button>
            <button className='btn bg-danger text-white ms-3' onClick={clearAll}>Clear</button>
            { bmi !== null &&
              <div className="p-3 border mt-3 rounded border-primary">
                <div className="h6 text-primary">Your BMI is : {bmi}</div>
                <div className="">Status : {bmiStatus}</div>
              </div>
            }
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
