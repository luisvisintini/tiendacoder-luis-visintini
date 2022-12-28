import { useState } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { RiLockPasswordFill } from "react-icons/ri"
import useCarrito from "../../hooks/useCarrito"
import Alert from "../Alert/Alert"

const SignUp = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const {alert, setAlert} = useCarrito()

  const handleSubmit = e => {
    e.preventDefault()

    if([nombre, email, password, passwordRepeat].includes('')) {
      setAlert('Todos los campos son obligatorios')
      setTimeout(() => {
        setAlert('');
      }, 3000);
      return 
    }
    if(password !== passwordRepeat) {
      setAlert('Los passwords no coinciden')
      setTimeout(() => {
        setAlert('');
      }, 3000);
      return
    }
    if(password.length < 6 ) {
      setAlert('Password muy corto, minimo 6 caracteres')
      setTimeout(() => {
        setAlert('');
      }, 3000);
      return
    }
    setAlert('')
  }

  return (
    <>
    <div>
      <div className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro</p>
                      {alert && <Alert />}
                      <form 
                        className="mx-1 mx-md-4"
                        >

                        <div className="d-flex flex-row align-items-center mb-4">
                          <BsFillPersonFill className="me-1 mb-4"/>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="text" 
                              id="nombre" 
                              className="form-control"
                              value={nombre}
                              onChange={e => setNombre(e.target.value)}
                              />
                            <label className="form-label" htmlFor="nombre">Tu Nombre</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <MdEmail className="me-1 mb-4"/>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="email" 
                              id="email" 
                              className="form-control"
                              value={email}
                              onChange={e => setEmail(e.target.value)} 
                              />
                            <label className="form-label" htmlFor="email">Tu Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <RiLockPasswordLine className="me-1 mb-4"/>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="password" 
                              id="password" 
                              className="form-control"
                              value={password}
                              onChange={e => setPassword(e.target.value)} 
                              />
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <RiLockPasswordFill className="me-1 mb-4"/>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="password" 
                              id="passwordrepeat" 
                              className="form-control"
                              value={passwordRepeat}
                              onChange={e => setPasswordRepeat(e.target.value)} 
                              />
                            <label className="form-label" htmlFor="passwordrepeat">Repetir password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button 
                            type="button" className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                            >Registrar</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://firebasestorage.googleapis.com/v0/b/tiendacoder-e55f2.appspot.com/o/vape4.jpg?alt=media&token=32634a4c-3fcc-4b91-b4d4-e36956a3c61d"
                        className="img-fluid" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp