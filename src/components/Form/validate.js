const validate = ({
  checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
  bagsNumber,
  location,
  toggleBtn1, toggleBtn2, toggleBtn3, toggleBtn4, toggleBtn5
}) => {
  const errors = {};
  const checkboxes = {
    checkbox1, checkbox2, checkbox3, checkbox4, checkbox5
  };
  const toggleBtns = {
    toggleBtn1, toggleBtn2, toggleBtn3, toggleBtn4, toggleBtn5
  };
  if (!Object.values(checkboxes).includes(true)) {
    errors.checkboxes = 'Zaznacz minimum jedną opcję.';
  }
  if (!bagsNumber) {
    errors.bagsNumber = 'Wybierz liczbę worków.';
  }
  if (!location) {
    errors.location = 'Wybierz lokalizację.';
  }
  if (!Object.values(toggleBtns).includes(true)) {
    errors.toggleBtns = 'Wybierz komu chcesz pomóc.';
  }
  return errors;
};

export default validate;