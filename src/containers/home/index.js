import { Link } from "react-router-dom";

function Home() {
  console.log("DBEUG");
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link to="../verification">verification</Link>
    </div>
  );
}

export default Home;
