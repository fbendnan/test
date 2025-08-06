import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Fatima Zahra Bendnane",
        bio: "👩‍💻 I'm Fatima Zahra, a passionate web developer who loves turning ideas into real digital experiences. I enjoy learning new technologies, especially React, and I believe that every line of code is a step closer to building something meaningful.",
        imgSrc:
          "https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg",
        profession: "Web Developer",
      },
      shows: true,
      mountedTime: 0,
    };
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  ShowsContent = () => {
    if (this.state.shows)
      return (
        <div>
          <img src={this.state.Person.imgSrc}></img>
          <h1 className="text-blue-900 font-semibold text-3xl">
            {this.state.Person.fullName}
          </h1>
          <h5 className="text-md">{this.state.Person.bio}</h5>
          <h6 className="text-xl font-semibold">
            {this.state.Person.profession}{" "}
          </h6>
        </div>
      );
    return null;
  };

  HideShowButton() {
    if (this.state.shows) {
      return <p>Hide</p>;
    } else {
      return <p>Show</p>;
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <div className="flex  justify-center my-20 border mx-90">
          <div className="text-center">
            {this.ShowsContent()}

            <p>Time since mounted: {this.state.mountedTime} seconds</p>
            <div>
              <button
                className="border my-6 px-4 py-1 text-white text-xl bg-blue-900"
                onClick={this.toggleShow}
              >
                {this.HideShowButton()}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
