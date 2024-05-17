import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard/Dashboard';
import TableOne from './components/Tables/TableOne';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Ethiopian National COC Dashboard " />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/table"
          element={
            <>
              <PageTitle title="Table" />
              <TableOne />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
