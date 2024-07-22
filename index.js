/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(data => createEmployeeRecord(data));
}

function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function allWagesFor() {
    return this.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate.call(this, event.date);
    }, 0);
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
        return total + allWagesFor.call(record);
    }, 0);
}

module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll
};

