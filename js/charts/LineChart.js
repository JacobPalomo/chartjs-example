class LineChart {
	constructor(canvasID, data) {
		const canvas = document.getElementById(canvasID)
		const ctx = canvas.getContext('2d')
		const labels = this.getLabels(data)
		const datasets = this.getDatasets(labels, data)

		new Chart(ctx, {
			type: 'line',
			data: {
				labels,
				datasets,
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				plugins: {
					legend: { display: true },
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
				borderWidth: 2,
				borderColor: getColor()[key],
				backgroundColor: getColor(25)[key],
				tension: 0.2,
			})
		})

		return datasets
	}
}
