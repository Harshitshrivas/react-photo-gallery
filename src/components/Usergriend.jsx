import React from "react";
import Card from "./Card";

const UserGrid = ({ userdata }) => {
  if (userdata.length === 0) {
    return null; // jab tak data nahi aaya, kuch mat dikhao (Loader App me hoga)
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {userdata.map((elem, idx) => (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      ))}
    </div>
  );
};

export default UserGrid;

