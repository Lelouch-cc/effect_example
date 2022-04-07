/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { routes } from '../../libs/routes';

import './index.scss';

const HomePage = (): JSX.Element => {
  const navList = [...routes];
  navList.shift();

  return (
    <>
      <div className='home'>
        <div className='home-title'>
          <div className='home-title-logo'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='home-title-content'>
            Boo Effect Library
          </div>
        </div>
        <div className='home-nav'>
          {
            navList.map((item) => (
              <Link key={item.name} to={item.path ?? ''}>
                <span>
                  {item.title}
                </span>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default HomePage;
