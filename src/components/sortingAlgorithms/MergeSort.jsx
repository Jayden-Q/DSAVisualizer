import { startTransition, useState } from 'react';

import { BasicVisualizer, CompactVisualizer } from './Visualizer';

const MergeSort = ({ size }) => {
    const [data, setData] = useState(Array(size).fill(0).map(i => Math.floor(Math.random() * 10 + 1)));
    const [data2, setData2] = useState(Array(200).fill(0).map(i => Math.random() * 20 + 1));
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const randomize = (arr) => {
        setData([...arr].map(i => Math.floor(Math.random() * 10 + 1)));
        setSwappedIndices([]);
    }

    const sort = (arr, setArr) => {
        const new_arr = [...arr];

        setIsSorting(true);

        const len = new_arr.length;
        let currentSize = 1;

        let start = 0;
        let mid = Math.min(start + currentSize - 1, len - 1);
        let end = Math.min(start + 2 * currentSize - 1, len - 1);

        let leftArr = new_arr.slice(start, mid + 1);
        let rightArr = new_arr.slice(mid + 1, end + 1);

        let leftIndex = 0;
        let rightIndex = 0;

        let arrIndex = start;

        const intervalId = setInterval(() => {
            if (start < len - 1) {
                if (leftIndex < leftArr.length && rightIndex < rightArr.length) {
                    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
                        new_arr[arrIndex] = leftArr[leftIndex];
                        leftIndex++;
                    } else {
                        new_arr[arrIndex] = rightArr[rightIndex];
                        rightIndex++;
                    }
                    arrIndex++;
                    setArr([...new_arr]);
                } else if (leftIndex < leftArr.length) {
                    new_arr[arrIndex] = leftArr[leftIndex];
                    leftIndex++;
                    arrIndex++;
                    setArr([...new_arr]);

                } else if (rightIndex < rightArr.length) {
                    new_arr[arrIndex] = rightArr[rightIndex];
                    rightIndex++;
                    arrIndex++;
                    setArr([...new_arr]);

                } else {
                    start += 2 * currentSize;

                    mid = Math.min(start + currentSize - 1, len - 1);
                    end = Math.min(start + 2 * currentSize - 1, len - 1);
    
                    leftArr = new_arr.slice(start, mid + 1);
                    rightArr = new_arr.slice(mid + 1, end + 1);
    
                    leftIndex = 0;
                    rightIndex = 0;

                    arrIndex = start;
                }

                // setSwappedIndices([start, end, arrIndex]);
            } else {
                start = 0;

                mid = Math.min(start + currentSize - 1, len - 1);
                end = Math.min(start + 2 * currentSize - 1, len - 1);

                leftArr = new_arr.slice(start, mid + 1);
                rightArr = new_arr.slice(mid + 1, end + 1);

                leftIndex = 0;
                rightIndex = 0;

                arrIndex = start;
                
                // setSwappedIndices([start, end, arrIndex]);
            
                currentSize *= 2;

                // if (currentSize >= len) {
                //     clearInterval(intervalId);
                //     setIsSorting(false);
                // }

                // if (currentSize >= 64) {
                //     clearInterval(intervalId);
                //     setIsSorting(false);
                //     setSwappedIndices([]);
                // }
            }
        }, 1);
    }

    return (
        <div className='flex flex-col justify-center items-center my-80'>
            <h2 className="text-3xl font-bold mb-5">Merge Sort</h2>
            <BasicVisualizer data={data} start={swappedIndices[0]} end={swappedIndices[1]} min={swappedIndices[2]} />
            <div className='mt-4 mb-40'>
                <button className='bg-gray-800 text-white font-medium px-4 py-2' onClick={() => randomize(data)} disabled={isSorting}>Randomize</button>
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

export default MergeSort;