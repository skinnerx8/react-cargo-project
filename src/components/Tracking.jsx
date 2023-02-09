import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Tracking = () => {
  const [trackId, setTrackId] = useState(true);
  const handlerClick = () => {
    setTrackId(!trackId);
  };

  let content;
  if (trackId) {
    content = <TrackingTab/>; 
  } else {
    content = <ShedulesTab/>;
  }

  function TrackingTab(){
        return (
        <div className="text-black">
          <form action="click">
            <div>
              <Input variant="static" placeholder="Enter a tracking ID" />
            </div>
            <div className="flex w-max items-end gap-4 pt-4">
              <Button
                className="bg-[#4ED02B] rounded-md hover:shadow-[#4ED02B]-500/40 shadow-[#4ED02B]-500/40 " size="sm">
                Track
              </Button>
            </div>
          </form>
        </div>
        )
    }

    function ShedulesTab(){
        return (
        <div className="text-black">
          <form action="click">
          <p>From</p>
            <div>
              <Input variant="static" placeholder="Origin" />
            </div>
            <p className="pt-4">To</p>
            <div>
              <Input variant="static" placeholder="Destination" />
            </div>
            <div className="flex w-max items-end gap-4 pt-4">
              <Button
                className="bg-[#4ED02B] rounded-md hover:shadow-[#4ED02B]-500/40 shadow-[#4ED02B]-500/40 " size="sm">
                Search
              </Button>
            </div>
          </form>
        </div>
        )
    }

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="">
        <div className="">
          <div className="text-black">
            <button onClick={handlerClick} className="focus:underline focus:decoration-green-500">Tracking</button>
            <button onClick={handlerClick} className="focus:underline focus:decoration-green-500 p-4">Schedules</button>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
