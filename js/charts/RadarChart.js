class RadarChart {
	constructor(canvasID, data) {
		const canvas = document.getElementById(canvasID)
		const ctx = canvas.getContext('2d')
		const labels = this.getLabels(data)
		const datasets = this.getDatasets(labels, data)

		new Chart(ctx, {
			type: 'radar',
			data: {
				labels,
				datasets,
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				scales: {
					r: {
						ticks: { display: false },
						min: 0,
					},
				},
				elements: {
					line: {
						borderWidth: 3,
					},
					point: {
						pointBorderWidth: 2,
						pointRadius: 4,
						pointStyle: 'circle',
					},
				},
			},
		})
	}

	getLabels(data) {
		let labels = Array()
		for (const category in data) {
			data[category].map((record) => {
				if (!labels.find((label) => label === record.label)) {
					labels.push(record.label)
				}
			})
		}

		return labels
	}

	getDatasets(labels, data) {
		const categories = Object.keys(data)

		const values = Array()
		for (const category in data) {
			const valuesByCategory = Array()
			let index = 0
			for (let label = 0; label < labels.length; label++) {
				if (labels[label] === data[category][index]?.label) {
					valuesByCategory.push(data[category][index].value)
					if (index === data[category].length) {
						index = 0
					} else {
						index++
					}
				} else {
					valuesByCategory.push(0)
				}
			}
			values.push(valuesByCategory)
		}

		const datasets = Array()
		values.map((value, key) => {
			datasets.push({
				label: categories[key],
				data: value,
				fill: true,
				borderColor: getColor(),
				backgroundColor: getColor(10),
				hoverBackgroundColor: getColor(),
				pointBorderColor: getColor(),
				pointBackgroundColor: getColor(10),
				pointHoverBorderColor: getColor(),
				pointHoverBackgroundColor: getColor(),
			})
		})

		return datasets
	}
}
