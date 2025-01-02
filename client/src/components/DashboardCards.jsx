import React from "react";
import BusinessChart from "./BusinessChart";

const DashboardCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
       
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div>Date</div>
       <div>Date </div>
       <div>Sumbit</div>
        <div className="bg-yellow-600 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold ">12,900</h2>
          <p className="">Active Business</p>
        </div>
        <div className="bg-yellow-400 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold">2,900</h2>
          <p>Renewal Business</p>
        </div>
        <div className="bg-yellow-400 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold">500</h2>
          <p>Expired Business</p>
        </div>

        {/* Second Row */}
        <div className=" bg-slate-600 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold">2,12,900</h2>
          <p>New Leads</p>
        </div>
        <div className="bg-yellow-400 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold">12,22,12,900</h2>
          <p>Earnings</p>
        </div>
        <div className="bg-yellow-400 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold">1,000</h2>
          <p>AMC Users</p>
        </div>
      </div>

      <div className=" p-6 rounded shadow w-full">
      
        <h2 className="text-lg font-bold mb-4 text-center">
          Month-wise Business Growth
        </h2>
        
        <BusinessChart />
      </div>
      
      <div className="">NEW Cleient</div>
    </div>
  );
};

export default DashboardCards;
