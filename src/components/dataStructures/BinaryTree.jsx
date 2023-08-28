import { useState, Fragment, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.id = uuidv4();
    }

    traverse() {
        const nodes = [];

        nodes.push(this);

        if (this.left) {
            nodes.push(this.left);
            nodes.push(...this.left.traverse());
        }
        if (this.right) {
            nodes.push(this.right);
            nodes.push(...this.right.traverse());
        }

        return nodes;
    }
}

let head = new Node(4);
let left = new Node(2);
let right = new Node(5);
let leftleft = new Node(9);
let leftright = new Node(6);
let rightleft = new Node(2);
let rightright = new Node(8);

head.left = left;
head.right = right;
head.left.left = leftleft;
head.left.right = leftright;
head.right.left = rightleft;
head.right.right = rightright;

const BinaryTree = ({ size, min = 0, max = 10 }) => {
    const [data, setData] = useState(head);
    const [selectedNode, setSelectedNode] = useState(null);

    const addLeft = () => {
        if (!selectedNode) return;
        if (selectedNode.left != null) return;

        const node = new Node(Math.floor(Math.random() * max + min));
        selectedNode.left = node;

        setData({ ...head });
    }

    const addRight = () => {
        if (!selectedNode) return;
        if (selectedNode.right != null) return;

        const node = new Node(Math.floor(Math.random() * max + min));
        selectedNode.right = node;

        setData({ ...head });
    }

    const remove = () => {
        if (!selectedNode) return;

        const nodes = head.traverse();

        let node1 = nodes.find(node => node?.left?.id === selectedNode.id);
        let node2 = nodes.find(node => node?.right?.id === selectedNode.id);

        if (node1) {
            node1.left = null;
        } else if (node2) {
            node2.right = null;
        }

        setData({ ...head });
    }

    const selectNode = (node) => {
        if (selectedNode === node) {
            setSelectedNode(null);
            return;
        }

        setSelectedNode(node);
    }

    const renderTree = (node) => {
        if (!node) return;

        const childNodes = (node.left ? 1 : 0) + (node.right ? 1 : 0);

        return (
            <div className='flex flex-col items-center mx-5' key={uuidv4()}>
                <div className={`${selectedNode === node ? 'bg-green-400' : ''} rounded-full flex justify-center items-center border-2 border-gray-800 font-medium text-xl mb-5`} style={{ width: '75px', height: '75px' }} onClick={() => selectNode(node)}>{node.data}</div>
                <div className='flex justify-between'>
                    {renderTree(node.left)}
                    {childNodes == 1 && <div style={{ width: '100px' }}></div>}
                    {renderTree(node.right)}
                </div>
            </div>
        )
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center select-none'>
            <h2 className="text-3xl font-bold mb-10">Binary Tree</h2>
            {renderTree(head)}
            <div className='flex justify-center items-center gap-2 mt-10' style={{ width: "600px" }}>
                <button className='bg-gray-800 text-white font-medium px-4 py-2' onClick={addLeft} disabled={selectedNode === null}>Add Left</button>
                <button className='bg-gray-800 text-white font-medium px-4 py-2 ml-2' onClick={addRight} disabled={selectedNode === null}>Add Right</button>
            </div>
            <div className='mt-2'>
                <button className='bg-gray-800 text-white font-medium px-4 py-2 ml-2' onClick={remove} disabled={selectedNode === null}>Remove</button>
            </div>
        </div>
    )
}

export default BinaryTree;