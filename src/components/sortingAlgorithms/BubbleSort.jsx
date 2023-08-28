import { useState } from 'react';

import { BasicVisualizer, CompactVisualizer } from './Visualizer';

const BubbleSort = ({ size }) => {
    const [data, setData] = useState(Array(size).fill(0).map(i => Math.floor(Math.random() * 10 + 1)));
    const [data2, setData2] = useState(Array(500).fill(0).map(i => Math.random() * 20 + 1));
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const randomize = () => {
        setData(Array(size).fill(0).map(i => Math.floor(Math.random() * max + min)));
        setSwappedIndices([]);
    }

    const sort = (arr, setArr) => {
        setIsSorting(true);

        const sorted_array = [...arr];
        const n = sorted_array.length;

        let i = 0;
        let j = 0;
        let is_swapped = false;

        const timer = setInterval(() => {
            if (i < n - 1) {
                setSwappedIndices([j, j + 1]);

                if (j < n - i - 1) {
                    if (sorted_array[j] > sorted_array[j + 1]) {
                        const tmp = sorted_array[j];
                        sorted_array[j] = sorted_array[j + 1];
                        sorted_array[j + 1] = tmp;
                        is_swapped = true;
                        setArr([...sorted_array]);
                    }
                    j++;
                } else {
                    if (!is_swapped) {
                        clearInterval(timer);
                        setIsSorting(false);
                        setSwappedIndices([]);
                    }
                    i++;
                    j = 0;
                    is_swapped = false;
                }
            } else {
                clearInterval(timer);
                setIsSorting(false);
                setSwappedIndices([]);
            }
        }, 100);
    }

    return (
        <div className='flex flex-col justify-center items-center mt-40 mb-80'>
            <h2 className="text-3xl font-bold mb-5">Bubble Sort</h2>
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

export default BubbleSort;