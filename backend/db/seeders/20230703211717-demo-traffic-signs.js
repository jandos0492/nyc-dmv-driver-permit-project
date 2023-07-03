'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("TrafficSigns", [
      {
        no: 1,
        image: "/images/traffic-signs/1.jpg",
        descriptionEnglish: '"STOP" - Come to a full stop, yield thr right-of-way to vehicles and pedestrioans in or approaching the intersection. Go when it is safe.',
        descriptionRussian: '"СТОП" - Пропустить пешеходов и транспорт на перекрёстке. Ехать, когда безопасно.'
      },
      {
        no: 2,
        image: "/images/traffic-signs/2.jpg",
        descriptionEnglish: '"YIELD" - Slow down as you approach the intersection. Prepare to stop and yield the right-of-way to vehicles and pedestrians in or approaching the interection.',
        descriptionRussian: '"Уступи дорогу" - Медленно достичь перекркстка. Приготовиться к остановке. Пропустить пешеходов и транспорт на перекрёстке. Полная остановка если того требуют обстоятельства.'
      },
      {
        no: 3,
        image: "/images/traffic-signs/3.jpg",
        descriptionEnglish: '"Railroad corssing" - There is a railroad crossing ahead. Use caution, and be prepared to stop.',
        descriptionRussian: '"Железнодорожный переезд." Впереди железнодорожный переезд. Вы должны ехать внимательно и быть готовы к остановке.'
      },
      {
        no: 4,
        image: "/images/traffic-signs/4.jpg",
        descriptionEnglish: "One Way Traffic - Do Not Enter",
        descriptionRussian: "Одностороннее даижение. Нет въезда"
      },
      {
        no: 5,
        image: "/images/traffic-signs/5.jpg",
        descriptionEnglish: "No U-Turn",
        descriptionRussian: "Разворот запрещён"
      },
      {
        no: 6,
        image: "/images/traffic-signs/6.jpg",
        descriptionEnglish: "No Left Turn",
        descriptionRussian: "Левый поворот запрещён"
      },
      {
        no: 7,
        image: "/images/traffic-signs/7.jpg",
        descriptionEnglish: "Keep Right of Divider",
        descriptionRussian: "Держитесь правее от разделителя"
      },
      {
        no: 8,
        image: "/images/traffic-signs/8.jpg",
        descriptionEnglish: "Right lane ends - stay to the left",
        descriptionRussian: "Сужение правого края дороги"
      },
      {
        no: 9,
        image: "/images/traffic-signs/9.jpg",
        descriptionEnglish: "Divided Highway Ends",
        descriptionRussian: "Разделённый Highway заканчивается"
      },
      {
        no: 10,
        image: "/images/traffic-signs/10.jpg",
        descriptionEnglish: "Two Way Traffic",
        descriptionRussian: "Двухстороннее движение"
      },
      {
        no: 11,
        image: "/images/traffic-signs/11.jpg",
        descriptionEnglish: "Hill Ahead",
        descriptionRussian: "Впереди склон"
      },
      {
        no: 12,
        image: "/images/traffic-signs/12.jpg",
        descriptionEnglish: "Slippery When Wet",
        descriptionRussian: "Скользко, когда влажно"
      },
      {
        no: 13,
        image: "/images/traffic-signs/13.jpg",
        descriptionEnglish: "Traffic Signal Ahead",
        descriptionRussian: "Дорожный светофор впереди"
      },
      {
        no: 14,
        image: "/images/traffic-signs/14.jpg",
        descriptionEnglish: "Merging Traffic Entering From Right",
        descriptionRussian: "Справа в движение /traffic/ вливается дорога"
      },
      {
        no: 15,
        image: "/images/traffic-signs/15.jpg",
        descriptionEnglish: "School Crossing",
        descriptionRussian: "Школьный переход"
      },
      {
        no: 16,
        image: "/images/traffic-signs/16.jpg",
        descriptionEnglish: "Hospital  To The Right",
        descriptionRussian: "Справа госпиталь"
      },
      {
        no: 17,
        image: "/images/traffic-signs/17.jpg",
        descriptionEnglish: "Speed Limit 50 mph",
        descriptionRussian: "Ограничение скорости 50 миль в час"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("TrafficSigns")
  }
};
