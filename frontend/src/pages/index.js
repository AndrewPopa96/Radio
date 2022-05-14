import { useEffect, useState } from "react";
import Plyr from "plyr-react";
import axios from "axios";

import Card from "../components/elements/Card";
import Main from "../components/Screen/Main";
import Grid from "../components/elements/Grid";

const Homepage = () => {
  const [storage, setStorage] = useState("");
  const [data, setData] = useState(false);

  useEffect(() => {
    setStorage(localStorage.getItem("userInfo"));
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const fetchData = async () => {
      const chunk = await axios.get(
        "http://localhost:5000/api/videos/retrieve",
        {},
        config
      );
      setData(chunk);
      // console.log(chunk);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <Main>
      this is the homepagetest
      {/* to be replaced with grid */}
      <Grid>
        {data &&
          data.data &&
          data.data.map(item => (
            <Card>
              {item.title}
              <Plyr source={`https://www.youtube.com/watch?v=`} />
            </Card>
          ))}
      </Grid>
      {storage && (
        <button
          onClick={() => {
            localStorage.removeItem("userInfo");
            setStorage(false);
          }}
        >
          Logout
        </button>
      )}
    </Main>
  );
};

export default Homepage;
