import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SpinnerKit from "../Spinner/SpinnerKit";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  const { login, loginGoogle } = useAuth();
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
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setAlert(alert);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginGoogle();
      
      navigate("/");
    } catch (error) {
      setAlert(alert);
    }
  };

  return (
    <>
      <div className="container mt-5 text-center text-lg-start">
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <h2 className="text-center mt-3 fw-bold">Iniciar Sesión</h2>
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tiendacoder-e55f2.appspot.com/o/vape1.jpg?alt=media&token=d622dd5e-77a9-4b4d-aca7-0ad3caff2e0e"
                alt=""
                className="w-100 rounded ms-3"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Ej: tunombre@correo.com"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
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

                  <button type="submit" className="btn btn-dark btn-block mb-4">
                    Ingresar
                  </button>
                  <div className="divider d-flex align-items-center my-1"></div>

                  <button
                    className="btn btn-dark btn-block"
                    type="submit"
                    onClick={handleGoogleSignIn}
                  >
                    <FcGoogle size={30} /> Ingresar con Google
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
