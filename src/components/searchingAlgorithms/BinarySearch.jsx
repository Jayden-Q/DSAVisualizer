import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

const BinarySearch = ({ size }) => {
    const [data, setData] = useState(Array(size).fill(0).map((item, i) => i + 1));
    const [isSearching, setIsSearching] = useState(false);
    const [numberToSearch, setNumberToSearch] = useState('');
    const [foundNumberIndex, setFoundNumberIndex] = useState(null);
    const [pointers, setPointers] = useState([]);

    const search = (e) => {
        e.preventDefault();

        if (numberToSearch.trim() === '') return;

        setPointers([]);
        setIsSearching(true);
        setFoundNumberIndex(numberToSearch);

        let low = 0;
        let high = data.length - 1;
        let mid = Math.floor(low + (high - low) / 2);

        setPointers([low, mid, high]);

        const x = parseInt(numberToSearch);
        
        const intervalId = setInterval(() => {
            if (low <= high) {
                mid = Math.floor((low + high) / 2);
                setPointers([low, mid, high]);
                
                if (data[mid] == x) {
                    clearInterval(intervalId);
                    setIsSearching(false);
                    setPointers([]);
                    setFoundNumberIndex(mid);
                    return;
                }
                else if (data[mid] < x) low = mid + 1;
                else high = mid - 1;
                
            } else {
                clearInterval(intervalId);
                setIsSearching(false);
                setPointers([]);
            }
        }, 500);
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center select-none'>
            <h2 className="text-3xl font-bold mb-10">Binary Search</h2>
            <div className="flex gap-2">
                {
                    data.map((item, i) => (
                        <div className={`flex justify-center items-center ${foundNumberIndex === i ? 'bg-green-400' : i === pointers[0] ? 'bg-red-500' : i === pointers[1] ? 'bg-orange-400' : i === pointers[2] ? 'bg-red-500' : 'bg-gray-800' } text-white text-lg font-medium`} style={{ width: '75px', height: '75px' }} key={uuidv4()}>
                            {item}    
                        </div>
                    ))
                }
            </div>
            <form className='flex justify-center items-center gap-2 mt-8' style={{ width: "600px" }} onSubmit={search}>
                <input type="text" placeholder="Enter a number" id="to-search" className="bg-gray-100 outline-none border border-gray-800 px-4 py-2" value={numberToSearch} onChange={e => setNumberToSearch(e.target.value)} disabled={isSearching} />
                <button className='bg-gray-800 text-white border border-gray-800 font-medium px-4 py-2' disabled={isSearching}>Search</button>
            </form>
        </div>
    )
}

export default BinarySearch;