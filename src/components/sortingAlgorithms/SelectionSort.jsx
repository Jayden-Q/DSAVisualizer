import { useState } from 'react';

import { BasicVisualizer, CompactVisualizer } from './Visualizer';

const SelectionSort = ({ size }) => {
    let [data, setData] = useState(Array(size).fill(0).map(i => Math.floor(Math.random() * 10 + 1)));
    const [data2, setData2] = useState(Array(500).fill(0).map(i => Math.random() * 20 + 1));
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [minVal, setMinVal] = useState(null);

    const randomize = () => {
        setData(Array(size).fill(0).map(i => Math.floor(Math.random() * max + min)));
        setSwappedIndices([]);
    }

    const sort = (arr, setArr) => {
        setIsSorting(true);

        const sorted_array = [...arr];
        const n = sorted_array.length;

        let i = 0;
        let j = i + 1;
        let min_idx = i;

        const timer = setInterval(() => {
            if (i < n - 1) {
                setSwappedIndices([i, j]);

                if (j < n) {
                    if (sorted_array[j] < sorted_array[min_idx]) {
                        min_idx = j;
                        setMinVal(min_idx);
                    }
                    j++;
                } else {
                    [sorted_array[i], sorted_array[min_idx]] = [sorted_array[min_idx], sorted_array[i]];
                    setArr([...sorted_array]);
                    setMinVal(null);
                    i++;
                    j = i + 1;
                    min_idx = i;
                }
            } else {
                clearInterval(timer);
                setIsSorting(false);
                setSwappedIndices([]);
                setMinVal(null);
            }
        }, 100);
    }
   
    return (
        <div className='flex flex-col justify-center items-center my-80'>
            <h2 className="text-3xl font-bold mb-5">Selection Sort</h2>
            <BasicVisualizer data={data} start={swappedIndices[0]} end={swappedIndices[1]} min={minVal} />
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

export default SelectionSort;