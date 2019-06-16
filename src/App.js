import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import PageLoader from 'components/PageLoader';

import MyErrorBoundary from './ErrorBoundary';

const Login = React.lazy(() => import('containers/Login'));
const Dashboard = React.lazy(() => import('containers/Dashboard'));

function App() {
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

export default App;
