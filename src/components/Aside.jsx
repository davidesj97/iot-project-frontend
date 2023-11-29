import { useState } from "react";
import '../assets/styles/Aside.scss'

export const Aside = () => {
  const [registros, setRegistros] = useState([]);
  const fetchinData = async () => {
    try {
      const response = await fetch("https://iot-project-dev-xxph.1.us-1.fl0.io/api/registros");
      const data  = await response.json();

      setRegistros(data)
    } catch(error) {
      console.log(error)
    }
  }

  fetchinData();
  return (
    <div className="table-container">
      <h2>Tabla registros de llegada</h2>
      <table className="table">
        <thead className="table-dark">
          <tr>
            {registros.length > 0 &&
              Object.keys(registros[0]).map((element) => (
                <th key={element}>{element}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {registros.length > 0 && 
            registros.map(element => (
              <tr key={element.id} className="table-secondary">
                {Object.keys(element).map(keys => (
                  <td key={element["id"]}>{element[keys]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
