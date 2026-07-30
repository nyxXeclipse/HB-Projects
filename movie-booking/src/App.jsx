import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
