import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/transactions'

const CompShowRevenues = () => {
  const [transactions, setTransaction] = useState([])
  useEffect(() => {
    getTransactions()
  }, [])

  const getTransactions = async () => {
    const res = await axios.get(URI)
    setTransaction(res.data)
  }

  const deleteBlog = async (transaction_id) => {
    await axios.delete(`${URI}/${transaction_id}`)
    getTransactions()
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h3 className="text-center text-secondary fw-bold">Ingresos</h3>
          <table className="table shadow rounded">
            <thead className="table-dark">
              <tr>
                <th>Ingreso</th>
                <th>Realizado</th>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Categoria</th>
                <th>Cuenta</th>
                <th>Anexo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transactions) => (
                <tr key={transactions.transaction_id}>
                  <td> {transactions.amount} </td>
                  <td> {transactions.done ? 'SÍ' : 'NO'}</td>
                  <td> {transactions.date} </td>
                  <td> {transactions.description} </td>
                  <td> {transactions.category_id} </td>
                  <td> {transactions.bank_id} </td>
                  <td> {transactions.attached} </td>
                  <td>
                    <Link
                      to={`/edit-revenue/${transactions.transaction_id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteBlog(transactions.transaction_id)}
                      className="btn btn-danger"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CompShowRevenues
