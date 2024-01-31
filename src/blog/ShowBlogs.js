import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/ingresos'

const CompShowBlogs = () => {
  const [ingresos, setBlog] = useState([])
  useEffect(() => {
    getBlogs()
  }, [])

  // procedimiento para mostrar todos los blogs
  const getBlogs = async () => {
    const res = await axios.get(URI)
    setBlog(res.data)
  }

  // procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}/${id}`)
    getBlogs()
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Ingresos</h3>
          <Link to={'/create'} className='btn btn-info mt-2 mb-2'>Agregar ingreso</Link>
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
              {ingresos.map((ingresos) => (
                <tr key={ingresos.id}>
                  <td> {ingresos.ingreso} </td>
                  <td> {ingresos.realizado} </td>
                  <td> {ingresos.fecha} </td>
                  <td> {ingresos.descripcion} </td>
                  <td> {ingresos.categoria} </td>
                  <td> {ingresos.cuenta} </td>
                  <td> {ingresos.anexo} </td>
                  <td>
                    <Link to={`/edit/${ingresos.id}`} className="btn btn-info" >Editar</Link>
                    <button onClick={() => deleteBlog(ingresos.id)} className="btn btn-danger">Borrar</button>
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

export default CompShowBlogs