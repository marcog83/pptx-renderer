const isPercent = (value) => /((-)?\d+\.?\d*)%/g.exec(value);

/**
 * Get percentage value of input
 *
 * @param {string} value - value of input
 * @returns {Object} percent value (if matches)
 */
const matchPercent = (value) => {
  const match = isPercent(value);
  const HUNDRED = 100;
  const TEN = 10;

  if (match) {
    const f = parseFloat(match[1], TEN);

    const percent = f / HUNDRED;

    return { percent, value: f };
  }

  return null;
};

export default matchPercent;
