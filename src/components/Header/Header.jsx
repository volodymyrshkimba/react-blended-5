import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { BsCurrencyExchange } from 'react-icons/bs';

import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'reduxState/selectors';
import { SelectRates } from '..';

export const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <BsCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rates"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {baseCurrency && <SelectRates baseCurrency={baseCurrency} />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
