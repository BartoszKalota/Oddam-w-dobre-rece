export const sendMessage = ({ name, email, msg }, FORM_API) => () => {
  fetch(FORM_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message: msg
    })
  })
    .then(res => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      throw new Error('Błąd połączenia przy próbie wysłania formularza');
    })
    .catch(err => console.log(err));
};