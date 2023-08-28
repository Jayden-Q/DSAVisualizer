import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, SortingAlgorithms, SearchingAlgorithms, DataStructures } from './pages';

const App = () => {
  return (
    <Router>
      <div className='font-montserrat'>
        <div className="max-w-screen-lg mx-auto">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/sorting-algorithms" element={<SortingAlgorithms />} />
            <Route path="/searching-algorithms" element={<SearchingAlgorithms />} />
            <Route path="/data-structures" element={<DataStructures />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App