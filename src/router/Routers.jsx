import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Top } from "./../components/pages/Top";
import { Users } from "./../components/pages/Users";
import { DefaultLayout } from "./../components/templates/DefaultLayout";
import { HeaderOnly } from "./../components/templates/HeaderOnly";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <DefaultLayout>
                <Top />
              </DefaultLayout>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <HeaderOnly>
                  <Users />
                </HeaderOnly>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
