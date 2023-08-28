import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Link to="/sorting-algorithms">Sorting Algorithms</Link>
      <Link to="/searching-algorithms">Searching Algorithms</Link>
      <Link to="/data-structures">Data Structures</Link>
    </main>
  )
}

export default Home;