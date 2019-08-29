import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Spinner from './Spinner/Spinner';
import Header from './header/Header';
import Main from '../pages/MyChatPage';
import Footer from './footer/Footer';

// configs
import routes from '../configs/routes';
// styles
import styles from './App.module.css';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const AsyncAboutPage = lazy(() =>
  import('../pages/AboutPage' /* webpackChunkName: "about-page" */),
);

const AsyncContactPage = lazy(() =>
  import('../pages/ContactPage' /* webpackChunkName: "contact-page" */),
);

const App = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Header />
    </header>
    <main className={styles.main}>
      <Suspense fallback={Spinner}>
        <Switch>
          <Route exact path={routes.MAIN} component={Main} />
          <Route exact path={routes.HOME} component={AsyncHomePage} />
          <Route exact path={routes.ABOUT} component={AsyncAboutPage} />
          <Route exact path={routes.CONTACT} component={AsyncContactPage} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </main>
    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
);

export default App;
