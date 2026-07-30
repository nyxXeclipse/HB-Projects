import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  // Generate random booking ID
  const bookingId = "BK" + Math.floor(Math.random() * 1000000);

  // If no data (user refresh issue)
  if (!data) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl">No booking data found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        {/* Success Icon */}
        <div className="text-5xl mb-4">🎉</div>

        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Booking Confirmed!
        </h2>

        <p className="text-gray-600 mb-6">
          Your ticket has been successfully booked.
        </p>

        {/* Booking Details */}
        <div className="bg-gray-100 rounded-lg p-4 text-left space-y-2 mb-6">
          <p>
            <span className="font-semibold">Booking ID:</span> {bookingId}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {data.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {data.email}
          </p>
          <p>
            <span className="font-semibold">Mobile:</span> {data.mobile}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
        >
          🎬 Book Another Movie
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
