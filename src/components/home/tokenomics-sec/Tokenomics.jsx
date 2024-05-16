import React, { useState } from "react";
import "./tokenomics.css";
import Title from "../re-usables/Title";
import { PieChart } from "react-minimal-pie-chart";

const chartColors = [
  "#546FE5",
  "#7DB9F0",
  "#80EABC",
  "#67B06D",
  "#B639D7",
  "#8057E8",
];

const pieChartData = [
  { title: "20 %", value: 20, color: "rgb(128,87,232,0.7)" },
  { title: "20%", value: 20, color: "rgb(84,111,229,0.7)" },
  { title: "25%", value: 25, color: "rgb(182,57,215,0.7)" },
  { title: "4%", value: 4, color: "rgb(125,185,240,0.7)" },
  { title: "5%", value: 5, color: "rgb(128,234,188,0.7)" },
  { title: "6%", value: 6, color: "rgb(103,176,109,0.7)" },
];

const tokenData = [
  {
    num: 21,
    title: "Billion",
    medium: "Total Supply",
    normal:
      "21 Billion $ICHUA tokens, echoing the legendary cap of Bitcoin & ensuring scarcity & value, 'cause we're all about that exclusive vibe.",
    color: "rgb(128,87,232,0.7)",
  },
  {
    num: 6.3,
    title: "Billion",
    medium: "Community Airdrops",
    normal:
      "Air Droppin' Like It's Hot: 30% (6.3 Billion) for the community who's with us from the get-go (early adopters and community advocates)",
    color: "rgb(84,111,229,0.7)",
  },
  {
    num: 8.4,
    title: "Billion",
    medium: "Public Distribution",
    normal:
      "40% (8.4 Billion)– Ensuring broad and fair distribution to maintain a decentralized and vibrant community.",
    color: "rgb(182,57,215,0.7)",
  },
  {
    num: 1.04,
    title: "Billion",
    medium: "Development & Partnerships",
    normal:
      "15% (3.15 Billion) Allocated for continuous innovation, growth, and strategic alliances to propel $ICHUA forward.",
    color: "rgb(125,185,240,0.7)",
  },
  {
    num: 3.15,
    title: "Billion",
    medium: "Charity Wallet",
    normal:
      "5% (1.05 Billion)– Because every big-hearted Chihuahua has a cause they bark for; our commitment to giving back.",
    color: "rgb(128,234,188,0.7)",
  },
  {
    num: 3.15,
    title: "Billion",
    medium: "Deflationary Mechanism",
    normal:
      "10% (2.1 Billion)– Periodic token burns to keep inflation in check and value on the rise, just like the feisty spirit of a Chihuahua.",
    color: "rgb(103,176,109,0.7)",
  },
];

const Tokenomics = () => {
  const [tokenText, setTokenText] = useState(0);

  return (
    <div className="token-sec" id="token">
      <Title title={"TOKENOMICS"} />
      <div className="token-chart-cont">
        <div className="token-chart">
          <PieChart
          className=" overflow-visible"
            data={pieChartData}
            segmentsStyle={(index) => ({
              cursor: "pointer",
              transition: "transform 0.5s",
              transform: tokenText + 1 === index ? "scale(1.02)" : "scale(1)",
            })}
            segmentsShift={(index) => (tokenText - 1 === index ? 5 : 1)}
            onMouseOver={(_, index) => setTokenText(index + 1)}
            onMouseOut={() => setTokenText(0)}
            lineWidth={40}
            // Adding custom center text
            label={({ dataEntry }) =>
              tokenText !== 0 ? dataEntry.title : null
            }
            labelStyle={{
              fontSize: "5px",
              fill: "#fff",
            }}
            labelPosition={80}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              pointer-events-none text-white text-sm flex flex-col items-center "
          >
            <h1 className="text-4xl">100%</h1>
            <h2 className="text-3xl">Total Supply</h2>
          </div>
        </div>
        {tokenText > 0 ? (
          <div
            className="token-chart-text-cont2"
            style={{ backgroundColor: tokenData[tokenText - 1].color }}
          >
            <div className="token-chart-text-head-cont">
              <h2 className="token-chart-text-head-light">
                {tokenData[tokenText - 1].num}
              </h2>
              <h2 className="token-chart-text-head-bold">
                {tokenData[tokenText - 1].title}
              </h2>
            </div>
            <h4 className="token-chart-text-medium">
              {tokenData[tokenText - 1].medium}
            </h4>
            <p className="token-chart-text-small">
              {tokenData[tokenText - 1].normal}
            </p>
          </div>
        ) : (
          <div className="token-chart-text-cont">
            <p className="token-chart-text">The Blueprint of Success</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tokenomics;
