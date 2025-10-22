const { addDays, format } = require('date-fns');

function showDateInfo() {
  const currentDate = new Date();
  const newDate = addDays(currentDate, 5);
  const formatted = format(newDate, "EEEE, MMMM do yyyy 'at' HH:mm:ss");

  console.log('Current date:', currentDate);
  console.log('Date after 5 days:', formatted);
}

module.exports = showDateInfo;
