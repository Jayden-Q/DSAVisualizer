import { useState } from 'react';

import { BasicVisualizer, CompactVisualizer } from './Visualizer';

const InsertionSort = ({ size }) => {
    let [data, setData] = useState(Array(size).fill(0).map(i => Math.floor(Math.random() * 10 + 1)));
    const [data2, setData2] = useState(Array(500).fill(0).map(i => Math.random() * 20 + 1));
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const randomize = () => {
        setData(Array(size).fill(0).map(i => Math.floor(Math.random() * max + min)));
        setSwappedIndices([]);
    }

    const sort = (arr, setArr) => {
        setIsSorting(true);
        
        const new_arr = [...arr];
        
        let i = 1;
        let j = i - 1;
        let key = new_arr[i];

        const timer = setInterval(() => {
            if (i < data.length) {
                setSwappedIndices([i, j]);

                if (key < new_arr[j] && j >= 0) {
                    new_arr[j + 1] = new_arr[j];
                    setArr([...new_arr]);
                    j--;
                } else {
                    i++;
                    key = new_arr[i];
                    j = i - 1;
                }

                new_arr[j + 1] = key;
            } else {
                clearInterval(timer);
                setIsSorting(false);
                setSwappedIndices([]);
            }
        }, 100);
    }
   
    return (
        <div className='flex flex-col justify-center items-center my-80'>
            <h2 className="text-3xl font-bold mb-5">Insertion Sort</h2>
            <BasicVisualizer data={data} start={swappedIndices[0]} end={swappedIndices[1]} />
            <div className='mt-4 mb-40'>
                <button className='bg-gray-800 text-white font-medium px-4 py-2' onClick={randomize} disabled={isSorting}>Randomize</button>
                <button className='bg-gray-800 text-white font-medium px-4 py-2 ml-2' onClick={() => sort(data, setData)} disabled={isSorting}>Sort</button>
            </div>
            <CompactVisualizer data={data2} />
            <div className='mt-4'>
                <button className='bg-gray-800 text-white font-medium px-4 py-2' onClick={randomize} disabled={isSorting}>Randomize</button>
                <button className='bg-gray-800 text-white font-medium px-4 py-2 ml-2' onClick={() => sort(data2, setData2)} disabled={isSorting}>Sort</button>
            </div>
        </div>
    )
}

export default InsertionSort;