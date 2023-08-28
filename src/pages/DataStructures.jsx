import React from 'react'

import { Stack, Queue, SinglyLinkedList, BinaryTree, CircularQueue } from '../components/dataStructures';

const DataStructures = () => {
  return (
    <div>
        <Stack size={5} />
        <Queue size={5} />
        <SinglyLinkedList size={5} />
        <BinaryTree size={5} />
        <CircularQueue size={5} />
    </div>
  )
}

export default DataStructures;