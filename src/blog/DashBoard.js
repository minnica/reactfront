import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/ingresos'

const CompShowDashboard = () => {
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
    <div>
      <div className="container mt-5">
        <h4 className="text-secondary text-center">Saldo en las cuentas</h4>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div
              className="card-custom text-bg-light mb-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              <div className="card-body">
                <h2 className="card-title text-center">$73,143.85</h2>
                <div
                  className="row d-flex justify-content-center text-center mt-3 mb-3"
                >
                  <i className="fa-light fa-eye-slash"></i>
                </div>
                <div className="card-text">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-end">
                      <i className="fa-solid fa-circle-up fa-2x text-success"></i>
                    </div>
                    <div className="col-4">
                      <span className="fw-bold text-secondary">Ingresos</span> <br />
                      <span className="fw-bold text-success">$23,984.85</span>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <i className="fa-solid fa-circle-down fa-2x text-danger"></i>
                    </div>
                    <div className="col-4">
                      <span className="fw-bold text-secondary">Gastos</span> <br />
                      <span className="fw-bold text-danger">$43,580.58</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-secondary">Pendientes y Alertas</h4>
        <div className="row">
          <div className="col-md-6">
            <div
              className="card-custom text-bg-light mb-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-start">
                      <i className="fa-light fa-down fa-2x text-black-50"></i>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h3>
                        <span className="badge rounded-pill bg-danger">+4</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <span className="text-secondary fw-bold">Gastos pendientes</span>
                  <br />
                  <span className="text-danger fw-bold">$6,636.58</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card-custom text-bg-light mb-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-start">
                      <i className="fa-light fa-up fa-2x text-black-50"></i>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h3>
                        <span className="badge rounded-pill bg-success">+4</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <span className="text-secondary fw-bold">Ingresos pendientes</span>
                  <br />
                  <span className="text-success fw-bold">$6,636.58</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-secondary text-center">Cuentas</h4>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div
              className="card-custom text-bg-light mb-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <div className="col-2">
                      <i className="fa-solid fa-circle-a fa-2x text-success"></i>
                    </div>
                    <div className="col-8">
                      <span className="fw-bold">AFIRME</span> <br />
                      <span className="text-success fw-bold">$594.97</span>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <i className="fa-solid fa-plus fa-2x text-success"></i>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-2">
                      <i className="fa-solid fa-circle-b fa-2x text-primary"></i>
                    </div>
                    <div className="col-8">
                      <span className="fw-bold">BBVA</span> <br />
                      <span className="text-success fw-bold">$594.97</span>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <i className="fa-solid fa-plus fa-2x text-primary"></i>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-2">
                      <i className="fa-solid fa-circle-s fa-2x text-danger"></i>
                    </div>
                    <div className="col-8">
                      <span className="fw-bold">SANTANDER</span> <br />
                      <span className="text-success fw-bold">$594.97</span>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <i className="fa-solid fa-plus fa-2x text-danger"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompShowDashboard