import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// components
// import Spinner from './Spinner/Spinner';
import Header from './Header/Header';
import Main from '../pages/MyChatPage';
import Footer from './Footer/Footer';
import Login from './Login/Login';

// configs
import routes from '../configs/routes';
// styles
import styles from './App.module.css';
import { authSelectors, authActions } from '../redux/auth';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const AsyncAboutPage = lazy(() =>
  import('../pages/AboutPage' /* webpackChunkName: "about-page" */),
);

const AsyncContactPage = lazy(() =>
  import('../pages/ContactPage' /* webpackChunkName: "contact-page" */),
);

const App = ({ user, signIn }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Header />
    </header>
    <main className={styles.main}>
      {!user ? (
        <Login signIn={signIn} />
      ) : (
        <Suspense>
          <Switch>
            <Route exact path={routes.MAIN} component={Main} />
            <Route exact path={routes.HOME} component={AsyncHomePage} />
            <Route exact path={routes.ABOUT} component={AsyncAboutPage} />
            <Route exact path={routes.CONTACT} component={AsyncContactPage} />

            <Redirect to="/" />
          </Switch>
        </Suspense>
      )}
    </main>
    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
);

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  signIn: authActions.signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
