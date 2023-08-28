import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const Stack = ({ size, min = 0, max = 10 }) => {
  const [data, setData] = useState(Array(size).fill(0).map(i => Math.floor(Math.random() * max + min)));
  const [top, setTop] = useState(null);

  const add = () => {
    if (data.length >= max) return;
    
    setData([Math.floor(Math.random() * max + min), ...data]);
    setTop(0);
  }

  const remove = () => {
    if (data.length <= min) return;

    setData(data.slice(1, data.length));
    setTop(null);
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center select-none'>
      <h2 className="text-3xl font-bold mb-10">Stack</h2>

      <div className='flex flex-col justify-end items-center gap-2 border-2 border-t-0 border-gray-800 p-2' style={{ height: "300px", width: "200px" }}>
        {
          data.map((item, index) => (
            <div className={`flex justify-center items-center w-full h-12 ${index == top ? 'bg-green-500' : 'bg-gray-800'} text-white font-medium`} key={uuidv4()}>{item}</div>
          ))
        }
      </div>
      <div className='mt-4'>
        <button className='bg-gray-800 text-white font-medium px-4 py-2' disabled={data.length >= size} onClick={add}>Add</button>
        <button className='bg-gray-800 text-white font-medium px-4 py-2 ml-2' disabled={data.length <= 0} onClick={remove}>Remove</button>
      </div>
    </div>
  )
}

export default Stack