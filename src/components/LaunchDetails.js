import React from "react";

class LaunchDetails extends React.Component{

    render(){
        const launch = this.props.launch;
        if (launch) { 
        return(
            <div className="details">
                <h2>Launch Number {this.props.launch.flight_number}</h2>
                <p><b>Date:</b> {new Date(this.props.launch.date_unix * 1000).toDateString()}</p>
                <p><b>Mission Status:</b> {this.props.launch.upcoming ? "Scheduled" : (this.props.launch.success ? "Successful" : "Failed")}</p>
                <p><b>Summary:</b> {this.props.launch.details}</p>
                <a href={this.props.launch.links.article}>Find out more</a>
            </div>
        )
    }
    else{
        return(
        <h1>No matches found</h1>
        )
    }

}
}

export default LaunchDetails;