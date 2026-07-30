import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2 className="text-center mt-10 text-xl">Movie not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden grid md:grid-cols-2">
        {/* Left - Image */}
        <div className="h-full">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>

            <p className="text-gray-600 mb-4">{movie.description}</p>

            {/* Extra details (optional) */}
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Genre:</span> Action / Drama
              </p>
              <p>
                <span className="font-semibold">Duration:</span> 2h 30m
              </p>
              <p>
                <span className="font-semibold">Rating:</span> ⭐ 8.5/10
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate(`/book/${movie.id}`)}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            🎟️ Book Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
