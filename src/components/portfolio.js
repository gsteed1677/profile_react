import React from 'react'
import boardgame from '../assets/boardgame.PNG';
import workday from '../assets/workday.PNG';
import pwa from '../assets/pwa.PNG';
import password from '../assets/password.PNG'
import fitness from '../assets/fitness.png'
import quiz from '../assets/Code-Quiz.png'

function Portfolio() {
    return (
           <div className="row">
        <div className="col-md-1" />&gt;
        <div className="col-md-10">
          <div className="card">
            <h4>Portfolio</h4>
            <div className="row">
              <div className="col-md-10">
                <div className="row m-4">
                  <div className="col-md-6">
                    <a href="https://github.com/gsteed1677/top-boardgames" target="_blank">
                      <div className="card mb-4">
                        <img src={boardgame} className="card-img  w-100 border float-md-left" />
                        <div className="card-body">
                          <h5 className="card-title">Top Boardgames!</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="https://gsteed1677.github.io/workday-scheduler/" target="_blank">
                      <div className="card">
                        <img src={workday} className="card-img  w-100 border float-md-left" />
                        <div className="card-body">
                          <h5 className="card-title">Work Day Scheduler</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row m-4">
                  <div className="col-md-6">
                    <a href="https://gsteed1677.github.io/password-generator/" target="_blank">
                      <div className="card mb-4">
                        <img src={password} className="card-img  w-100 border float-md-left" />
                        <div className="card-body">
                          <h5 className="card-title">Random Password Generator</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row m-4">
                  <div className="col-md-6">
                    <a href="https://https://github.com/gsteed1677/fitness_tracker" target="_blank">
                      <div className="card mb-4">
                        <img src={fitness} className="card-img  w-100 border float-md-left" />
                        <div className="card-body">
                          <h5 className="card-title">Fitness Tracker</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row m-4">
                  <div className="col-md-6">
                    <a href="https://github.com/gsteed1677/timed-quiz" target="_blank">
                      <div className="card mb-4">
                        <img src={quiz} className="card-img  w-100 border float-md-left" />
                        <div className="card-body">
                          <h5 className="card-title">Timed Quiz</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row m-4">
                  <div className="col-md-6">
                    <a href="https://github.com/gsteed1677/project_3" target="_blank">
                      <div className="card mb-4">
                        <img src={pwa} className="card-img  w-100 border float-md-left" />
                        <div className="card-body">
                          <h5 className="card-title">Hobby Drop</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
            </div>
          </div>
        </div>
      </div>
    )
}

export default Portfolio
