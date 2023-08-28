import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);

const SinglyLinkedList = ({ size, min = 0, max = 10 }) => {
    const [data, setData] = useState([head]);

    const insertAtBeginning = () => {
        if (data.length >= size) return;

        const node = new Node(Math.floor(Math.random() * max + min));
        node.next = head;
        head = node;

        const new_arr = [node, ...data];
        setData([...new_arr]);
    }

    const insertAtEnd = () => {
        if (data.length >= size || data.length <= 0) return;

        let tmp = head;

        while (tmp.next != null) tmp = tmp.next;

        const node = new Node(Math.floor(Math.random() * max + min));
        tmp.next = node;

        const new_arr = [...data, node];
        setData([...new_arr]);
    }

    const removeFromBeginning = () => {
        if (data.length <= 0) return;

        head = head.next;

        const new_arr = [...data];
        new_arr.shift();
        setData([...new_arr]);
    }

    const removeFromEnd = () => {
        if (data.length <= 0) return;

        let tmp = head;

        if (tmp.next == null) head = null;
        else {
            while (tmp.next.next != null) {
                tmp = tmp.next;
            }

            tmp.next = null;
        }

        const new_arr = [...data];
        new_arr.pop();
        setData([...new_arr]);
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center select-none'>
            <h2 className="text-3xl font-bold mb-10">Linked List</h2>

            <div className='flex gap-2 p-2' style={{ height: "100px", width: "665px" }}>
                {
                    data.map((item, index) => (
                        <div className='flex justify-center items-center gap-2' key={uuidv4()}>
                            <div className="flex justify-center items-center w-full h-full text-white bg-gray-800 font-medium" style={{ width: '100px' }}>{item?.data}</div>
                            <span className={`${item === null ? 'opacity-0' : ''} font-bold text-2xl ${item?.next === null ? 'opacity-0' : ''}`}>-></span>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center items-center gap-2 mt-4' style={{ width: "600px" }}>
                <div className='flex flex-col gap-2'>
                    <button className='bg-gray-800 text-white font-medium px-4 py-2' disabled={data.length >= size} onClick={insertAtBeginning}>Insert At Beginning</button>
                    <button className='bg-gray-800 text-white font-medium px-4 py-2' disabled={data.length <= 0} onClick={removeFromBeginning}>Remove From Beginning</button>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className='bg-gray-800 text-white font-medium px-4 py-2' disabled={data.length >= size || data.length <= 0} onClick={insertAtEnd}>Insert At End</button>
                    <button className='bg-gray-800 text-white font-medium px-4 py-2' disabled={data.length <= 0} onClick={removeFromEnd}>Remove From End</button>
                </div>
            </div>
        </div>
    )
}

export default SinglyLinkedList;