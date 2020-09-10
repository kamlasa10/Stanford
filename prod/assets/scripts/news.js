(function ($) {

	/**********************************/
	/*
	 * edit table start
	 */





	// DOM elems wich need for filter
	const elemsWichMakeFilter = {
		rows: document.querySelectorAll('.card.js-news-card'), // все карточки с квартирами
		checkbox: [{
				labelKey: 'month',
				DOMElem: $('.js_monthcheckbox'),
				typeData: 'array'
			},
			{
				labelKey: 'year',
				DOMElem: $('.js_yearcheckbox'),
				typeData: 'array'
			},
		],
	}
	

	// Записывает все квартиры в отдельный массив
	let appartments = [];
	elemsWichMakeFilter.rows.forEach(function (row) {		
		appartments.push(appartment(row))
	});
	console.log(appartments);
	


	// make DB all flats
	function appartment(app) {
		return {
			flat: app,
			month: parseInt(app.dataset.month),
			year: parseInt(app.dataset.year),
			//this.test = parseInt(app.dataset.test); // new param filter

		}
	}




	/*
	 * edit table end
	 */
	/**********************************/





	// current state filter
	const filter = {
		month: [],
		year: [], // new param filter
	};



	// set state filter checkbox
	function setCheckboxFilter(input) {
		const key = $(input).data().key;
		const inx = elemsWichMakeFilter.checkbox.findIndex(el => el.labelKey === key);
		filter[key] = [];

		[...elemsWichMakeFilter.checkbox[inx].DOMElem].forEach(function (checkbox) {
			if (checkbox.checked) {
				
				filter[key].push((checkbox.value === 'null') ? checkbox.value : +checkbox.value);
			}
		});

	};


	// handler for all chackbox
	elemsWichMakeFilter.checkbox.forEach((el) => {
		
		el.DOMElem.on('change', function () {
			setCheckboxFilter(this);
			console.log(filter);
			
			sortNews()
		});
	});

	// get default val all checkbox in first load
	elemsWichMakeFilter.checkbox.forEach((el) => {
		[...el.DOMElem].forEach((checkBox) => {
			setCheckboxFilter(checkBox);
		});
	});




	// Обработчик на кнопку поиска
	function sortNews() {		
	
		appartments.forEach(function (appartment) {
			appartment.flat.style.display = 'block';
			for (var key in filter) {
				
				if (Array.isArray(filter[key]) && filter[key].length > 0) {

							if (filter.month.includes('null') && filter.year.includes('null')) {
								appartment.flat.style.display = 'flex';
								break;
							}
							
							if (!filter[key].includes(appartment[key]) && !filter[key].includes('null')) {
								appartment.flat.style.display = 'none';
								break;
							}
				}
			}
			
		});

	};



})(jQuery);