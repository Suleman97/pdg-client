import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { pages, NotFound } from 'pages';
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
              path={page.path}
              component={page.component}
              exact
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
    <Footer />
  </div>
);
