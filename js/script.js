const form = document.getElementById('contactForm');
const greetingText = document.getElementById('greeting');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('name').value;
    const tanggal = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('message').value;

    if (nama.length < 3) {
        alert('Nama minimal 3 karakter');
        return;
    }

    if (pesan.length < 5) {
        alert('Pesan minimal 5 karakter');
        return;
    }

    greetingText.innerText = `Halo ${nama}`;

    const waktuSekarang = new Date().toLocaleString();

    document.getElementById('res-time').innerText = waktuSekarang;
    document.getElementById('res-nama').innerText = nama;
    document.getElementById('res-tanggal').innerText = tanggal;
    document.getElementById('res-gender').innerText = gender;
    document.getElementById('res-pesan').innerText = pesan;

    alert('Data Berhasil Terkirim!');
});