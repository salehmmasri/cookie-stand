/* eslint-disable indent */
'use strict';
//array for the open hours contain 14 E
var openHours = [
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '12:00 PM',
    '06:00 AM',
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM'
];

// array to store objects.
var countryInfo = [];
//constructor function
function Store(
    storeAddress,
    min,
    max,
    avg
) {
    this.storeAddress = storeAddress;
    this.cookiesPH = [];
    this.randomCustomersPH = [];
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalOfTotal = 0; //total of total in all locals.
    this.totalCookies = 0;
    this.tossersNumberPerHour = [];
    countryInfo.push(this);
}

// function to make a random number for customers P/h.
Store.prototype.randomCustomersPerHour = function () {
    this.randomCustomersPH.push(
        Math.floor(
            Math.random() *
            (this.max - this.min) +
            this.min
        )
    );
};

Store.prototype.cookiesPurchasedPerHour = function () {
    for (var i = 0; i < openHours.length; i++) {
        this.randomCustomersPerHour();
        var cookies = Math.floor(
            this.randomCustomersPH[i] *
            this.avg
        );
        this.cookiesPH.push(cookies);
        this.totalCookies += cookies;
    }
};

Store.prototype.tossersNumber = function () {
    for (var i = 0; i < openHours.length; i++) {
        this.tossersNumberPerHour.push(
            Math.ceil(Math.ceil(this.randomCustomersPH[i] / 20))
        );
        this.totalOfTotal += this.tossersNumberPerHour[i];

    }
};

var containerTable = document.getElementById('Table');
var tableEl = document.createElement('table');
containerTable.appendChild(tableEl);

function tableHead() {
    var rows = document.createElement('thead');
    tableEl.appendChild(rows);
    var tableData = document.createElement('th');
    rows.appendChild(tableData);
    tableData.textContent = 'locals';
    for (var i = 0; i < openHours.length; i++) {
        tableData = document.createElement('th');
        rows.appendChild(tableData);
        tableData.setAttribute('class', 'header');
        tableData.textContent = openHours[i];
    }
    tableData = document.createElement('th');
    tableData.setAttribute('class', 'header');
    rows.appendChild(tableData);
    tableData.textContent = 'Daily-Total';
}
tableHead();

Store.prototype.renderConstructor = function () {
    this.cookiesPurchasedPerHour();
    this.tossersNumber();
    var rows = document.createElement('tbody');
    tableEl.appendChild(rows);
    rows.textContent = this.storeAddress;

    for (var i = 0; i < openHours.length; i++) {
        var tableData = document.createElement('td');
        rows.appendChild(tableData);
        tableData.textContent = this.cookiesPH[i] + ' cookies';
    }
    tableData = document.createElement('td');
    rows.appendChild(tableData);
    tableData.textContent = this.totalCookies + ' cookies';
};

// creating objects :
new Store('Seatle', '23', '65', '6.3');
new Store('Tokyo', '3', '24', '1.2');
new Store('Dubai', '11', '38', '3.7');
new Store('Paris', '20', '38', '2.3');
new Store('Lima', '2', '16', '4.6');


for (var build = 0; build < countryInfo.length; build++) {
    countryInfo[build].renderConstructor();
}

function tableFooter() {
    var rows = document.createElement('tfoot');
    rows.setAttribute('id', 'tfoot');
    tableEl.appendChild(rows);
    var tableData = document.createElement('td');
    rows.appendChild(tableData);
    rows.textContent = 'Totals';
    var totalOfTotal = 0;
    for (var hours = 0; hours < openHours.length; hours++) {
        var hourlySum = 0;
        for (var store = 0; store < countryInfo.length; store++) {
            hourlySum += countryInfo[store].cookiesPH[hours];
        }
        var tdEl = document.createElement('td');
        rows.appendChild(tdEl);
        tdEl.textContent = `${hourlySum}  cookies per hour`;
        totalOfTotal += hourlySum;
    }
    tdEl = document.createElement('td');
    rows.appendChild(tdEl);
    tdEl.textContent = `${totalOfTotal} total of totatl `;
}
tableFooter();
