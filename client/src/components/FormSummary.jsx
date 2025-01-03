import { useLocation } from 'react-router-dom';

function FormSummary() {
  const { state } = useLocation();
  const formData = state?.formData;

  return (
    <div className="flex p-6 font-sans">
      <div className="flex-1 border flex justify-center items-center border-gray-300 p-6 rounded-lg bg-gray-50 max-w-xs mx-auto">Terms And Conditions</div>
      <div className="flex-1 border flex justify-center items-center border-gray-300 p-6 rounded-lg bg-gray-50 max-w-xs mx-auto">Data Policy</div>
      <div className="flex-1 border border-gray-300 p-6 rounded-lg bg-gray-50 max-w-xs mx-auto">
        {formData ? (
          Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex justify-between mb-4">
              <strong className="text-gray-700">{key}:</strong>
              <span className="text-gray-600 break-words">
                {value instanceof File ? value.name : value}
              </span>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default FormSummary;
