import React from 'react'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Tracking = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className=''>
            <div>
                <nav>
                    <div className=''>
                        <ul className='flex text-black'>
                            <li className=''>Tracking</li>
                            <li className='pl-4'>Schedules</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className='text-black'>
            <form action="click">
                <div>
                    <Input variant="static" placeholder="Enter a tracking ID" />
                </div>
                <div className="flex w-max items-end gap-4 pt-4">
                    <Button className='bg-[#4ED02B] rounded-md hover:shadow-[#4ED02B]-500/40 shadow-[#4ED02B]-500/40 ' size="sm">Track</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Tracking