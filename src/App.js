import {AdminBook, UserBook} from './pages'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// buat router
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<UserBook />} />
        <Route path="admin" element={<AdminBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
