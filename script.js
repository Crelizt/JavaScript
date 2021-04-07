const user = document.getElementById('user');

//ES 5
const user_logged_in = "Calvin"
// user.innerHTML = "Selamat Datang, " + user_logged_in;

//ES 6
user.innerHTML = `Anda berhasil login ${user_logged_in}`;