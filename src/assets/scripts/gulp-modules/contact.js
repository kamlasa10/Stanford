(function ($) {

	const styleMap = [{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [{
				"saturation": "0"
			}]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels.icon",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [{
					"color": "#efebea"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [{
					"color": "#af9d94"
				},
				{
					"saturation": "0"
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels.text.fill",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "geometry.fill",
			"stylers": [{
				"saturation": "0"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
					"hue": "#ff0000"
				},
				{
					"saturation": "34"
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#6e3a35"
			}]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [{
					"visibility": "off"
				},
				{
					"lightness": "60"
				},
				{
					"gamma": "1.00"
				},
				{
					"hue": "#ff0000"
				},
				{
					"saturation": "-90"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
					"color": "#ffffff"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.icon",
			"stylers": [{
					"visibility": "simplified"
				},
				{
					"hue": "#ff0000"
				},
				{
					"weight": "0.01"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry.fill",
			"stylers": [{
					"color": "#bfb1a9"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry.stroke",
			"stylers": [{
					"color": "#bfb1a9"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "transit",
			"elementType": "labels.icon",
			"stylers": [{
					"visibility": "on"
				},
				{
					"hue": "#ff0000"
				},
				{
					"saturation": "-90"
				},
				{
					"lightness": "0"
				},
				{
					"gamma": "1.00"
				},
				{
					"weight": "1"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
					"color": "#dfd8d4"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text",
			"stylers": [{
				"saturation": "0"
			}]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
					"color": "#6e3a35"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "water",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}
	]

	var mapBlock = function () {

		// Создаём пустые масивы в которых будет храниться дальшейшая информация о маркерах

		var gmarkers1 = [];
		var markers1 = [];
		var infowindow = new google.maps.InfoWindow({
			content: '',
			maxWidth: 200
		});


		// Два масива для русской и украинской версии сайта. B функции addMarker() рассшифровка что означает каждый элемент масива


		markers1 = [

			['0', '', 50.422954, 30.522, 'main', "./assets/images/marker.svg", 'Stanford'],
			['1', '', 50.421333, 30.520622, 'main', "./assets/images/marker_sale.svg", 'Stanford']

		];
		markers2 = [
			['0', '', 50.422954, 30.522, 'main', "./assets/images/marker.svg", 'Stanford'],
			['1', '', 50.421333, 30.520622, 'main', "./assets/images/marker_sale.svg", 'Stanford']


		];


		// Фильтрация, функция принимает в параметр  категорию из дата атрибута и сравнивает, используя метод гугл API setMap скрывает и показывает 
		filterMarkers = function (category) {
			for (i = 0; i < markers1.length; i++) {
				marker = gmarkers1[i];
				if (marker.category == category || category == 'main') {
					marker.setMap(map);
					// marker.setAnimation(google.maps.Animation.DROP);
				} else {
					marker.setMap(null)
				}
			}
		}

		// функция вешает обработчик клика на все элементы списка и вызывает функцию filterMarkers передавая в нее значение дата атрибута
		var markItems = document.querySelectorAll('.mark-item');

		for (var i = 0; i < markItems.length; i++) {
			markItems[i].addEventListener('click', function () {
				console.log(markItems);

				markItems.forEach(function (item, i) {
					if (item.classList.contains('active-map-item')) {
						item.classList.remove('active-map-item');
					}
				});

				this.classList.add('active-map-item');
				var category = this.dataset.category;
				filterMarkers(category);
			});
		}


		// Функция добавления маркеров, берёт значение из масива вносит их в переменные и используя метод гугл API new google.maps.Marker клепает маркера
		function addMarker(marker) {
			var category = marker[4];
			var title = marker[1];
			var pos = new google.maps.LatLng(marker[2], marker[3]);
			var content = "<p class='content'>" + marker[6] + "</p>";
			var markerIcon = {
				url: marker[5]
			};
			marker1 = new google.maps.Marker({
				title: title,
				position: pos,
				category: category,
				map: map,
				icon: markerIcon,
				// animation: google.maps.Animation.DROP,
			});
			gmarkers1.push(marker1);
			// Marker click listener
			google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
				return function () {
					infowindow.setContent(content); // установка нужного контента в всплывайку
					infowindow.open(map, marker1); // открытие нужного окна
					map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
				}
			})(marker1, content));
		}


		// init карты все очевидно 
		var map = new google.maps.Map(document.getElementById('map-contact'), {
			center: {
				lat: 50.422954,
				lng: 30.522
			},
			zoom: 15,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});




		// настройка для смены языка проверяет адресную строку и в зависимости от выбраного языка подставляет нужный массив с данными
		var uri = window.location.href;
		var searchIndex = uri.search('/ru/');
		if (searchIndex > -1) {
			for (i = 0; i < markers2.length; i++) {
				addMarker(markers2[i]);
			}
		} else {
			for (i = 0; i < markers1.length; i++) {
				addMarker(markers1[i]);
			}
		}

		// берёт json файл и стилизует карту согласно настройкам в нём
		map.setOptions({
			styles: styleMap
		});



	};

	(function hpInitMap() {
		mapBlock();
		//scrollBtn();
	})();

})(jQuery);



