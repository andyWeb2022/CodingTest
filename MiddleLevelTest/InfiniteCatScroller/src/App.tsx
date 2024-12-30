import { useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [cats, setCats] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const getCatPicture = async () => {
    const newCats = Array.from(
      { length: 10 },
      () => "https://cataas.com/cat?" + Math.random()
    );

    setCats((prevCats) => [...prevCats, ...newCats]);
  };
  useEffect(() => {
    getCatPicture();
  }, []);
  return (
    <div className="App">
      {isModalOpen && (
        <div className="Modal">
          <div className="Modal-contain">
            <img
              src={"https://cataas.com/cat/says/Hi"}
              alt="cat"
              width={1000}
              height={1000}
            />
          </div>
          <button onClick={() => setIsModalOpen(false)}>關閉</button>
        </div>
      )}

      <InfiniteScroll
        dataLength={cats.length}
        next={getCatPicture}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {cats.map((cat, index) => (
          <div key={index}>
            <img src={cat} alt="cat" width={400} height={400} />
          </div>
        ))}
      </InfiniteScroll>
      <button onClick={() => setIsModalOpen(true)}>
        Summon the Cat Overlord
      </button>
    </div>
  );
}

export default App;
