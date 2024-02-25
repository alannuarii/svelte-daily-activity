export const filterByMonth = (activities, targetMonth) => {
	if (targetMonth) {
		const [year, month] = targetMonth.split("-");
		const targetMonthNumber = parseInt(month, 10) - 1; // Konversi ke indeks bulan (0-11)

		const filteredData = activities.filter((item) => {
			const itemDate = new Date(item.tanggal);
			const itemMonth = itemDate.getMonth();
			const itemYear = itemDate.getFullYear();

			return itemYear === parseInt(year, 10) && itemMonth === targetMonthNumber;
		});

		return filteredData;
	}
};
