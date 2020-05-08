import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3><strong>Our Location</strong></h3>
          </div>
        
        <div className="row">
          <div className="col-md-7">
          <iframe src="https://www.google.com/maps/d/embed?mid=1nWNSBnFtNht_UUikXM_sogkGIxp8Ldpj" 
          style={{border: '0', width: '100%', height:'315px',frameborder:'0'}} allowFullScreen>
          </iframe>
          </div>
          <div className="col-md-5">
            <h4><strong>Contact Us</strong></h4>
            <form>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Name"></input>
              </div>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Email"></input>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Phone"></input>
              </div>
              <textarea className="form-control" cols="30" rows="3" placeholder="Message"></textarea>
              <Link to="/" className="btn btn-outline-primary text-uppercase mt-1">
                <i className="fa fa-papper-plane-o" aria-hidden="true"></i>
                <i className="fab fa-telegram-plane"></i>&nbsp;Send
              </Link>
            </form>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default Contacts
