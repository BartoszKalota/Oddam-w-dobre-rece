const validate = ({
  checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
  bagsNumber
}) => {
  const errors = {};
  const checkboxes = {
    checkbox1, checkbox2, checkbox3, checkbox4, checkbox5
  };
  if (!Object.values(checkboxes).includes(true)) {
    errors.checkboxes = 'Zaznacz minimum jedną opcję.';
  }
  if (!bagsNumber) {
    errors.bagsNumber = 'Wybierz liczbę worków.';
  }
  return errors;
};

export default validate;