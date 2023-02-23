Chart.defaults.color = '#bdbdbd'
Chart.defaults.borderColor = '#bdbdbd15'

const printCharts = () => {
	renderDoughnutChart()
	renderRadarChart()
	renderBarChart()
	renderPieChart()
	renderPolarChart()
	renderLineChart()
}

const renderDoughnutChart = () => {
	const data = {
		'2022-12-01': [
			{ label: 'Capturas', value: 10 },
			{ label: 'Cumplimientos', value: 20 },
			{ label: 'Incumplimientos', value: 30 },
		],
		'2022-12-02': [
			{ label: 'Capturas', value: 5 },
			{ label: 'Cumplimientos', value: 12 },
			{ label: 'Incumplimientos', value: 42 },
		],
	}

	new DoughnutChart('chart1', data)
}

const renderRadarChart = () => {
	const data = {
		'2022-12-01': [
			{ label: 'Capturas', value: 100 },
			{ label: 'Cumplimientos', value: 50 },
			{ label: 'Incumplimientos', value: 90 },
		],
		'2022-12-02': [
			{ label: 'Capturas', value: 59 },
			{ label: 'Cumplimientos', value: 67 },
			{ label: 'Incumplimientos', value: 82 },
		],
		'2022-12-03': [
			{ label: 'Capturas', value: 29 },
			{ label: 'Cumplimientos', value: 87 },
			{ label: 'Incumplimientos', value: 40 },
		],
	}

	new RadarChart('chart2', data)
}

const renderPieChart = () => {
	const data = {
		'SGP Chart 3': [
			{ label: 'Capturas', value: 10 },
			{ label: 'Cumplimientos', value: 20 },
			{ label: 'Incumplimientos', value: 30 },
		],
	}

	new PieChart('chart3', data)
}

const renderPolarChart = () => {
	const data = {
		'SGP Chart 3': [
			{ label: 'Capturas', value: 10 },
			{ label: 'Cumplimientos', value: 20 },
			{ label: 'Incumplimientos', value: 30 },
		],
	}

	new PolarChart('chart4', data)
}

const renderBarChart = () => {
	const data = {
		Capturas: [
			{ label: '2016-12-25', value: 10 },
			{ label: '2016-12-26', value: 20 },
			{ label: '2016-12-27', value: 30 },
		],

		Cumplimientos: [
			{ label: '2016-12-25', value: 15 },
			{ label: '2016-12-29', value: 65 },
		],

		Incumplimientos: [{ label: '2016-12-29', value: 70 }],
	}

	new BarChart('chart5', data)
}

const renderLineChart = () => {
	const data = {
		Capturas: [
			{ label: '2016-12-25', value: 10 },
			{ label: '2016-12-26', value: 20 },
			{ label: '2016-12-27', value: 30 },
			{ label: '2016-12-28', value: 15 },
			{ label: '2016-12-29', value: 65 },
			{ label: '2016-12-30', value: 10 },
			{ label: '2016-12-31', value: 20 },
			{ label: '2017-01-01', value: 30 },
			{ label: '2017-01-02', value: 15 },
			{ label: '2017-01-03', value: 65 },
		],
	}

	new LineChart('chart6', data)
}

printCharts()
