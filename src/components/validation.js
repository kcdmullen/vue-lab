export const validationRules = {
  email: [
    (v) =>
      !v ||
      // eslint-disable-next-line
      /^[a-zA-Z0-9_.+&\\-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v) ||
      'Email must be valid',
  ],
  ssn: [
    (v) =>
      !v ||
      /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/.test(v) ||
      'Please enter a valid SSN.',
    (v) => !v || (v && v.length === 11) || 'Please enter a valid SSN.',
  ],
  zip: [
    (v) => /^\d+$/.test(v) || 'Please enter the five-digit zip code.',
    (v) => (v && v.length === 5) || 'Please enter the five-digit zip code.',
  ],
  tel: [
    (v) =>
      !v ||
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v) ||
      `Enter a ten-digit number with country code - +1 xxx-xxx-xxxx`,

    // Ten digits plus characters inserted by the mask
    (v) =>
      !v ||
      v.length === 15 ||
      `Enter a ten-digit number with country code - +1 xxx-xxx-xxxx`,
  ],
  datefield: [
        // xx-xx-xxxx checks for days in month, allows 29 days for any February
        (v) =>
          /^(?:(?:0[13578]|1[02])-(?:0[1-9]|[12][0-9]|3[01])|(?:0[469]|11)-(?:0[1-9]|[12][0-9]|30)|02-(?:0[1-9]|1[0-9]|2[0-9]))-\d{4}$/.test(v) ||
          'Please enter a valid date.',
        (v) => (v && v.length === 10) || 'Please enter a valid date.',
  ],
  requiredRule: [(v) => !!v || 'This field is required.'],
};

