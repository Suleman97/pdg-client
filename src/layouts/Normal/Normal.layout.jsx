import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { pages } from 'pages';
import { Header, Footer } from 'components';

export const NormalLayout = () => (
  <div className="normal-layout">
    <Header />
    <div className="normal-layout__content">
      <Suspense fallback={<>Loading....</>}>
        <Switch>
          {pages.map((page) => (
            <Route
              key={page.path}
              excat
              path={page.path}
              component={page.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
    <Footer />
  </div>
);
