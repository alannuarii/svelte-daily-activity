export const date2 = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export const date1 = (tanggal) => {
	const days = [
		'Minggu',
		'Senin',
		'Selasa',
		'Rabu',
		'Kamis',
		'Jumat',
		'Sabtu'
	];

	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const dayIndex = date.getDay();
	const day = days[dayIndex];
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day}, ${date.getDate()} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// Sabtu, 6 Mei 2023
};

export const date3 = (tanggal) => {
	const inputDateStr = tanggal;

	// Membuat objek Date dari string tanggal input
	const inputDate = new Date(inputDateStr);

	// Mendapatkan tahun, bulan, dan tanggal dari objek Date
	const year = inputDate.getFullYear();
	const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0 (Januari = 0)
	const day = String(inputDate.getDate()).padStart(2, "0");

	// Menggabungkan tahun, bulan, dan tanggal dalam format "YYYY-MM-DD"
	const formattedDate = `${year}-${month}-${day}`;

	return formattedDate
	// 2023-12-08
}


