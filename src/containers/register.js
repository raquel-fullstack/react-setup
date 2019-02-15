import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div className="register register__container">
        <ul className="list">
          <li className="list__item">
            <img className="item__icon" src={require("./../assets/images/icon-dollar.png")} alt="Dollar" />
            <div className="item__text">
              <p className="item__text--bold">Everything at one place</p>
              <p className="item__text--small">Manage claims, invoices &amp; patients at one place</p>
            </div>
          </li>
          <li className="list__item">
            <img className="item__icon" src={require("./../assets/images/icon-dashboard.png")} alt="Dashboard" />
            <div className="item__text">
              <p className="item__text--bold">Insightful Dashboard</p>
              <p className="item__text--small">Gather more practice insights through dashboard </p>
            </div>
          </li>
          <li className="list__item">
            <img className="item__icon" src={require("./../assets/images/icon-knife.png")} alt="Knife" />
            <div className="item__text">
              <p className="item__text--bold">Multitasking</p>
              <p className="item__text--small">Multitasking that supercharges your efficiency</p>
            </div>
          </li>
          <li className="list__item">
            <img className="item__icon" src={require("./../assets/images/icon-report.png")} alt="Report" />
            <div className="item__text">
              <p className="item__text--bold">Reports at finger tips</p>
              <p className="item__text--small">Create, Schedule and generate business reports</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Register;
