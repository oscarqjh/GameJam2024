import { Link } from "react-router-dom";
import "../styles/leaderboardPage.css";
import { useEffect, useState } from "react";
import apiService from "../api/apiService";
import NButton from "../component/NButton";
export default function LeaderboardPage() {
  const [scoreData, setScoreData] = useState([]);
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!initialised) {
        setInitialised(true);
        const response = await apiService.getAll();
        // console.log(response.data);
        setScoreData(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="leaderboard-page-wrapper">
        <h1>leaderboard</h1>

        <Link to={"/user"}>
          <NButton label={"Go Home"}></NButton>
        </Link>

        {scoreData.map((item, i) => {
          return (
            <h2 key={i}>
              {i + 1}. {item.username}: {item.score}
            </h2>
          );
        })}
      </div>
    </>
  );
}
