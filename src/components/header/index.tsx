import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../loading';

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>({});

  const callGetUser = async () => {
    setLoading(true);
    try {
      const response = await getUser();
      setUser(response);
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    callGetUser();
  }, []);

  return (
    <header data-testid="header-component">
      <NavLink to="/search" data-testid="link-to-search">Home</NavLink>
      <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
      <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>

      {loading === true ? (
        <Loading />
      ) : (
        <h1 data-testid="header-user-name">{user.name}</h1>
      )}
    </header>
  );
}
