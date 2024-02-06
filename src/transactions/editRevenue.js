import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/transactions/'

const CompEditRevenue = () => {
  const [bankId, setBankId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [amount, setAmount] = useState('')
  const [done, setDone] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [attached, setAttached] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      bank_id: bankId,
      category_id: categoryId,
      amount: amount,
      done: done,
      date: date,
      description: description,
      attached: attached,
    })
    navigate('/revenues')
  }

  useEffect(() => {
    getRevenueById()
  }, [])

  const getRevenueById = async () => {
    const res = await axios.get(URI + id)
    setBankId(res.data.bank_id)
    setCategoryId(res.data.category_id)
    setAmount(res.data.amount)
    setDone(res.data.done)
    setDate(res.data.date)
    setDescription(res.data.description)
    setAttached(res.data.attached)
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="card card-custom mt-5">
        <div class="card-header bg-success text-white text-center h3">
          Nuevo ingreso
        </div>
        <form onSubmit={update}>
          <div class="card-body">
            <div className="mb-3">
              <label for="cantidadGasto" className="form-label h5">
                Cantidad de ingresos
              </label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
                    value={done}
                    onChange={(e) => setDone(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="1">SI</option>
                    <option value="0">NO</option>
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="3">Devoluión prestamo</option>
                    <option value="4">Nómina</option>
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
                    value={bankId}
                    onChange={(e) => setBankId(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="3">HSBC</option>
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
                  value={attached}
                  onChange={(e) => setAttached(e.target.value)}
                  type="text"
                  className="form-control-plaintext"
                  placeholder="Anexo"
                />
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button type="submit" className="border border-0 btn">
              <i className="fa-solid fa-circle-check fa-4x text-success"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CompEditRevenue
