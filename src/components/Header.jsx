import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h2>
          <span>Digitastic</span> .Plus
        </h2>
      </Link>
      <Link to='/form'>
        <h2>
          Link <span>Vote</span> Challenge
        </h2>
      </Link>
    </header>
  );
};

export default Header;
