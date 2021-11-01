import React from "react";
import LaunchDetails from "../components/LaunchDetails";
import Controls from "../components/Controls";

class LaunchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      currentLaunch: 0,
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launches")
      .then((response) => response.json())
      .then((data) => this.setState({ launches: data }));
  }

  updateCurrentLaunch = (newFlightNumber) => {
    this.setState({ currentLaunch: newFlightNumber });
  };

  render() {
    const latestLaunch = this.state.launches.length;

    return (
      <>
        <Controls
          currentLaunch={this.state.currentLaunch}
          updateCurrentLaunch={this.updateCurrentLaunch}
          latestLaunch={latestLaunch}
        />
        <LaunchDetails launch={this.state.launches[this.state.currentLaunch]} />
      </>
    );
  }
}

export default LaunchContainer;
