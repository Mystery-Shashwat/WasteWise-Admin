/* eslint-disable react/jsx-pascal-case */
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
//icons
import volume from "../../../img/icons/volume.png"
import folder from "../../../img/icons/folder.png"
import chart from "../../../img/icons/chart.png"
import bag from "../../../img/icons/bag.png"
import chat from "../../../img/icons/chat.png"
import bit_coin_with_earth from "../../../img/icons/bit coin with earth.png"
import growing_chart_3d from "../../../img/icons/growing chart 3d.png"
import money_bag_3d from "../../../img/icons/money bag 3d.png"
import bar_chart_3d from "../../../img/icons/bar chart 3d.png"
import NFT_stack_3d from "../../../img/icons/NFT stack 3d.png"
import up_yellow_arrow_3d from "../../../img/icons/up yellow arrow 3d.png"
// css
import "./css/mints.css";
import Insights_details from "../../../components/dashboard/mints/Insights_details";
import ThemeContext from "../../../context/Theme/ThemeContext";
import { useContext } from "react";
import Services from "../../../components/dashboard/mints/Services";

const Mints = () => {
  const context = useContext(ThemeContext);
  // theme colours
  const styles = {
    "--primary": context.primary,
    "--darkGrey": context.darkGrey,
    "--lightGrey": context.lightGrey,
  };

  Chart.register(CategoryScale);
  const data = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "Data",
        data: [273, 250, 200], // Sample data values
        backgroundColor: "#fff", // Background color for the bars
        borderColor: "#fff", // Border color for the bars
        borderWidth: 1, // Border width for the bars
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          color: "white", // Set x-axis label font color
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          color: "white", // Set x-axis label font color
        },
      },
    },
    plugins: {
      title: {
        display: false, // Hide chart title if needed
      },
      legend: {
        display: false, // Hide chart legend if needed
      },
    },
  };
  return (
    <div style={styles} className="d-flex align-items-center flex-column  ">
      <div className="insights m-4 px-5 py-4">
        <div className="insight-data">
          <div className="text">
            <h3 style={{fontSize: "1.5vw"}}>Tracked Requests</h3>
            <h1>273</h1>
            <div
              style={{
                color: "var(--primary)",
                fontWeight: "400",
              }}
              className="d-flex"
            >
              <img
                src={volume}
                alt="img"
                height={30}
                width={30}
                className="rounded-3 me-3"
                style={{ background: "#FF9A7B" }}
              />
              <p style={{lineHeight: "15px",fontSize:"13px"}}>
                This month <br />
                (For representation only)
              </p>
            </div>
          </div>
          <div className="chart" style={{ height: "250px", width: "400px" }}>
            <Bar options={options} data={data} height={250} width={400} />
          </div>
        </div>
        <div
          className="insight-details d-flex justify-content-around mt-4 px-3 py-2 rounded-4"
          style={{ border: "2px solid #E4E4E4" }}
        >
          <Insights_details
            heading="PickUp Requests"
            data="230"
            progress="100%"
            progressColor="#FFA740"
            icon={folder}
          />
          <Insights_details
            heading="No of Routes"
            data="5+"
            progress="30%"
            progressColor="#FF3553"
            icon={chart}
          />
          <Insights_details
            heading="Successful PickUps"
            data="25"
            progress="90%"
            progressColor="#1594D4"
            icon={bag}
          />
          <Insights_details
            heading="Chats"
            data="17"
            progress="50%"
            progressColor="#66EF63"
            icon={chat}
          />
        </div>
      </div>
      {/* <div className="services mt-5 d-flex justify-content-between flex-wrap">
        <Services progress="50%" progressColor="#FF3553" img={bit_coin_with_earth} heading="Find top cryptos to invest in" category="Course" headingDesc="" length={{episodes:"5"}}/>
        <Services progress="50%" progressColor="#FFA740" img={growing_chart_3d} heading="Crypto Mausam " headingDesc="Dailt crypto updates" category="Groups" length={{profiles:["https://bit.ly/3NGtG2S","https://bit.ly/3NGtG2S","https://bit.ly/3NGtG2S","https://bit.ly/3NGtG2S","+2"]}} />
        <Services progress="50%" progressColor="#66EF63" img={money_bag_3d} heading="0 to Hero shares tips" headingDesc="" category="Groups" length={{profiles:["https://bit.ly/3NGtG2S","https://bit.ly/3NGtG2S","https://bit.ly/3NGtG2S","https://bit.ly/3NGtG2S","+2"]}} />
        <Services progress="50%" progressColor="#1594D4" img={bar_chart_3d} heading="Bulls and bears" headingDesc="" category="Course" length={{episodes:"12"}} />
        <Services progress="50%" progressColor="#FF3553" img={NFT_stack_3d} heading="Sell NFTs in 1 click" headingDesc="" category="Workshop" length={{time:"5"}} />
        <Services progress="50%" progressColor="#FF3553" img={up_yellow_arrow_3d} heading="How to catch the trend" headingDesc="" category="Workshop" length={{time:"5"}} />
      </div>
      <div className="my-5 py-5">
        <button className="btn bg-dark text-light px-5 py-3 rounded-4">
          Load More
        </button>
      </div> */}
    </div>
  );
};

export default Mints;
