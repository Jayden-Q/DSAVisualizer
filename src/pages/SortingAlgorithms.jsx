import React from 'react'

import { BubbleSort, InsertionSort, MergeSort, SelectionSort, Quicksort } from '../components/sortingAlgorithms';

const SortingAlgorithms = () => {
  return (
    <div>
        <BubbleSort size={20} />
        <SelectionSort size={20} />
        <InsertionSort size={20} />
        <MergeSort size={25} />
        <Quicksort size={25} />
    </div>
  )
}

export default SortingAlgorithms;