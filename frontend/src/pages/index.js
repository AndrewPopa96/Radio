import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../components/elements/Card";
import Row from "../components/elements/Row";
import Column from "../components/elements/Column";
import Main from "../components/Screen/Main";
import Grid from "../components/elements/Grid";
import MediaPlayer from "../components/elements/MediaPlayer";

const Homepage = () => {
  const [storage, setStorage] = useState("");
  const [data, setData] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    data && data.data && setPlaying(data.data[0]);
  }, [data.data]);

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
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Main>
      <Row>
        <Column>
          {data && data.data && (
            <h2>Now playing: {playing && playing.title}</h2>
          )}
          {playing && <MediaPlayer autoplay src={playing && playing.link} />}
        </Column>
        <Column>
          {data &&
            data.data &&
            data.data.map((item, index) => (
              <Card onClick={() => setPlaying(item)} key={`song-${index}`}>
                <MediaPlayer
                  variant={["inline"]}
                  title={item.title}
                  playable={false}
                  src={item.link}
                />
              </Card>
            ))}
        </Column>
      </Row>
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
