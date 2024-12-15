export default function PackageCard({ packageData }) {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Image Section */}
        <div className="relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${packageData.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        </div>
  
        {/* Package Info Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{packageData.name}</h2>
          <p className="text-sm text-gray-600">{packageData.description}</p>
          <p className="text-xl font-semibold text-blue-600">${packageData.price}</p>
          
          {/* View Details Button */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    );
  }
  