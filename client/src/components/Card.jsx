import React from 'react';

import disconnected from '../assets/disconnected.svg';
import charging from '../assets/charging.svg';
import downloading from '../assets/download.svg';
import classNames from 'classnames';

const Card = ({card}) => {

  let connectionStatus = classNames({'not-connected': !card.IsConnected}); 
  let connect = classNames({'hide': !card.IsConnected});
  let transferStatus = classNames({'hide': !card.Device.IsCopying || card.Device.CopyingProgress >= 100});
  let transferred = classNames({'hide': !card.Device.IsCopying || card.Device.CopyingProgress < 100});
  let chargeStatus = classNames({
    'low-charge': card.Device.ChargeProgress < 30,
    'charging': card.Device.ChargeProgress < 80,
    'charged': card.Device.ChargeProgress >=80
  });
  let disconnect = classNames({
    'hide': card.IsConnected,
    'show': !card.IsConnected
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
      
        <div className="card-header">
          Порт:&nbsp;{card.PortId}
          <p className={transferStatus}>
            <img src={downloading} alt="Transferring"></img>
            <progress max="100" value={card.Device.CopyingProgress}>{card.Device.CopyingProgress}%</progress>
          </p>
        </div>

        <div className="card-header">
          <p className={transferred}>
            <img src={downloading} alt="Transferring"></img>
            <span className="card-text">&nbsp;Скопировано</span>
          </p>
        </div>          
      </div>
    </div>
  );
}

export default Card;