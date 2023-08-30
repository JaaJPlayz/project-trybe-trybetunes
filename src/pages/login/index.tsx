import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../../components/loading';

export default function Login() {
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState(true);
  const [nameValue, setNameValue] = useState('');
  const [loading, setLoading] = useState(false);

  const verify = (name: string) => {
    if (name.length > 2) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleNameChange = (event: any) => {
    setNameValue(event.target.value);
    verify(event.target.value);
  };

  const callCreateUser = async () => {
    setLoading(true);
    try {
      await createUser({ name: nameValue });
      navigate('/search');
    } catch (err: any) {
      console.log(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading === true ? <Loading /> : (
        <form>
          <label>
            Nome:
            <input
              data-testid="login-name-input"
              value={ nameValue }
              onChange={ (event) => { handleNameChange(event); } }
            />
          </label>
          <button
            data-testid="login-submit-button"
            disabled={ disableButton }
            onClick={ () => callCreateUser() }
          >
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}
