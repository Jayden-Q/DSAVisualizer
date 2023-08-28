import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

let rear = -1;
let front = -1;

const CircularQueue = ({ size, min = 0, max = 10 }) => {
    const [data, setData] = useState(Array(size).fill(null));

    const isFull = () => {
        if ((front == rear + 1) || (front == 0 && rear == size - 1)) return true;
        return false;
    }

    const isEmpty = () => {
        if (front == -1) return true;
        return false;
    }

    const enqueue = () => {
        if (isFull()) {
            console.log('Queue is full!');
            // setError('Full!');
        } else {
            if (front == -1) front = 0;

            rear = (rear + 1) % size;

            const new_data = [...data];
            new_data[rear] = Math.floor(Math.random() * max + min);
            setData([...new_data]);
        }
    }

    const dequeue = () => {
        let element;

        if (isEmpty()) {
            console.log('Queue is empty!');
        } else {
            element = data[front];

            if (front == rear) {
                const new_data = [...data];
                new_data[front] = null;
                setData([...new_data]);
                
                front = -1;
                rear = -1;
            } else {
                const new_data = [...data];
                new_data[front] = null;
                setData([...new_data]);

                front = (front + 1) % size;
            }
        }
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center select-none'>
            <h2 className="text-3xl font-bold mb-10">Circular Queue</h2>

            <div className='flex flex-col items-start mb-10' style={{ width: '400px' }}>
                <div className='flex justify-center items-center gap-2'>
                    <div className='w-5 h-5 bg-red-500'></div>
                    <span>Front</span>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div className='w-5 h-5 bg-green-500'></div>
                    <span>Rear</span>
                </div>
            </div>

            <div className='flex justify-end items-center gap-2 border-y-2 border-gray-800 p-2' style={{ height: "100px", width: "400px" }}>
                {
                    data.map((item, index) => (
                        <div className={`${item === null ? 'opacity-0' : ''} ${index === rear ? 'bg-green-500' : index === front ? 'bg-red-500' : ''} flex justify-center items-center w-full h-full text-white bg-gray-800 font-medium`} key={uuidv4()}>{item}</div>
                    ))
                }
            </div>
            <div className='mt-4'>
                <button className='bg-gray-800 text-white font-medium px-4 py-2' disabled={isFull()} onClick={enqueue}>Enqueue</button>
                <button className='bg-gray-800 text-white font-medium px-4 py-2 ml-2' disabled={isEmpty()} onClick={dequeue}>Dequeue</button>
            </div>
        </div>
    )
}

export default CircularQueue;