import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

const Movies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h2 className="text-3xl font-bold text-center mb-6">🎬 Movie Booking</h2>

      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />

            <h3 className="p-3 text-lg font-semibold text-center">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
