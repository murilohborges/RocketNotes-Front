import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth.jsx';
import { Container, Profile, Logout } from "./styles.js";
import { api } from '../../services/api.js';
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg';
import { useNavigate } from 'react-router-dom';


export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine></RiShutDownLine>
      </Logout>

    </Container>
  )
}