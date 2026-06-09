import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header
from "./components/Header";

import AllNotifications
from "./pages/AllNotifications";

import PriorityInbox
from "./pages/PriorityInbox";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <AllNotifications />
          }
        />

        <Route
          path="/priority"
          element={
            <PriorityInbox />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;