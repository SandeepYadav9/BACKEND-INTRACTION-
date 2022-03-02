import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [changePassword, setChangePassword] = useState();
  const AuthCtx = useContext(AuthContext);
  const history=useNavigate()
  const changeHandler = (e) => {
    setChangePassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAlv389v_KBaNDbHXuOH8GExUYgBE69-8Y",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: AuthCtx.token,
          password: changePassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //Always succeddds
      history('/', {replace:true})
    });
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={changePassword}
          onChange={changeHandler}
          minLength="7"
        />
      </div>
      <div className="action">
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
