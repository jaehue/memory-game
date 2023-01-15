import { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [current, setCurrent] = useState();
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowAll(!showAll);
          setCurrent(0);
        }}
      >
        모두보기
      </button>
      <div className="body">
        <div className="quiz">
          <div className="row">
            <Box
              value={{
                image:
                  "https://image.jtbcplus.kr/data/contents/jam_photo/202206/03/7dfad1c9-834b-4ef9-9dc2-f7024d724522.jpg",
                name: "손흥민",
              }}
              onClick={() => setCurrent(current === 1 ? 0 : 1)}
              show={showAll || current === 1}
            />
            <Box
              value={{
                image:
                  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA165gKK.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=264&y=147",
                name: "조규성",
              }}
              onClick={() => setCurrent(current === 2 ? 0 : 2)}
              show={showAll || current === 2}
            />
            <Box
              value={{
                image:
                  "https://file2.nocutnews.co.kr/newsroom/image/2019/06/16/20190616051236801476_0_600_800.jpg",
                name: "이강인",
              }}
              onClick={() => setCurrent(current === 3 ? 0 : 3)}
              show={showAll || current === 3}
            />
            <Box
              value={{
                image:
                  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA165gKK.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=264&y=147",
                name: "조규성",
              }}
              onClick={() => setCurrent(current === 4 ? 0 : 4)}
              show={showAll || current === 4}
            />
            <Box
              value={{
                image:
                  "https://file2.nocutnews.co.kr/newsroom/image/2019/06/16/20190616051236801476_0_600_800.jpg",
                name: "이강인",
              }}
              onClick={() => setCurrent(current === 5 ? 0 : 5)}
              show={showAll || current === 5}
            />
            <Box
              value={{
                image:
                  "https://image.jtbcplus.kr/data/contents/jam_photo/202206/03/7dfad1c9-834b-4ef9-9dc2-f7024d724522.jpg",
                name: "손흥민",
              }}
              onClick={() => setCurrent(current === 6 ? 0 : 6)}
              show={showAll || current === 6}
            />
          </div>
        </div>
        <div className="image">
          <img src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/07/22/f993e274-bb6f-4269-aea9-90ddab603aad.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
