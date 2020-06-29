const validate = ({
  checkbox1, checkbox2, checkbox3, checkbox4, checkbox5
}) => {
  const errors = {};
  const checkboxes = {
    checkbox1, checkbox2, checkbox3, checkbox4, checkbox5
  };
  if (!Object.values(checkboxes).includes(true)) {
    errors.checkboxes = 'Zaznacz minimum jedną opcję.';
  }
  return errors;
};

export default validate;