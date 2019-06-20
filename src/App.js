import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PageLoader from 'components/PageLoader';

import MyErrorBoundary from './ErrorBoundary';

const Login = React.lazy(() => import('containers/Login'));
const Dashboard = React.lazy(() => import('containers/Dashboard'));

function App() {
  console.log(process.env.NODE_ENV);

  return (
    <>
      <MyErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Route path="/" exact component={Login} />

          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Suspense>
      </MyErrorBoundary>
    </>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
