import React, { PureComponent } from "react";

class PureDisplay extends PureComponent {
  render() {
    return <div style={{ marginTop: "20px" }}>{this.props.message}</div>;
  }
}

export default PureDisplay;
