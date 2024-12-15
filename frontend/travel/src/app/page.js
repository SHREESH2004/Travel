import PackageCard from '@/components/PackageCard';


export default function HomePage() {
  const packages = [
    // Indian Places
    { id: 1, name: 'Taj Mahal Visit', price: 199, description: 'Explore the iconic Taj Mahal in Agra.', image: '/images/taj-mahal.jpg' },
    { id: 2, name: 'Goa Beach Getaway', price: 149, description: 'Relax at the beautiful beaches of Goa.', image: '/images/goa.jpg' },
    { id: 3, name: 'Kerala Backwaters', price: 299, description: 'Cruise through the tranquil backwaters of Kerala.', image: '/images/kerala.jpg' },
    { id: 4, name: 'Rajasthan Royal Tour', price: 399, description: 'Experience the royal heritage of Rajasthan.', image: '/images/rajasthan.jpg' },
    { id: 5, name: 'Leh-Ladakh Adventure', price: 499, description: 'A thrilling adventure in the mountains of Ladakh.', image: '/images/ladakh.jpg' },
    { id: 6, name: 'Varanasi Spiritual Journey', price: 150, description: 'Explore the spiritual heart of India in Varanasi.', image: '/images/varanasi.jpg' },
    { id: 7, name: 'Shimla Hill Station', price: 249, description: 'Enjoy a peaceful getaway in Shimla.', image: '/images/shimla.jpg' },
    { id: 8, name: 'Darjeeling Tea Gardens', price: 199, description: 'Explore the scenic tea gardens of Darjeeling.', image: '/images/darjeeling.jpg' },
    { id: 9, name: 'Sikkim Adventure', price: 399, description: 'Trek through the mountains of Sikkim.', image: '/images/sikkim.jpg' },
    { id: 10, name: 'Andaman Islands', price: 599, description: 'Experience the pristine beaches and crystal-clear waters.', image: '/images/andaman.jpg' },

    // International Places
    { id: 11, name: 'Himalayan Adventure', price: 299, description: 'A thrilling journey through the Himalayas.', image: '/images/himalayan-adventure.jpg' },
    { id: 12, name: 'Beach Escape (Maldives)', price: 199, description: 'Relax on the serene beaches of the Maldives.', image: '/images/beach-escape.jpg' },
    { id: 13, name: 'European Escape', price: 499, description: 'Explore Europe with luxury and style.', image: '/images/european-escape.jpg' },
    { id: 14, name: 'African Safari', price: 599, description: 'Experience the wild side of Africa.', image: '/images/african-safari.jpg' },
    { id: 15, name: 'Australian Expedition', price: 399, description: 'Explore the land down under.', image: '/images/australian-expedition.jpg' },
    { id: 16, name: 'Tropical Island (Bora Bora)', price: 259, description: 'Relax in tropical paradise in Bora Bora.', image: '/images/tropical-island.jpg' },
    { id: 17, name: 'American Road Trip', price: 349, description: 'Hit the road across the USA.', image: '/images/american-road-trip.jpg' },
    { id: 18, name: 'Japanese Culture Tour', price: 450, description: 'Discover the wonders of Japan.', image: '/images/japanese-culture-tour.jpg' },
    { id: 19, name: 'Mountain Trekking (Swiss Alps)', price: 299, description: 'Conquer the highest peaks in the Swiss Alps.', image: '/images/mountain-trekking.jpg' },
    { id: 20, name: 'Caribbean Cruise', price: 650, description: 'Set sail to beautiful islands.', image: '/images/caribbean-cruise.jpg' },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-20 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 transition-transform transform hover:scale-105">Discover Your Next Adventure</h1>
        <p className="text-lg mb-6">Explore the best travel packages and create unforgettable memories.</p>
        <button className="bg-blue-600 px-6 py-3 rounded-lg text-xl hover:bg-blue-700 transition-colors transform hover:scale-110">
          Start Your Journey
        </button>
      </section>

      {/* Package Filters Section */}
      <section className="flex justify-center space-x-8 py-6">
        <button className="bg-gray-200 px-4 py-2 rounded-lg text-lg hover:bg-gray-300 transition-colors">All</button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg text-lg hover:bg-gray-300 transition-colors">Adventure</button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg text-lg hover:bg-gray-300 transition-colors">Relaxation</button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg text-lg hover:bg-gray-300 transition-colors">Luxury</button>
      </section>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} packageData={pkg} />
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-lg text-gray-700 mb-4">"The Himalayan Adventure was the trip of a lifetime. The views were breathtaking!"</p>
            <div className="flex items-center space-x-4">
              <img src="/images/avatar1.jpg" alt="Customer 1" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Alice Walker</p>
                <p className="text-gray-600">Traveler</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-lg text-gray-700 mb-4">"Our Beach Escape to Maldives was so relaxing. Truly paradise!"</p>
            <div className="flex items-center space-x-4">
              <img src="/images/avatar2.jpg" alt="Customer 2" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">John Smith</p>
                <p className="text-gray-600">Traveler</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-lg text-gray-700 mb-4">"The African Safari was an unforgettable experience. Highly recommend!"</p>
            <div className="flex items-center space-x-4">
              <img src="/images/avatar3.jpg" alt="Customer 3" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Mark Lee</p>
                <p className="text-gray-600">Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">What is included in the packages?</h3>
            <p className="text-gray-600">Each package includes accommodation, meals, and guided tours. Some packages may include additional perks like airfare and transportation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Are there any group discounts?</h3>
            <p className="text-gray-600">Yes, we offer group discounts for bookings of 5 or more people. Contact us for more details.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">How can I book a package?</h3>
            <p className="text-gray-600">Simply click on a package to learn more and book directly on our website.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
