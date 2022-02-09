const months = [
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
];

// convert date to a readable form
export const formatDate = (month, date, year) => {
  return `${months[month - 1]}, ${date}. ${year}`;
};

// convert date to a timestamp
export const timestampDate = (month, date, year) => {
  return new Date(year, month + 1, date + 1).valueOf();
};
