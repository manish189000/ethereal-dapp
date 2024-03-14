// CandlestickChart.js
import React from "react";
import Chart from "react-apexcharts";

class CandlestickChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "candlestick",
          height: 350,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
        // candlestick: {
        //   colors: {
        //     upward: "#3C90EB",
        //     downward: "#DF7D46",
        //   },
        // },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#0BFFFF", // Color for upward candlesticks (green)
              downward: "#1A2930", // Color for downward candlesticks (red)
            },
          },
        },
        grid: {
          borderColor: "#121212", // Change color of horizontal grid lines
        },
        // colors: {
        //   // Customize colors here
        //   upward: "#0BFFFF", // Color for upward candlesticks (green)
        //   downward: "#1A2930", // Color for downward candlesticks (red)
        // },
      },

      series: [
        {
          data: this.generateData(70), // Generating 10 random data points initially
        },
      ],
    };
  }

  // Function to generate random data for the chart
  generateData(count) {
    let date = new Date();
    let data = [];
    for (let i = 0; i < count; i++) {
      date.setDate(date.getDate() + 1);

      let open = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      let close = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      let low = Math.min(open, close) - Math.floor(Math.random() * 10);
      let high = Math.max(open, close) + Math.floor(Math.random() * 10);

      data.push({
        x: date.getTime(),
        y: [open, high, low, close],
      });
    }
    return data;
  }

  render() {
    return (
      <div className="candlestick-chart w-full">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={350}
          //   width={400}
        />
      </div>
    );
  }
}

export default CandlestickChart;
