// react
import React from 'react';
// images
import naira from '../../images/naira.png';
// style
import './style.scss';

const Card = (props) => {
  if(props.page === 'balances') {
    return (
      <div className={`card-${props.page}`}>
        <div className="title-header">
          <div className="name">
            <p>Name</p>
          </div>
          <div className="pending">
            <p>Pending</p>
          </div>
          <div className="available">
            <p>Available</p>
          </div>
        </div>
        <div className="row">
          <div className="name">
            <div className="bitcoin">
              <i class="fab fa-bitcoin"></i>
            </div>
            <p>Bitcoin</p>
          </div>
          <div className="pending">
            <p className="crypto">0.12345678 BTC</p>
            <p className="currency">2,000,000 NGN</p>
          </div>
          <div className="available">
            <p className="crypto">10.12345678 BTC</p>
            <p className="currency">2,000,000 NGN</p>
          </div>
        </div>
        <div className="row even">
          <div className="name">
            <div className="ethereum">
              <i class="fab fa-ethereum"></i>
            </div>
            <p>Etheruem</p>
          </div>
          <div className="pending">
            <p className="crypto">10.12345678 BTC</p>
            <p className="currency">2,000,000 NGN</p>
          </div>
          <div className="available">
            <p className="crypto">10.12345678 BTC</p>
            <p className="currency">2,000,000 NGN</p>
          </div>
        </div>
        <div className="row">
          <div className="name">
            <div className="naira">
              <img src={naira} alt="naira"/>
            </div>
            <p>Naira</p>
          </div>
          <div className="pending">
            <p className="crypto">NGN 800,000</p>
          </div>
          <div className="available">
            <p className="crypto">NGN 2,000,000</p>
          </div>
        </div>
      </div>
    );
  }

  if(props.page === 'transfers') {
    return (
      <div className={`card-${props.page}`}>
        <div className="new-transfer">
          <div className="button">
            <div>
              <p>New Transfer</p>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="title-header">
          <div className="name">
            <p>Name</p>
          </div>
          <div className="pending">
            <p>Pending</p>
          </div>
          <div className="available">
            <p>Available</p>
          </div>
        </div>
        <div className="transfer-details">
          <h3>You haven't made any transfer yet</h3>
          <p>Your transfers will be displayed here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      
    </div>
  )
};

export default Card;
