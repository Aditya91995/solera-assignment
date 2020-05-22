import "../../../slide/src/App.css";
import React, { Component } from "react";

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "http://images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=563",
        "http://images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=563",
         "http://images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=563",
         "http://images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=563",
         "http://images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=563",
        "http://images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=563",
        "http://images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=563",
        "http://images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=563",
        "http://images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=563",
        "http://images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=563"
        
      ],
      textData: ["“I love that it has omegas in it but they are plant-based.”",
                 "“The pill was made so the micronutrients work together.”",
                 "“Ritual makes it really easy to remember to take my vitamins.”",
                 "“You don't get nauseous when you take them.”",
                "“There's only what you need, and nothing beyond that.”",
                "“When I found Ritual vitamins, everything was in one place.”",
                "“The different sources are all vegan.”",
                "“The thing I love most about Ritual is just how transparent they are.”",
                "“Nice to just have them delivered to the door.”",
                "“Everything is sourced with such integrity and responsibility.”"
                ],
      textSign: ["Erica Chidi Cohen",
                 "Kara Griffin",
                "Sheri Foelsch",
                "Brittany Harrer" ,
                "Rebecca Harris" ,
                "Lindsay Scola",
                "Caroline Cameron",
                "Lori Coyle",
                "Crystalrose Guerra",
                "Megan Monahan"
              ],
      textPosition: ["Doula and Health Educator", 
                    "Nutritionist and Trainer",
                    "Registered Nurse",
                    "Co-Founder of Recruiting Agency",
                    "Insurance Broker",
                    "Director of Talent Relations",
                    "Director of Operations",
                    "Fitness Program Manager",
                    "Professional Athlete",
                    "Meditation Teacher"

                  ],
      y: 0,
      
    };
  }

  rightSlide = () => {
    let arr = [...this.state.data]
    let first = arr.shift()
    arr.push(first)
    let textArr = [...this.state.textData]
    let textArr2 = textArr.shift()
    textArr.push(textArr2)
    // textsign
    let textSignArr = [...this.state.textSign]
    let textSignArr2 = textSignArr.shift()
    textSignArr.push(textSignArr2)
    // textPosition
    let textPositionArr = [...this.state.textPosition]
    let textPositionArr2 = textPositionArr.shift()
    textArr.push(textPositionArr2)
    this.setState({
      data: arr,
      //   y :this.state.y+1
      textData: textArr,
      textSign: textSignArr,
      textPosition: textPositionArr
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
     // textsign
     let textSignArr = [...this.state.textSign]
     let textSignArr2 = textSignArr.pop()
     textSignArr.unshift(textSignArr2)
     // textPosition
     let textPositionArr = [...this.state.textPosition]
     let textPositionArr2 = textPositionArr.pop()
     textArr.unshift(textPositionArr2)
    this.setState({
      data: arr,
      textData: textArr,
      textSign: textSignArr,
      textPosition: textPositionArr
    });

  };

  render() {
    return (
      <div>

        {/* Nav Bar */}
        <div>
          <nav class="navbar navBar1 navbar-light bg-light fixed-top">
            <h2 class="navbar"><b>Ritual</b></h2>
            <form class="form-inline">
              <p class="mr-sm-2">Shop</p>
              <p class="mr-sm-2">Learn</p>
              <img src="data:image/png;base64,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" className="img-fluid" />

            </form>
          </nav>
        </div>



        <div className="container-fluid mt-5 mainBody">
          <div className="head">
              <div><center><h1 className="pt-5 mt-5 blueColor">Skeptics Speak</h1></center></div>
              <div><center><b><p className="pt-2 blueColor">With millions of bottles delivered, discover what Ritual users have to say.</p></b></center></div>
          </div>
          {/* bigBox1 */}
          <div className="row">
            <div className="bigBox1 left">
              
              <div className="box1">
               <div className="mt-5 ml-5 pl-5 textData"> {this.state.textData[this.state.y]}</div>
               <div className="ml-5 pl-5 blueColor textSign">{this.state.textSign[this.state.y]}</div>
               <div className="mt-1 ml-5 pl-5 blueColor textPosition">{this.state.textPosition[this.state.y]}</div>
              </div>
              <div className="box2 container-fluid">
                <img
                  src={this.state.data[0]}
                  className="img-fluid left"
                  alt="image1"
                />
              </div>
            </div>
            {/* bigBox2 */}
            <div className="bigBox2 row right">
              <div className="box3" onClick={this.leftSlide}>
                <img
                  src={this.state.data[1]}
                  className="img-fluid right"
                  alt="image2"
                />
                <div onClick={this.leftSlide}><img className="img-fluid" src="https://images.all-free-download.com/images/graphiclarge/blue_arrow_icon_vector_280873.jpg" alt="icon" ></img></div>
              </div>
              <div className="box4" onClick={this.rightSlide}>
                <img
                  src={this.state.data[2]}
                  className="img-fluid right pl-3"
                  alt="image3"
                />
                <div className="pl-3" onClick={this.rightSlide}><img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9QgYlYWTuRVSpfTQd-IIhFlXuLG2fXbAV7HlWzDCjb9UxWKbL&usqp=CAU" alt="icon" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;