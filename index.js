import VueGoodTablePlugin from 'https://cdn.jsdelivr.net/npm/vue-good-table@2.21.11/dist/vue-good-table.esm.js'
Vue.use(VueGoodTablePlugin);
const app = new Vue({
  el: '#app',
  data:{
    columns: [
      {
        label: '番号',
        field: 'number',
        type: 'number',
      },
      {
        label: '店名',
      　field: 'storeName',
      },
      {
        label: 'ジャンル',
        field: 'genre',
        filterOptions: {
          enabled: true,
          placeholder: 'ジャンルを選択',
          filterDropdownItems: [
            'グルメ',
            'ショッピング',
            '美容院・サロン',
            '病院・クリニック',
            'ファッション',
            'エンタメ',
            'ドラッグストア・薬局',
            'ホテル・旅館',
            'その他',
          ],
        }
      },
      {
        label: '町名',
        field: 'townName',
        filterOptions: {
          enabled: true,
          placeholder: '町名を選択',
          filterDropdownItems: [
            '明石町',
            '入船',
            '勝どき',
            '京橋',
            '銀座',
            '新川',
            '新富',
            '月島',
            '築地',
            '佃',
            '豊海町',
            '日本橋',
            '日本橋大伝馬町',
            '日本橋蛎殻町',
            '日本橋兜町',
            '日本橋茅場町',
            '日本橋小網町',
            '日本橋小伝馬町',
            '日本橋小舟町',
            '日本橋富沢町',
            '日本橋中州',
            '日本橋人形町',
            '日本橋箱崎町',
            '日本橋浜町',
            '日本橋馬喰町',
            '日本橋久松町',
            '日本橋堀留町',
            '日本橋本石町',
            '日本橋本町',
            '日本橋室町',
            '日本橋横山町',
            '八丁堀',
            '浜離宮庭園',
            '晴海',
            '東日本橋',
            '湊',
            '八重洲',
          ],
        }
      },
      {
        label: '住所',
        field: 'address',
      },
      {
        label: 'au PAY',
        field: 'isAupay',
        formatFn: isAvailable,
      },
      {
        label: 'd払い',
        field: 'isDbarai',
        formatFn: isAvailable,
      },
      {
        label: 'PayPay',
        field: 'isPaypay',
        formatFn: isAvailable,
      },
      {
        label: '楽天ペイ',
        field: 'isRakutenpay',
        formatFn: isAvailable,
      },
    ],
    rows: [
    ]
  },
  async created() {
    const url = './store_list.csv'
    const res = await fetch(url);
    const text = await res.text();
    this.rows = text.split('\n').slice(1).map(l => new Store(...l.split(',')));
  },
  methods: {
    mapUrl(store) {
      return `https://google.com/maps?q=${store.storeName}+${store.address}`;
    }
  }

});
function isAvailable(x){ return x ? '〇' : ''};

