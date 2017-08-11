import React from 'react';
import { object } from 'prop-types';

import disconnected from '../assets/disconnected.svg';
import charging from '../assets/charging.svg';
import downloading from '../assets/download.svg';
import classNames from 'classnames';

Card.propTypes = {
  card: object.isRequired
}

function Card({card}) {

  let connectionStatus = classNames({'card--not-connected': !card.IsConnected}); 
  let connect = classNames({'hidden': !card.IsConnected});
  let transferStatus = classNames({'hidden': !card.Device.IsCopying || card.Device.CopyingProgress >= 100});
  let transferred = classNames({'hidden': !card.Device.IsCopying || card.Device.CopyingProgress < 100});
  let chargeStatus = classNames({
    'card--low-charge': card.Device.ChargeProgress < 30,
    'card--charging': card.Device.ChargeProgress < 80,
    'card--charged': card.Device.ChargeProgress >=80
  });
  let disconnect = classNames({
    'hidden': card.IsConnected,
  });

  return (
    <div className="card-container">
      <div className={"card " + connectionStatus + " " + chargeStatus}>
        <div className={disconnect}>
          <img src={disconnected} alt="Not connected"></img>
        </div>
        <div className={connect}>
          <img src={charging} alt="charging"></img>&nbsp;{card.Device.ChargeProgress}%
        </div>
      
        <div className="card__header">
          Порт:&nbsp;{card.PortId}
          <p className={transferStatus}>
            <img src={downloading} alt="Transferring"></img>
            <progress max="100" value={card.Device.CopyingProgress}>{card.Device.CopyingProgress}%</progress>
          </p>
        </div>

        <div className="card__header">
          <p className={transferred}>
            <img src={downloading} alt="Transferring"></img>
            <span className="card__text">&nbsp;Скопировано</span>
          </p>
        </div>          
      </div>
    </div>
  );
}

export default Card;