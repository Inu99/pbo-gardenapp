<!-- 
      example usage: <PlantCalendar :plants="plantIds"/>

      TODO:   - finish hover elements
              - better styling
-->

<template>
  <div class="month">
    <ul>
      <li class="prev" @click="seePrevMonth">&#10094;</li>
      <li class="next" @click="seeNextMonth">&#10095;</li>
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
    <li v-for="date in previousMonthDatesArray" v-bind:key="date.getDate()">
      {{ date.getDate() }}
    </li>
    <li v-for="date in currentMonthDatesArray" v-bind:key="date.getDate()">
      <div class="hoverup">
        {{ date.getDate() }}
        <span class="hoveruptext">hoverup text</span>
      </div>
    </li>
    <li v-for="date in nextMonthDatesArray" v-bind:key="date.getDate()">
      {{ date.getDate() }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  props: {},
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
      nextMonthDatesArray: [],
      previousMonthDatesArray: [],
      currentMonthDatesFinalObject: [],
    };
  },
  methods: {
    getDaysInMonth(month, year) {
      let date = new Date(year, month, 1);
      let days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    getCurrentMonthDatesArray() {
      this.nextMonthDatesArray = [];
      this.previousMonthDatesArray = [];
      this.currentMonthDatesFinalObject = [];
      let daysOfTheMonth = this.getDaysInMonth(
        this.currentMonth,
        this.currentYear
      );
      this.currentMonthDatesArray = daysOfTheMonth;
      console.log("daysOfTheMonth current", this.currentMonthDatesArray);
      let firstDateOfTheMonth = daysOfTheMonth[0];
      console.log(firstDateOfTheMonth);
      let dayOfWeek = firstDateOfTheMonth.getDay();
      // change sunday from 0 to 7
      dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
      for (let index = 1; index < dayOfWeek; index++) {
        let dayOfPreviousMonth = new Date(
          this.currentYear,
          this.currentMonth,
          0 - index + 1 // 0 means last day of previous month and so on
        );
        this.previousMonthDatesArray.unshift(dayOfPreviousMonth);
      }
      console.log("daysOfTheMonth with prev", this.previousMonthDatesArray);
      let lastDayOfCurrentMonth = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      );
      dayOfWeek = lastDayOfCurrentMonth.getDay();
      // change sunday from 0 to 7
      dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
      let nextMonthDayCounter = 1;
      for (let index = dayOfWeek; index < 7; index++) {
        let dayOfNextMonth = new Date(
          this.currentYear,
          this.currentMonth + 1,
          nextMonthDayCounter
        );
        nextMonthDayCounter++;
        this.nextMonthDatesArray.push(dayOfNextMonth);
      }
      console.log("daysOfTheMonth with next", this.nextMonthDatesArray);
      //this.createDatesWithHoverups();
    },
    createDatesWithHoverups() {
      let i = 0;
      this.currentMonthDatesArray.forEach((element) => {
        let dateObject = {};
        dateObject["date"] = element;
        // this.$store.getters.userPlants.find(
        //   (obj) => obj.harvestTimeBegin == element
        // ).harvestTimeBegin;
        dateObject["harvestTimeBegin"] = null;
        dateObject["harvestTimeEnd"] = null;
        this.currentMonthDatesFinalObject[i++] = dateObject;
      });
    },
    mod(n, m) {
      return ((n % m) + m) % m;
    },
    seeNextMonth() {
      this.currentMonth = this.mod(this.currentMonth + 1, 12);
      if (this.currentMonth == 0) {
        this.currentYear++;
      }
      this.getCurrentMonthDatesArray();
    },
    seePrevMonth() {
      this.currentMonth = this.mod(this.currentMonth - 1, 12);
      if (this.currentMonth == 11) {
        this.currentYear--;
      }
      this.getCurrentMonthDatesArray();
    },
  },
  created() {
    this.getCurrentMonthDatesArray();
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

/* hoverup css */
.hoverup {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* hoverup text */
.hoverup .hoveruptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;

  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

/* Show the hoverup text when you mouse over the hoverup container */
.hoverup:hover .hoveruptext {
  visibility: visible;
}
</style>
