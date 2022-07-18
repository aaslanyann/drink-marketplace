const initialState = {
	auth: {
		user: null,
		isLoad: false,
		status: ""
	},
	home: {
		sliderPhotos: [],
		isLoad: true
	},
	shop: {
		items: [],
		isLoad: false,
	},
	selectedItem: {
		current: {},
		isLoad: true
	},
	basket: {
		data: []
	},
	notifications: {
		data: null
	}

};

export default initialState;
