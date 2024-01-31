import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/ingresos/'

const CompEditBlog = () => {
  const [ingreso, setIngreso] = useState('')
  const [realizado, setRealizado] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
  const [cuenta, setCuenta] = useState('')
  const [anexo, setAnexo] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  // procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      ingreso: ingreso,
      realizado: realizado,
      fecha: fecha,
      descripcion: descripcion,
      categoria: categoria,
      cuenta: cuenta,
      anexo: anexo,
    })
    navigate('/ingreso')
  }

  useEffect(() => {
    getBlogById()
  }, [])

  const getBlogById = async () => {
    const res = await axios.get(URI + id)
    setIngreso(res.data.ingreso)
    setRealizado(res.data.realizado)
    setFecha(res.data.fecha)
    setDescripcion(res.data.descripcion)
    setCategoria(res.data.categoria)
    setCuenta(res.data.cuenta)
    setAnexo(res.data.anexo)
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="card card-custom mt-5">
        <div class="card-header bg-success text-white text-center h3">Nuevo ingreso</div>
        <form onSubmit={update}>

          <div class="card-body">

            <div className="mb-3">
              <label for="cantidadGasto" className="form-label h5"
              >Cantidad de ingresos</label
              >
              <input
                value={ingreso}
                onChange={(e) => setIngreso(e.target.value)}
                type="number"
                className="form-control-plaintext form-control text-success"
                id="cantidadGasto"
                placeholder="$0.00"
              />
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="col-2">
                <i className="fa-light fa-circle-check fa-2x text-black-50"></i>
              </div>
              <div className="col-10">
                <div class="form-floating">
                  <select
                    value={realizado}
                    onChange={(e) => setRealizado(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example">
                    <option selected>Selecciona una opción</option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
                  <label for="floatingSelect">Realizado</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="col-2">
                <i className="fa-light fa-calendar fa-2x text-black-50"></i>
              </div>
              <div className="col-10">
                <input
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="col-2">
                <i className="fa-light fa-microphone fa-2x text-black-50"></i>
              </div>
              <div className="col-10">
                <input
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Descripción"
                />
              </div>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="col-2">
                <i className="fa-light fa-layer-group fa-2x text-black-50"></i>
              </div>
              <div className="col-10">
                <div class="form-floating">
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example">
                    <option selected>Selecciona una opción</option>
                    <option value="Entretenimiento">Entretenimiento</option>
                    <option value="Comida">Comida</option>
                    <option value="Viaje">Viaje</option>
                    <option value="Servicios">Servicios</option>
                  </select>
                  <label for="floatingSelect">Categoria</label>
                </div>

              </div>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="col-2">
                <i className="fa-light fa-wallet fa-2x text-black-50"></i>
              </div>
              <div className="col-10">
                <div class="form-floating">
                  <select
                    value={cuenta}
                    onChange={(e) => setCuenta(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example">
                    <option selected>Selecciona una opción</option>
                    <option value="BBVA">BBVA</option>
                    <option value="Santander">Santander</option>
                    <option value="CitiBanamex">CitiBanamex</option>
                    <option value="Cartera">Cartera</option>
                  </select>
                  <label for="floatingSelect">Cuenta</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-2">
                <i className="fa-light fa-image fa-2x text-black-50"></i>
              </div>
              <div className="col-10">
                <input
                  value={anexo}
                  onChange={(e) => setAnexo(e.target.value)}
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Anexo"
                />
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button type="submit" className="border border-0 btn"><i className="fa-solid fa-circle-check fa-4x text-success"></i></button>
          </div>
        </form>

      </div>

    </div>
  )

}

export default CompEditBlog