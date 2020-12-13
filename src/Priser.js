import React from 'react';
import './Priser.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { MdAttachMoney } from 'react-icons/md'

function Priser() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Priser och information</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdAttachMoney value={{ color: '#f00946'}}/>
                </div>
                <h3>Prisinformation:</h3>
                <h4>Specifikation</h4>
                <p><br/></p>
                <ul className='pricing__container-features'>
                  <li>Från: 000</li>
                  <li>-</li>
                  <li>Till: 000</li>
                </ul>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdAttachMoney value={{ color: '#f00946'}}/>
                </div>
                <h3>Prisinformation:</h3>
                <h4>Specifikation</h4>
                <p><br/></p>
                <ul className='pricing__container-features'>
                <li>Från: 000</li>
                  <li>-</li>
                  <li>Till: 000</li>
                </ul>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdAttachMoney value={{ color: '#f00946'}}/>
                </div>
                <h3>Prisinformation:</h3>
                <h4>Specifikation</h4>
                <p><br/></p>
                <ul className='pricing__container-features'>
                <li>Från: 000</li>
                  <li>-</li>
                  <li>Till: 000</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Priser;