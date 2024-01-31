import logo from './logo.svg';
import './App.css';

// importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import CompShowDashboard from './blog/DashBoard';

// importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
      <nav className="navbar purple-white">
        <div className="container-fluid d-flex justify-content-around">
          <a className="nav-link" href="/">Principal</a>
          <a className="nav-link" aria-current="page" href="#">Transacciones</a>
          <div className="dropdown">
            <i
              className="fa-solid fa-3x fa-circle-plus nav-color"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#modalTraspasos"
                >Traspaso</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  // data-bs-toggle="modal"
                  // data-bs-target="#modalIngresos"
                  href='/ingreso'
                >Ingreso</a
                >
              </li>
              <li><a className="dropdown-item" href="#">Gasto con tarjeta</a></li>
              <li>
                <a
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#modalGastos"
                >Gasto</a
                >
              </li>
            </ul>
          </div>
          <a className="nav-link" href="#">Planificación</a>
          <a className="nav-link" href="#">Más</a>
        </div>
      </nav>



      <div
        className="modal fade"
        id="modalTraspasos"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h1 className="modal-title fs-5">NUEVO TRASPASO</h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label for="cantidadGasto" className="form-label"
                >Monto</label
                >
                <input
                  type="number"
                  className="form-control-plaintext form-control-lg text-success"
                  id="cantidadGasto"
                  placeholder="$0.00"
                />
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-calendar fa-2x text-black-50"></i>
                </div>
                <div className="col-10">
                  <button className="btn btn-primary">Hoy</button>
                  <button className="btn btn-light">Ayer</button>
                  <button className="btn btn-light">Otros</button>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-building-columns fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    placeholder="De la cuenta"
                  />
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Transferir a"
                  />
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-building-columns fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    placeholder="A la cuenta"
                  />
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-pencil fa-2x text-black-50"></i>
                </div>
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Observación"
                  />
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-tag fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Etiquetas"
                  />
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-2">
                  <i className="fa-light fa-image fa-2x text-black-50"></i>
                </div>
                <div className="form-check form-switch col-10">
                  <label className="form-check-label" for="realizadoCheck"
                  >Transferencia fija</label
                  >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="realizadoCheck"
                    checked
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <i className="fa-solid fa-circle-check fa-4x text-primary"></i>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL INGRESOS */}
      <div className="modal fade" id="modalIngresos" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h1 className="modal-title fs-5">NUEVO INGRESO</h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label for="cantidadGasto" className="form-label"
                >Cantidad de ingresos</label
                >
                <input
                  type="number"
                  className="form-control-plaintext form-control-lg text-success"
                  id="cantidadGasto"
                  placeholder="$0.00"
                />
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-circle-check fa-2x text-black-50"></i>
                </div>
                <div className="form-check form-switch col-10">
                  <label className="form-check-label" for="realizadoCheck"
                  >Realizado</label
                  >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="realizadoCheck"
                    checked
                  />
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-calendar fa-2x text-black-50"></i>
                </div>
                <div className="col-10">
                  <button className="btn btn-success">Hoy</button>
                  <button className="btn btn-light">Ayer</button>
                  <button className="btn btn-light">Otros</button>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-microphone fa-2x text-black-50"></i>
                </div>
                <div className="col-10">
                  <input
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
                <div className="col-9">
                  <button className="btn btn-outline-primary">
                    <i className="fa-solid fa-globe"></i>
                    Agua
                  </button>
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-wallet fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <button className="btn btn-outline-success">
                    <i className="fa-solid fa-pen-nib"></i>
                    Afirme
                  </button>
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-2">
                  <i className="fa-light fa-image fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <p className="text-secondary">Anexo</p>
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <i className="fa-solid fa-circle-check fa-4x text-success"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalGastos" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h1 className="modal-title fs-5">NUEVO GASTO</h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label for="cantidadGasto" className="form-label"
                >Cantidad de gastos</label
                >
                <input
                  type="number"
                  className="form-control-plaintext form-control-lg text-danger"
                  id="cantidadGasto"
                  placeholder="$0.00"
                />
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-circle-check fa-2x text-black-50"></i>
                </div>
                <div className="form-check form-switch col-10">
                  <label className="form-check-label" for="realizadoCheck"
                  >Realizado</label
                  >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="realizadoCheck"
                    checked
                  />
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-calendar fa-2x text-black-50"></i>
                </div>
                <div className="col-10">
                  <button className="btn btn-danger">Hoy</button>
                  <button className="btn btn-light">Ayer</button>
                  <button className="btn btn-light">Otros</button>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-microphone fa-2x text-black-50"></i>
                </div>
                <div className="col-10">
                  <input
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
                <div className="col-9">
                  <button className="btn btn-outline-primary">
                    <i className="fa-solid fa-globe"></i>
                    Agua
                  </button>
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="mb-3 row">
                <div className="col-2">
                  <i className="fa-light fa-wallet fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <button className="btn btn-outline-success">
                    <i className="fa-solid fa-pen-nib"></i>
                    Afirme
                  </button>
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-2">
                  <i className="fa-light fa-image fa-2x text-black-50"></i>
                </div>
                <div className="col-9">
                  <p className="text-secondary">Anexo</p>
                </div>
                <div className="col-1">
                  <i className="fa-light fa-angle-right fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <i className="fa-solid fa-circle-check fa-4x text-danger"></i>
            </div>
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowDashboard></CompShowDashboard>}></Route>
          <Route path='/ingreso' element={<CompShowBlogs></CompShowBlogs>}></Route>
          <Route path='/create' element={<CompCreateBlog></CompCreateBlog>}></Route>
          <Route path='/edit/:id' element={<CompEditBlog></CompEditBlog>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
