
// LikeButton.js
"use strict";
const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return location.href = "https://grizzlykertigepcentrum.addel.hu/";
    }
    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Grizzly kertigép centrum webáruház"
    );
  }
}

// ... az előző kódrészlet ...
const domKonténer = document.querySelector("#kontener");
ReactDOM.render(e(LikeButton), domKonténer);