import { FcGoogle } from "react-icons/fc"
import { loginWithGoogle } from "../../services/firebase/providers"


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const startGoogleSignIn = async () => {
        const result = await loginWithGoogle()
        return result
  }

  return (
    <>
        <div className="container mt-5 text-center text-lg-start">
            <div className="card mb-3">
                <div className="row g-0 d-flex align-items-center">
                    <h2 className="text-center mt-3 fw-bold">Iniciar Sesión</h2>
                        <div className="col-lg-4 d-none d-lg-flex">
                            <img src="https://firebasestorage.googleapis.com/v0/b/tiendacoder-e55f2.appspot.com/o/vape1.jpg?alt=media&token=d622dd5e-77a9-4b4d-aca7-0ad3caff2e0e" alt=""
                            className="w-100 rounded ms-3" />
                        </div>
                    <div className="col-lg-8">
                        <div className="card-body py-5 px-md-5">
                            <form>
                                <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control" />
                                <label className="form-label" htmlFor="email">Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="password" id="password" className="form-control" />
                                <label className="form-label" htmlFor="password">Password</label>
                                </div>

                                <button onClick={handleSubmit} type="button" className="btn btn-dark btn-block mb-4">Ingresar</button>
                                <div className="divider d-flex align-items-center my-1">
          </div>

          <button className="btn btn-dark btn-block" type="button" onClick={startGoogleSignIn}>
            <FcGoogle size={30}/> Ingresar con Google
          </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login