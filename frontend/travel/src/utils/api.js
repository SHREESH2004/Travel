const BASE_URL = 'http://localhost:5000'; // Backend URL in development

export const getPackages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/packages`);
    if (!response.ok) throw new Error('Failed to fetch packages');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPackageDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/packages/${id}`);
    if (!response.ok) throw new Error('Failed to fetch package details');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) throw new Error('Failed to create booking');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
