const validate = ({
  checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
  bagsNumber,
  location,
  toggleBtn1, toggleBtn2, toggleBtn3, toggleBtn4, toggleBtn5,
  addressStreet, addressCity, addressCode, addressPhone
  // dayName, hourName nie są widoczne z poziomu tej funkcji (walidacja przebiega wewnątrz komponentu FormFourthPage)
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
  if (!addressStreet) {
    errors.addressStreet = 'Wprowadź nazwę ulicy.';
  }
  if (!addressCity) {
    errors.addressCity = 'Wprowadź nazwę miasta.';
  }
  if (!addressCode || addressCode?.length < 5) {
    errors.addressCode = 'Wprowadź kod pocztowy (same cyfry).';
  }
  if (!addressPhone || addressPhone?.length < 9) {
    errors.addressPhone = 'Wprowadź numer telefonu.';
  }
  return errors;
};

export default validate;