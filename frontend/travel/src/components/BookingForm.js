export default function BookingForm() {
    const handleSubmit = (event) => {
      event.preventDefault();
      alert('Booking submitted!');
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="border rounded w-full p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="border rounded w-full p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tour Package</label>
          <select className="border rounded w-full p-2">
            <option value="Himalayan Adventure">Himalayan Adventure</option>
            <option value="Beach Escape">Beach Escape</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Book Now
        </button>
      </form>
    );
  }
  