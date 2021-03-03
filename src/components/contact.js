import React from 'react'

function Contact() {
    return (
    
       <div className="row">
        <div className="col-md-1" />&gt;
        <div className="col-md-10">
          <div className="card">
            
            <h4>Contact</h4>
           
            <section className="mb-4" id="center">
             
              <main className="container mt-4 pb-5 d-flex flex-wrap">
                <div className="jumbotron">
                  <h1 className="display-4">Contact me!</h1>
                  <p className="lead">Below are several ways you can get in touch with me, view my GitHub Repo, my LinkedIn page.</p>
                  <hr className="my-4" />
                  <a className="btn btn-primary btn-lg ml-5 mr-5" href="https://github.com/gsteed1677" target="_blank" role="button">My
                    GitHub Profile</a>
                  <a className="btn btn-primary btn-lg mr-5" href="https://www.linkedin.com/in/garrett-steed/" target="_blank" role="button">LinkedIn Profile</a>
                  <a className="btn btn-primary btn-lg mr-5" href="mailto:steed.garrett@gmail.com?subject = Touching%20Base&body = Message" role="button">E-mail Me</a>
                </div>
                <div className="col-md-2">
                </div>
              </main></section></div>
          
          <div className="row pb-5">
            <div className="col-md-12">
              <div className="container">
              </div>
            </div>
          </div>
          
          
        </div></div>
    )
}

export default Contact
