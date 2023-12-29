import { useState } from 'react'
import './App.css'


function App() {

  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [data, setData] = useState()


  const valueInputDay = (e) => {
    setDay({
      ...day,
      [e.taget.name]: e.target.value
    })
  }

  const valueInputMonth = (e) => {
    setMonth({
      ...month,
      [e.taget.name]: e.target.value
    })
  }

  const valueInputYear = (e) => {
    setYear({
      ...year,
      [e.taget.name]: e.target.value
    })
  }

  const handleData = (e) => {
    e.preventDefault()
    setData(year + '-' + month + '-' + day)
    console.log(data);
  }

  

  const calcularIdade = (data) => {
    const hoje = new Date();
    const nascimento = new Date(data);
  
    // Calcula a diferença em milissegundos entre as datas
    const diferencaEmMilissegundos = hoje - nascimento;
  
    // Calcula a diferença em anos
    const idadeEmAnos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
  
    // Calcula a diferença em meses
    const idadeEmMeses = Math.floor(diferencaEmMilissegundos / (30.44 * 24 * 60 * 60 * 1000));
  
    // Calcula a diferença em dias
    const idadeEmDias = Math.floor(diferencaEmMilissegundos / (24 * 60 * 60 * 1000));
  
    return {
        year: idadeEmAnos,
        month: idadeEmMeses,
        day: idadeEmDias
    };
  }


  const idade = calcularIdade(data)
  console.log(`Idade: ${idade.year} anos, ${idade.month} meses, ${idade.day} dias`)


  return (
    <section className='wrapper'>

        <div className="container">

            <form className="form-control" onSubmit={handleData}>

                <div className="form-group">
                  <label htmlFor="day">DAY</label>
                  <input type="text"  placeholder='DD' name='dia'  onChange={valueInputDay}/>
                </div>

                <div className="form-group">
                  <label htmlFor="month">MONTH</label>
                  <input type="text"  placeholder='MONTH' onChange={valueInputMonth}/>
                </div>

                <div className="form-group">
                  <label htmlFor="YEAR">YEAR</label>
                  <input type="text"  placeholder='YEAR'onChange={valueInputYear}/>
                </div>

                <button>Submit</button>

            </form>

            <div className="results">
                <h1><span> {!idade.day  ? '--' : idade.day}</span> Days</h1>
                <h1><span> {!idade.month  ? '--' : idade.month}</span> Months</h1>
                <h1><span> {!idade.year  ? '--' : idade.year}</span> Years</h1>
            </div>

        </div>

    </section>
  )
}

export default App
