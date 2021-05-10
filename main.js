var app = new Vue ({
  el: '#root',
  data:{
    stanze: [],
    stanza: [],
  },
  created() {
    axios.get('http://localhost/PHP/db-hotel/api/stanze.php').then((response) => {
        this.stanze = response.data.response;
        });
  },
  methods:{
    getById: function (id) {
      axios.get(`http://localhost/PHP/db-hotel/api/stanze.php?id=${id}`).then((response) => {
        this.stanza = response.data.response[0];
        });
    }
  },
})