import { useState } from "react"

export const Content2 = () => {
    const [records, setRecords] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://iot-project-dev-xxph.1.us-1.fl0.io/api/estaciones");
        const data = await response.json();

        setRecords(data)
    }

    fetchData();
    return (
        <div className="content-2">
            <table className="table table-bordered">
                <thead className="table-primary">
                <tr>
                    {records.length > 0 &&
                    Object.keys(records[0]).map((element) => {
                        if(element != "createdAt" && element != "updatedAt") {
                            return <th key={element}>{element}</th>
                        }
                    })}
                </tr>
                </thead>
                <tbody>
                {records.length > 0 && 
                    records.map(element => (
                    <tr key={element.id} className="table-warning">
                        {Object.keys(element).map(keys => {
                            if(keys != "createdAt" && keys != "updatedAt") {
                                return <td key={element["id"]}>{element[keys]}</td>
                            }
                        })}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}