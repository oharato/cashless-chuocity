const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    stores: [],
    filter: '',
    isAupay: false,
    isDbarai: false,
    isPaypay: false,
    isRakutenpay: false,
  },
  computed: {
    filteredStores() {
      let stores = this.stores;
      if(this.filter !== ''){
        const options = {
          keys: [
            'storeName',
            'townName',
            'address',
            'genre',
          ]
        }
        const fuse = new Fuse(this.stores, options);
        stores = fuse.search(this.filter).map(x => x.item);
      }
      return stores.filter(x=>{
        if(!this.isAupay && !this.isDbarai && !this.isPaypay && !this.isRakutenpay) return true;
        if(this.isAupay && !x.isAupay) return false;
        if(this.isDbarai && !x.isDbarai) return false;
        if(this.isPaypay && !x.isPaypay) return false;
        if(this.isRakutenpay && !x.isRakutenpay) return false;
        return true;
      });
    }
  },
  async created() {
    const url = '/store_list.csv'
    const res = await fetch(url);
    const text = await res.text();
    this.stores = text.split('\n').slice(1).map(l => new Store(...l.split(',')));
  },
  methods: {
    mapUrl(store) {
      return `https://google.com/maps?q=${store.storeName}+${store.address}`;
    }
  },
  filters: {
    isAvailable(x){ return x ? '〇' : ''}
  },


})