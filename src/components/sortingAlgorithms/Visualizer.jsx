import { v4 as uuidv4 } from 'uuid';

const BasicVisualizer = ({ data, start, end, min }) => {
  return (
    <div className="flex justify-center items-end" style={{ height: "425px" }}>
      <div className="flex justify-evenly items-end gap-2 border-gray-800 px-4 pt-4 select-none">
        {
          data.map((item, index) => (
            <div className={` 
                            ${index == start ?
                'bg-green-500' : index == end ?
                  'bg-red-500' : index == min ?
                    'bg-orange-500' : 'bg-gray-800'
              }
                          text-white text-center font-medium p-2 w-10
                          `}
              style={{ height: `${item * 2.5}rem` }} key={uuidv4()}>{item}</div>
          ))
        }
      </div>
    </div>
  )
}

const CompactVisualizer = ({ data, start, end, min }) => {
  return (
    <div className="flex justify-center items-end" style={{ height: "425px" }}>
      <div className="flex justify-evenly items-end border-gray-800 px-4 pt-4 select-none">
        {
          data.map((item, index) => (
            <div className={`${index == start ?
              'bg-green-500' : index == end ?
                'bg-red-500' : index == min ?
                  'bg-orange-500' : 'bg-gray-800'
              }`} style={{ height: `${item * 20}px`, width: '4px' }} key={uuidv4()}>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export { BasicVisualizer, CompactVisualizer }