import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <img className="logo__image" src={require("./../assets/images/logo.png")} alt="Logo" />
            <p className="logo__text">
              <span className="logo__text--bold">Simpli</span>
              Claim
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
