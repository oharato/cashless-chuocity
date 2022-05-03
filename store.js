class Store {
  constructor(
    number,
    storeName,
    townName,
    address,
    isAupay,
    isDbarai,
    isPaypay,
    isRakutenpay,
    genre
  ) {
    this.number = number*1;
    this.storeName = storeName;
    this.townName = townName;
    this.address = address;
    this.isAupay = isAupay == '●';
    this.isDbarai = isDbarai == '●';
    this.isPaypay = isPaypay == '●';
    this.isRakutenpay = isRakutenpay == '●';
    this.genre = genre.trim();
  }

}