export default function PackageDetails({ params }) {
    const { id } = params;
  
    return (
      <div>
        <h1 className="text-3xl font-bold">Package Details</h1>
        <p>Details for package ID: {id}</p>
      </div>
    );
  }
  