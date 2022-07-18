
export const getSumOfItems = (list) => list.reduce((aggr,elem) => elem.choose ? aggr + elem.sumPrice : aggr,0)

export const chooseItem = ({ list, id, choose }) => {
	list.find((item) => item.id === id).choose = choose;
	return [...list];
}

export const chooseAll = ({ list, checked }) => list.map((item) => ({
	...item,
	choose: checked
}))

export const removeItem = ({ list, id }) => list.filter(elem => elem.id !== id)

export const basketChooseLength = (data) => {
	return data.filter(elem => elem.choose ? elem : false).length
}