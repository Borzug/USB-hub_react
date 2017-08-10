var cards = require('./cards');
var { chargeDelay, connectDelay, disconnectDelay, transferDelay } = require('./delay');

var io;
      
function charging() {
  setTimeout(() => {
    const connectedDevices = cards.filter(card => {
      return card.IsConnected;
    });
    connectedDevices.forEach(card => {
      if (card.Device.ChargeProgress < 100) {
        card.Device.ChargeProgress += 1;
      }
      io.emit('change', card);
    });
    charging();
  }, chargeDelay)
};

function cardConnect() {
  setTimeout(() => {
    const disconnectedDevices = cards.filter(card => {
      return !card.IsConnected;
    });
    if (disconnectedDevices.length > 0) {
      const currentCard = disconnectedDevices[Math.floor(Math.random() * (disconnectedDevices.length))];
      currentCard.IsConnected = true;
      currentCard.Device.IsCopying = true;
      io.emit('change', currentCard);
    };
    cardConnect();
  }, connectDelay)
};

function cardDisconnect() {
  setTimeout(() => {
    let connectedDevices = cards.filter(card => {
      return card.IsConnected && card.Device.CopyingProgress >= 100 && card.Device.ChargeProgress >= 50;
    });
    if (connectedDevices.length > 0) {
      const currentCard = connectedDevices[Math.floor(Math.random() * (connectedDevices.length))];
      currentCard.IsConnected = false;
      currentCard.Device.IsCopying = false;
      currentCard.Device.CopyingProgress = 0;
      io.emit('change', currentCard);
    };
    cardDisconnect();
  }, disconnectDelay)
};

function transferring() {
  setTimeout(() => {
    const connectedDevices = cards.filter(card => {
       return card.IsConnected;
    });
    connectedDevices.forEach(card => {
      if (card.Device.CopyingProgress < 100) {
        card.Device.CopyingProgress += Math.floor(Math.random() * 15);
      }
      io.emit('change', card);
    });
    transferring();
  }, transferDelay)
};

function discharging() {
  setTimeout(() => {
    const disconnectedDevices = cards.filter(card => {
      return !card.IsConnected;
    });
    disconnectedDevices.forEach(card => {
      if (card.Device.ChargeProgress > 0) {
        card.Device.ChargeProgress -= 1;
      }
      io.emit('change', card);
    });
    discharging();
  }, chargeDelay)
};

module.exports = function (socket) {
  io = socket;
  charging();
  cardConnect();
  cardDisconnect();
  transferring();
  discharging();
};