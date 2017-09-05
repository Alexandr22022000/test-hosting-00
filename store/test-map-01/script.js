"use strict";

var data = [{
    title: "Кот",
    smallDescription: "Это кот, просто кот.",
    description: "Это более подробное описание кота, просто кота. Здесь можно написать все что угодно",
    position: [54.422114, 86.3],
    firstImg: "https://mediaflow.in.ua/wp-content/uploads/2016/09/Ctmd9FLWEAAPZDE-1.jpg",
    secondImg: "https://creamythecat.files.wordpress.com/2011/02/dsc064151.jpg"
}, {
    title: "Собака",
    smallDescription: "Это собака, хотя здесь может быть и что то другое.",
    description: "Это само собой более подробное описание собаки. Это тестовый контент и вместо него может быть все что угодно.",
    position: [54.4, 86.303692],
    firstImg: "http://mtdata.ru/u20/photo4265/20205795997-0/original.jpg",
    secondImg: "https://im0-tub-ru.yandex.net/i?id=2edd247a04b2bd8a0dcd6472134cd7fc&n=33&h=215&w=382"
}, {
    title: "Крыса",
    smallDescription: "Крыса, да я не мог найти не чего \"по лучше\"",
    description: "Это тестовый контент и я не придумал не чего лучше чем 3 первых першедших в голову животных.",
    position: [54.41, 86.32],
    firstImg: "https://s00.yaplakal.com/pics/pics_original/2/4/6/9683642.jpg",
    secondImg: "https://rusargument.ru/data/photo/071517_055999783190.jpg"
}];

ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [54.422114, 86.303692],
        zoom: 12
    });

    var _loop = function _loop(key) {
        var point = new ymaps.Placemark(data[key].position, {
            balloonContent: "\n                <div class=\"point\">\n                    <h2 class=\"point__title\">" + data[key].title + "</h2>\n                    <img class=\"point__img\" src=\"" + data[key].firstImg + "\"/>\n                    <p class=\"point__description\">" + data[key].smallDescription + "</p>\n                </div>\n            "
        });

        point.events.add('click', function () {
            document.getElementById('information__title').textContent = data[key].title;
            document.getElementById('information__description').textContent = data[key].description;

            document.getElementById('information__img-0').src = data[key].firstImg;
            document.getElementById('information__img-1').src = data[key].secondImg;
        });

        map.geoObjects.add(point);
    };

    for (var key in data) {
        _loop(key);
    }
});