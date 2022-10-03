import { useState } from 'react'

function BMI() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  return (
    <>
      <h1>BMI線上計算</h1>
      <hr />
      <label>身高(cm)</label>
      <input
        type="number"
        value={height === 0 ? '' : height}
        placeholder="請輸入身高"
        onChange={(e) => {
          setHeight(Number(e.target.value))
        }}
      />
      <br />
      <label>體重(kg)</label>
      <input
        type="number"
        value={weight === 0 ? '' : weight}
        placeholder="請輸入體重"
        onChange={(e) => {
          setWeight(Number(e.target.value))
        }}
      />
      <br />
      <button
        onClick={() => {
          if (weight < 10 || height < 100) {
            alert('身高或體重錯誤')
            return
          }

          setBmi(weight / Math.pow(height / 100, 2))
        }}
      >
        計算
      </button>
      <hr />
      <h2>你的BMI值: {bmi.toFixed(1)}</h2>
    </>
  )
}

export default BMI