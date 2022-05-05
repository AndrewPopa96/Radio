import { useEffect, useState } from "react";

const Homepage = () => {
  const [storage, setStorage] = useState("");
  useEffect(() => {
    setStorage(localStorage.getItem("userInfo"));
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Homepage;
