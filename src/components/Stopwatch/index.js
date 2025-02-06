import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="box">
              <p className="watch-head">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                Timer
              </p>
              <h1>25:00</h1>
              <div className="button-container">
                <button type="button" className="btn1">
                  Start
                </button>
                <button type="button" className="btn2">
                  Stop
                </button>
                <button type="button" className="btn3">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
