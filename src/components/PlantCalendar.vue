<!-- 
      example usage: <PlantCalendar :plants="plantIds"/>
      props:
        - plants : Array  -> all plants infos

      TODO:   - fix month next and prev
              - add hover elements
              - better styling
-->

<template>
  <div class="month">
    <ul>
      <li class="prev" @click="seeNextMonth">&#10094;</li>
      <li class="next" @click="seePrevMonth">&#10095;</li>
      <li>
        {{ monthNames[currentMonth] }}<br />
        <span style="font-size: 18px">{{ currentYear }}</span>
      </li>
    </ul>
  </div>

  <ul class="weekdays">
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
    <li>Su</li>
  </ul>
  <ul class="days">
    <li v-for="date in currentMonthDatesArray" v-bind:key="date.getDate()">
      {{ date.getDate() }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  props: {
    plants: Array,
  },
  data() {
    return {
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      today: new Date(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentMonthDatesArray: [],
    };
  },
  methods: {
    getDaysInMonth(month, year) {
      var date = new Date(year, month, 1);
      var days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    getCurrentMonthDatesArray() {
      var daysOfTheMonth = this.getDaysInMonth(
        this.currentMonth,
        this.currentYear
      );

      var firstDateOfTheMonth = daysOfTheMonth[0];
      console.log(firstDateOfTheMonth);
      var dayOfWeek = firstDateOfTheMonth.getDay();
      // change sunday from 0 to 7
      dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
      for (let index = 1; index < dayOfWeek; index++) {
        var dayOfPreviousMonth = new Date(
          this.currentYear,
          this.currentMonth,
          0 - index + 1 // 0 means last day of previous month and so on
        );
        daysOfTheMonth.unshift(dayOfPreviousMonth);
      }

      var lastDayOfCurrentMonth = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      );
      dayOfWeek = lastDayOfCurrentMonth.getDay();
      // change sunday from 0 to 7
      dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
      var nextMonthDayCounter = 1;
      for (let index = dayOfWeek; index < 7; index++) {
        var dayOfNextMonth = new Date(
          this.currentYear,
          this.currentMonth + 1,
          nextMonthDayCounter
        );
        nextMonthDayCounter++;
        daysOfTheMonth.push(dayOfNextMonth);
      }
      return daysOfTheMonth;
    },
    seeNextMonth() {
      this.currentMonth++;
      this.currentMonthDatesArray = this.getCurrentMonthDatesArray();
    },
    seePrevMonth() {
      this.currentMonth--;
      this.currentMonthDatesArray = this.getCurrentMonthDatesArray();
    },
  },
  created() {
    this.currentMonthDatesArray = this.getCurrentMonthDatesArray();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
body {
  font-family: Verdana, sans-serif;
}

.month {
  padding: 70px 25px;
  width: 100%;
  background: #1abc9c;
  text-align: center;
}

.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.month .prev {
  float: left;
  padding-top: 10px;
}

.month .next {
  float: right;
  padding-top: 10px;
}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #777;
}

.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important;
}

/* Add media queries for smaller screens */
@media screen and (max-width: 720px) {
  .weekdays li,
  .days li {
    width: 13.1%;
  }
}

@media screen and (max-width: 420px) {
  .weekdays li,
  .days li {
    width: 12.5%;
  }
  .days li .active {
    padding: 2px;
  }
}

@media screen and (max-width: 290px) {
  .weekdays li,
  .days li {
    width: 12.2%;
  }
}
</style>
