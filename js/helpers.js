const getColor = (opacity) => {
	const colors = [
		'#ffdd00',
		'#ffc300',
		'#ffb700',
		'#ffaa00',
		'#ffa200',
		'#ff9500',
		'#ff8800',
		'#ff7b00',
	]
	// '#03045E',
	// 	'#023E8A',
	// 	'#0077B6',
	// 	'#0096C7',
	// 	'#00B4D8',
	// 	'#48CAE4',
	// 	'#90E0EF',
	// 	'#ADE8F4',
	// 	'#CAF0F8',

	return colors.map((color) => (opacity ? `${color + opacity}` : color))
}
