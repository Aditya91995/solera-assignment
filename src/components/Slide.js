import "../../../slide/src/App.css";
import React, { Component } from "react";

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "https://assets.entrepreneur.com/content/3x2/2000/20160602195129-businessman-writing-planning-working-strategy-office-focus-formal-workplace-message.jpeg",
        "https://www.business.com/images/content/5ca/3db8b5a215e8a458b9d10/1500-0-",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT5DO0Cb8aGDfv4CisVd6K-TOhpy-B-zaG3VmwS9z8Kgvx9Cg3&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5hj2kqXVwxG4CQkmsnSL90BV8ZjHIRqx9o-27oseZ3jTRsxDu&usqp=CAU",
      ],
      textData: ["Text1", "Text2", "Text3", "Text4"],
      y: 0
    };
  }

  rightSlide = () => {
      let arr = [...this.state.data]
      let first = arr.shift()
      arr.push(first)
      let textArr = [...this.state.textData]
      let textArr2 = textArr.shift()
      textArr.push(textArr2)
    this.setState({
     data : arr,
    //   y :this.state.y+1
    textData : textArr
    });
    console.log(this.state.data)
    
    // if(this.state.y === this.state.textData -1){
    //     this.setState({
    //         y:0
    //     })
    // }
  };

  leftSlide = () => {
    let arr = [...this.state.data]
    let first = arr.pop()
    arr.unshift(first)
    let textArr = [...this.state.textData]
      let textArr2 = textArr.pop()
      textArr.unshift(textArr2)
    this.setState({
    data : arr,
      textData : textArr
    });
    
  };

  render() {
    return (
      <div>
        <div className="container-fluid row mt-5">
          <div className="col-6 row left">
            <div className="col-6"> <div className="mt-5 ml-5 pt-5 pl-5"> {this.state.textData[this.state.y]}</div></div>
            <div className="col-6 container-fluid">
              <img
                src={this.state.data[0]}
                className="img-fluid left"
                alt="image1"
              />
            </div>
          </div>
          <div className="col-6 row right">
            <div className="col-6">
              <img
                src={this.state.data[1]}
                className="img-fluid right"
                alt="image2"
              />
              <button onClick={this.leftSlide}>left</button>
            </div>
            <div className="col-6" onClick={this.rightSlide}>
              <img
                src={this.state.data[2]}
                className="img-fluid right"
                alt="image3"
              />
              <button onClick={this.rightSlide}>right</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;