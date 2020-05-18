
'use strict';
var openHours = [
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '06:00 AM',
  '07:00 AM',
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '07:00 PM'
];

var country = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

 Place function(min,max,avg,numberofCustomer,cookiesAomuntPH){
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.numberofCustomer=[];
    this.cookiesAomuntPH=[];
    total=0;
}

var saleh= new Place(10,20,2.6,['saleh','saleh'],['saleh2','s2aleh']);

console.log(saleh);

var seattle = {
  min: 23,
  max: 65,
  avg: 6.3,
  numberofCustomer: [],
  cookiesAomuntPH: [],
  total: 0,

  randomCperH: function () {
    this.numberofCustomer.push(
      Math.floor(
        Math.random() *
                (this.max - this.min) +
                this.min
      )
    );
  },

  cookiesPH: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.randomCperH();
      var cookies = Math.floor(
        this.numberofCustomer[i] *
                this.avg
      );
      // stored in the array (cookiesAomuntPH)
      this.cookiesAomuntPH.push(cookies);
      //   console.log(this.numberofCustomer[i]);

      // the sum of all the sold cookies
      this.total += cookies;
    }
  },

  // creating elements on HTML to hold the above collected data
  //   Display the values of each array as unordered lists in the browser
  render: function () {
    this.cookiesPH();
    var mainEl = document.getElementById('main');
    var articleEl = document.createElement('article');
    var textEl = document.createElement('p');
    mainEl.appendChild(articleEl);
    articleEl.appendChild(textEl);
    textEl.textContent = country[0];

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =
                openHours[i] +
                ' : ' +
                `${this.cookiesAomuntPH[i]}` +
                ' cookies';
    }
    // the total summation of the cookies
    var totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = ' Total : ' + this.total + ' cookies';
  }
};

seattle.render();
//tokyo
