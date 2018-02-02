const sortObject = obj => {
  const keys = Object.keys(obj).sort();

  return keys
    .reduce((acc, key) => {
      let value = obj[key];

      // it's an object!
      if (Object(value) === value) {
        value = sortObject(value);
      }

      return { ...acc, [key]: value };
    }, {})
  ;
}

export default sortObject;
