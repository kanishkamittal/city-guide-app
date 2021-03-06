import React, { Component } from 'react'
import {InfoConsumer} from './Context'
import {Link} from 'react-router-dom'

class Info extends Component {
  render() {

    const {
        id,
        headerTitle,
        headerSubTitle,
        headerText,
        img
    } = this.props.item

    return (
      <div>
        <InfoConsumer>
            {value => (
                <div className="col-10 col-lg-4 mx-auto mb-5">
                    <div className="card" style={{ width: '18rem'}}>
                        <img className="card-img-top" alt="headerTitle" src={img}></img>
                        <div className="card-body">
                            <h3 className="card-title text-uppercase">{headerTitle}</h3>
                            <h5 className="card-title">{headerSubTitle}</h5>
                            <p className="card-text">{headerText}</p>
                            <Link to="/details" className="btn btn-outline-primary text-uppercase" 
                            onClick={() => value.handleDetail(id)}>More Info</Link>
                        </div>
                    </div>
                </div>
            )}
        </InfoConsumer>
      </div>
    )
  }
}

export default Info
