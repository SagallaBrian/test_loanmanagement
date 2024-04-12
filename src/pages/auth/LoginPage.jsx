import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

function LoginPage() {
  useEffect(() => {
    document.title = "로그인 Fiscus";
  }, []);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [error, setError] = useState("");
  const { user, setGlobaluser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "192.168.1.1" && password === "192.168.1.1") {
      const user = {
        username: "John Doe",
        occupation: "React Developer",
      };
      setGlobaluser(user);
      navigate("/dashboard");
      setError("");
    }
    if (username === "192.168.1.1" && !showPasswordFields) {
      // Redirect to dashboard
      setShowPasswordFields(true);
      setError("");
    } else {
      setError("아이디가 일치하지 않습니다.");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <form onSubmit={handleSubmit}>
          {!showPasswordFields && (
            <div className="pb-4">
              <div className="text-end small pb-2">IP : 192.168.1.1</div>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="아이디 입력"
                value={username}
                onChange={handleUsernameChange}
                style={{ borderColor: error ? "red" : "" }}
              />
            </div>
          )}
          {showPasswordFields && (
            <div className="pb-4">
              <div className="d-flex">
                <div className="flex-grow-1 text-start">ID : 192.168.1.1</div>
                <div className="text-end small pb-2">IP : 192.168.1.1</div>
              </div>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="패스워드 입력"
                value={password}
                onChange={handlePasswordChange}
                style={{ borderColor: error ? "red" : "" }}
              />
            </div>
          )}
          {error && <div className="text-danger text-start">{error}</div>}
          <div className="d-grid pt-2">
            <button type="submit" className="btn btn-dark btn-lg">
              다음
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
