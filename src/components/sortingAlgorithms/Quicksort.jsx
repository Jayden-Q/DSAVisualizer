import { useState } from 'react';

import { BasicVisualizer, CompactVisualizer } from './Visualizer';

const Quickstort = ({ size }) => {
    const [data, setData] = useState(Array(size).fill(0).map(i => Math.floor(Math.random() * 10 + 1)));
    const [data2, setData2] = useState(Array(500).fill(0).map(i => Math.random() * 20 + 1));
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const randomize = () => {
        setData(Array(size).fill(0).map(i => Math.floor(Math.random() * max + min)));
        setSwappedIndices([]);
    }

    const sort = (arr, setArr) => {
        const new_arr = [...arr];

        setIsSorting(true);

        const len = new_arr.length;
        let currentSize = 1;

        const merge = (arr, start, mid, end) => {
            const leftArr = arr.slice(start, mid + 1);
            const rightArr = arr.slice(mid + 1, end + 1);

            let leftIndex = 0;
            let rightIndex = 0;
            let arrIndex = start;

            while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
                if (leftArr[leftIndex] <= rightArr[rightIndex]) {
                    arr[arrIndex] = leftArr[leftIndex];
                    leftIndex++;
                } else {
                    arr[arrIndex] = rightArr[rightIndex];
                    rightIndex++;
                }
                arrIndex++;
                setArr([...arr]);
            }

            while (leftIndex < leftArr.length) {
                arr[arrIndex] = leftArr[leftIndex];
                leftIndex++;
                arrIndex++;
                setArr([...arr]);
            }

            while (rightIndex < rightArr.length) {
                arr[arrIndex] = rightArr[rightIndex];
                rightIndex++;
                arrIndex++;
                setArr([...arr]);
            }
        }

        const mergePass = () => {
            for (let start = 0; start < len - 1; start += 2 * currentSize) {
                const mid = Math.min(start + currentSize - 1, len - 1);
                const end = Math.min(start + 2 * currentSize - 1, len - 1);
                merge(new_arr, start, mid, end);
            }

            currentSize *= 2;

            if (currentSize >= len) {
                clearInterval(intervalId);
                setIsSorting(false);
            }
        }

        const intervalId = setInterval(mergePass, 100);
    }

    return (
        <div className='flex flex-col justify-center items-center my-80'>
            <h2 className="text-3xl font-bold mb-5">Quicksort</h2>
            <BasicVisualizer data={data} start={swappedIndices[0]} end={swappedIndices[1]} min={swappedIndices[2]} />
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

export default Quickstort;