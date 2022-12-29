import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SpinnerKit from "../Spinner/SpinnerKit";

const SignUp = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [alert, setAlert] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <SpinnerKit />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setAlert(alert.message);
    }
  };

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
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Registro
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          // TODO: SE DEJAN DIVS PARA SEGUIR EN CONSTRUCCION
                          {/* <div className="d-flex flex-row align-items-center mb-4">
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
                        </div> */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <MdEmail className="me-1 mb-4" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="email">
                                Tu Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Ej: tunombre@correo.com"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <RiLockPasswordLine className="me-1 mb-4" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="password">
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Minimo 6 caracteres"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          {/* <div className="d-flex flex-row align-items-center mb-4">
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
                        </div> */}
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              // onClick={handleSubmit}
                            >
                              Registrar
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/tiendacoder-e55f2.appspot.com/o/vape4.jpg?alt=media&token=32634a4c-3fcc-4b91-b4d4-e36956a3c61d"
                          className="img-fluid"
                          alt=""
                        />
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
  );
};

export default SignUp;