// Script untuk akses ke google form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxkwP7MyoQmtfFxJSMTtgfxkxWl7S2ot9pav4DIH9ZWwjWbJ4sVDtafuf9GvKw3ztUgRQ/exec';
const form = document.forms['rifki-contact-form'];

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   Ketika tombol submit diklik
  //   Tampilkan tombol loading, hilangkan tombol kirim

  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
    // Ketika tombol submit diklik
    // Tampilkan tombol kirim, hilangkan tombol loading

    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    // Tampilkan Alert
    myAlert.classList.toggle('d-none');

    // Resen Form
    form.reset();

      console.log('Success', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
