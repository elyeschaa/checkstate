import "./style.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "Elyes Chaabani ",
        bio: "I'm a GEMINI person ",
        img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/165479808_4022281037879625_7535785267258045510_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qW2iki71nUoAX-97kyW&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9dHV1J0H92axZ3BYQ226VBgOhykRhGGGMqM5bKucvcYA&oe=6235BAE3",
        profession: "Developer Student",
      },
      show: false,
      counter: 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ show: !this.state.show, counter: 0 });
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div id="css">
        <button onClick={this.toggle}>toggle</button>
        {this.state.show ? (
          <div>
            <h1 className="para">{this.state.person.name}</h1>
            <h1 className="para">{this.state.person.bio}</h1>
            <img
              style={{ width: "500px", heigth: "500px" }}
              src={this.state.person.img}
            />
            <h1 className="para">{this.state.person.profession}</h1>
            <h1>{this.state.counter}</h1>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
