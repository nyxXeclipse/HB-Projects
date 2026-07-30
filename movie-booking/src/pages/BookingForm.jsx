import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit number";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Pass data to confirmation page
      navigate("/confirmation", {
        state: { ...form, movieId: id },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          🎟️ Book Your Seat
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-indigo-400"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-indigo-400"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.mobile
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-indigo-400"
              }`}
              placeholder="Enter 10-digit mobile number"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
