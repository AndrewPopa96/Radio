import { useEffect, useState } from "react";

import Main from "../components/Screen/Main";

const Homepage = () => {
  const [storage, setStorage] = useState("");
  useEffect(() => {
    setStorage(localStorage.getItem("userInfo"));
  }, []);

  return (
    <Main>
      this is the homepagetest
      <br />
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
