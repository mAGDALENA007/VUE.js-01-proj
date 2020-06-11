// array with form in HTML

new Vue({
    el: '#app',
    data() {
      return {
        selected: '',
        posts: [
          {
            name: 'Tomasz',
            surname: 'Kowalski',
            pesel: '123456',
            time: '8:00',
            amount: '1 tabletka',
            department: 'Chirurgia',
            label: 'Apap'
          },
          {
            name: 'Anna',
            surname: 'Nowak',
            pesel: '234567',
            time: '15:00',
            amount: '2 tableki',
            department: 'Ortopedia',
            label: 'Polopiryna'
          },
          {
            name: 'Jan',
            surname: 'Woźniak',
            pesel: '345678',
            time: '22:00',
            amount: '3 tabletki',
            department: 'Kardiologia',
            label: 'Witamina C'
          }
        ],
        newName: '',
        newSurname: '',
        newPesel: '',
        newTime: '',
        newAmount: '',
        newDepartment: '',
        newMed: ''
      }
    },
    methods: {
      addReq() {
        let addedPost = new Object({
          name: this.newName,
          surname: this.newSurname,
          pesel: this.newPesel,
          time: this.newTime,
          amount: this.newAmount,
          department: this.newDepartment,
          label: this.newMed
        });
        this.posts.push(addedPost)
        this.newName = '';
        this.newSurname = '';
        this.newPesel = '';
        this.newTime = '';
        this.newAmount = '';
        this.newDepartment = '';
        this.newMed = '';
      }
    },
    computed: {
      filteredByLabel() {
        let filter = new RegExp(this.selected, 'i')
        return this.posts.filter(el => el.label.match(filter))
      }
    }
  })