// Date format in [Thursday, May 19]
exports.getDate = () => {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return today.toLocaleDateString('en-US', options);
};

// Day -> Thursday
exports.getDay = () => {
  const today = new Date();
  const options = { weekday: 'long' };

  return today.toLocaleDateString('en-US', options);
};
