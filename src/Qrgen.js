import React, {useState} from 'react'
import './Qrgen.css'
import fill from './qr.jpg'
function Qrgen() {
  const [Qr, setQr] = useState(fill)
  const [newtext, setNewtext] = useState("")
  const [num, setNum] = useState("200x200")

  const textchange = (event) => {
    setNewtext(event.target.value);
  }

  const genqr = () => {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    // const gapi = "https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=AashishGarg";
    gapi = gapi+num+"&chl="+newtext;
    setQr(gapi);
  }

  const cha = (event) => {
    const temp = event.target.value;
    setNum(temp);
  }
  return (
    <div className='qr'>
      <h1>QR CODE GENERATOR</h1>
      <select className='sel' onChange={cha}>
        <option value="50x50">50 X50</option>
        <option value="100x100">100 X 100</option>
        <option value="200x200" selected>200 X 200</option>
        <option value="500x500">500 X 500</option>
      </select>    
      <textarea placeholder='Your QR Code Information.....' row="8" cols="10" value={newtext} onChange={textchange}>
      </textarea>
      <button className='btn' onClick={genqr}> GENERATE QR CODE </button>
      <img className='image' src={Qr}></img>
    </div>
  )
}

export default Qrgen