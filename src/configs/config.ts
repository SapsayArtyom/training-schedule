export interface IDay {
    name: string,
    id: number,
    link: string,
    weeks: string[],
    descriptions?: string
}

export interface ISchedule {
    day: string,
    exercises: IDay[],
}
export interface IProgramm {
    programmId: number,
    programmIds: number[],
    startProgramm: number,
    durationProgramm: number,
}

export const settings: IProgramm = {
    programmId: 2,
    programmIds: [1, 2],
    durationProgramm: 8,  //weeks
    startProgramm: 1695621600000 //'Mon Sep 25 2023 08:00:00',
    // startProgramm: 1694757600000 //'Mon Sep 15 2023 08:00:00',
}

export const config: ISchedule[][] = [
    [{
            day: 'monday',
            exercises: [
                {
                    name: 'Присед с гантелей',
                    id: 0,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9F%D1%80%D0%B8%D1%81%D0%B5%D0%B4',
                    weeks: ['3*8', '2*8', '4*8', '3*8', '4*12', '2*8', '3*8', '4*12', '3*8', '2*8', '4*8', '3*8', '2*8',],
                },
                {
                    name: 'Тяга верхнего блока',
                    id: 1,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0.mp4',
                    weeks: ['3*15', '2*10', '4*8', '3*12', '4*12', '2*12', '3*20', '4*12', '3*15', '2*10', '4*8', '3*12', '2*12',],
                },
                {
                    name: 'Гиперэкстензия',
                    id: 2,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%8D%D0%BA%D1%81%D1%82%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F',
                    weeks: ['3*15', '2*15', '4*15', '3*20', '4*20', '2*15', '3*20', '4*20', '3*15', '2*15', '4*15', '3*20', '2*15',],
                },
                {
                    name: 'Тяга блока к поясу',
                    id: 3,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%BA%20%D0%BF%D0%BE%D1%8F%D1%81%D1%83',
                    weeks: ['3*8', '2*8', '4*12', '3*8', '4*12', '2*8', '3*12', '4*12', '3*8', '2*8', '4*12', '3*8', '2*8',],
                },
                {
                    name: 'Выпады стоя назад',
                    id: 4,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B%20%D0%BD%D0%B0%D0%B7%D0%B0%D0%B4%20(%D0%B7%D0%B0%D0%B4%D0%BD%D1%8F%D1%8F%20%D0%BD%D0%BE%D0%B3%D0%B0%20%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%B7%D0%B8%D1%82%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%BB%D1%83)/%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B%20%D1%81%D1%82%D0%BE%D1%8F.mp4',
                    weeks: ['3*8', '2*8', '4*8', '3*12', '4*8', '2*8', '3*8', '4*8', '3*8', '2*8', '4*8', '3*12', '2*8',],
                },
                {
                    name: 'Отжимания',
                    id: 5,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F/%D0%9E%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['3*8', '2*8', '4*8', '3*8', '4*12', '2*8', '3*8', '4*12', '3*8', '2*8', '4*8', '3*8', '2*8',],
                },
                {
                    name: 'Отведения сидя',
                    id: 6,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B8%D0%B4%D1%8F',
                    weeks: ['3*8', '2*8', '4*8', '3*8', '4*12', '2*8', '3*8', '4*12', '3*8', '2*8', '4*8', '3*8', '2*8',],
                },
                {
                    name: 'Пресс',
                    id: 7,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D1%81%D0%BA%D1%80%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D1%81%D0%BA%D1%80%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',],
                },
            ],
        },
        {
            day: 'wednesday',
            exercises: [
                {
                    name: 'Румынская тяга',
                    id: 0,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A0%D1%83%D0%BC%D1%8B%D0%BD%D1%81%D0%BA%D0%B0%D1%8F',
                    weeks: ['3*8', '2*12', '4*12', '3*8', '4*8', '2*8', '3*12', '4*8', '3*8', '2*12', '4*12', '3*8', '2*8',],
                },
                {
                    name: 'Отжимания',
                    id: 1,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F/%D0%9E%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['3*15', '2*15', '4*15', '3*20', '4*20', '2*15', '3*20', '4*20', '3*15', '2*15', '4*15', '3*20', '2*15',],
                },
                {
                    name: 'Болгарский сплит присет',
                    id: 2,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A1%D0%BF%D0%BB%D0%B8%D1%82%20%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A1%D0%BF%D0%BB%D0%B8%D1%82%20%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4.mp4',
                    weeks: ['3*8', '2*8', '4*12', '3*15', '4*8', '2*8', '3*12', '4*8', '3*8', '2*8', '4*12', '3*15', '2*8',],
                },
                {
                    name: 'Разгибание с косичкой',
                    id: 3,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A0%D0%B0%D0%B7%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B5%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%B8%D1%86%D0%B5%D0%BF%D1%81/%D0%A0%D0%B0%D0%B7%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B5%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%B8%D1%86%D0%B5%D0%BF%D1%81.mp4',
                    weeks: ['3*12', '2*8', '4*8', '3*15', '4*8', '2*15', '3*8', '4*15', '3*12', '2*8', '4*8', '3*15', '2*15',],
                },
                {
                    name: 'Мостик с резинкой',
                    id: 4,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA.mp4',
                    weeks: ['3*8', '2*8', '4*15', '3*8', '4*15', '2*8', '3*8', '4*15', '3*8', '2*8', '4*15', '3*8', '2*8',],
                },
                {
                    name: 'Тяга блока к поясу',
                    id: 5,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%BA%20%D0%BF%D0%BE%D1%8F%D1%81%D1%83',
                    weeks: ['3*8', '2*8', '3*8', '3*15', '3*8', '2*12', '3*8', '3*8', '3*8', '2*8', '3*8', '3*15', '2*12',],
                },
                {
                    name: 'Сгибание голени',
                    id: 6,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A1%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B3%D0%BE%D0%BB%D0%B5%D0%BD%D0%B8/%D0%A1%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B3%D0%BE%D0%BB%D0%B5%D0%BD%D0%B8.mp4',
                    weeks: ['3*8', '2*8', '4*12', '3*15', '4*8', '2*8', '3*15', '4*8', '3*8', '2*8', '4*12', '3*15', '2*8',],
                },
                {
                    name: 'Пресс',
                    id: 7,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A1%D0%BA%D1%80%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/%D0%A1%D0%BA%D1%80%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',],
                },
            ]
        },
        {
            day: 'friday',
            exercises: [
                {
                    name: 'Присед с гантелей',
                    id: 0,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9F%D1%80%D0%B8%D1%81%D0%B5%D0%B4',
                    weeks: ['3*20', '2*12', '4*15', '3*20', '4*20', '2*8', '3*15', '3*8', '3*20', '2*12', '4*15', '3*20', '2*8',],
                },
                {
                    name: 'Жим 45',
                    id: 1,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%96%D0%B8%D0%BC45/%D0%96%D0%B8%D0%BC45.mp4',
                    weeks: ['3*8', '2*8', '4*12', '3*12', '4*8', '2*8', '3*12', '3*12', '3*8', '2*8', '4*12', '3*12', '2*8',],
                },
                {
                    name: 'Мостик с резинкой',
                    id: 2,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA.mp4',
                    weeks: ['3*15', '2*10', '4*8', '3*15', '4*12', '2*12', '3*20', '3*8', '3*15', '2*10', '4*8', '3*15', '2*12',],
                },
                {
                    name: 'Боковые отведения',
                    id: 3,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%91%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/%D0%91%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['3*12', '2*8', '4*8', '3*12', '4*8', '2*8', '3*15', '3*12', '3*12', '2*8', '4*8', '3*12', '2*8',],
                },
                {
                    name: 'Махи на ягодицы',
                    id: 4,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%B0%D1%85%D0%B8%20%D0%BD%D0%B0%20%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B/%D0%9C%D0%B0%D1%85%D0%B8%20%D0%BD%D0%B0%20%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B.mp4',
                    weeks: ['3*15', '2*12', '4*12', '3*12', '4*12', '2*12', '3*20', '3*8', '3*15', '2*12', '4*12', '3*12', '2*12',],
                },
                {
                    name: 'Отведения в бок в наклон',
                    id: 5,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B1%D0%BE%D0%BA%20%D0%B2%20%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%B5%20%D0%B8%D0%BB%D0%B8%20%D0%9C%D0%B0%D1%85%D0%B8%20%D0%B2%20%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83%20%D0%BF%D0%BE%D0%B4%20%D1%83%D0%B3%D0%BE%D0%BB%D0%BE%D0%BC/%D0%9E%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B1%D0%BE%D0%BA%20%D0%B2%20%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%B5%20%D0%B8%D0%BB%D0%B8%20%D0%9C%D0%B0%D1%85%D0%B8%20%D0%B2%20%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83%20%D0%BF%D0%BE%D0%B4%20%D1%83%D0%B3%D0%BE%D0%BB%D0%BE%D0%BC%20.mp4',
                    weeks: ['3*15', '2*15', '4*15', '3*20', '4*20', '2*15', '3*20', '4*20', '3*15', '2*15', '4*15', '3*20', '2*15',],
                },
                {
                    name: 'Отведения сидя',
                    id: 6,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B8%D0%B4%D1%8F',
                    weeks: ['3*20', '2*12', '4*15', '3*20', '4*20', '2*8', '3*15', '3*8', '3*20', '2*12', '4*15', '3*20', '2*8',],
                },
            ],
        },
    ],
    [
        {
            day: 'monday',
            exercises: [
                {
                    name: 'Болгарский сплит прис',
                    id: 0,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A1%D0%BF%D0%BB%D0%B8%D1%82%20%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A1%D0%BF%D0%BB%D0%B8%D1%82%20%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4.mp4',
                    weeks: ['3*8', '2*8', '3*6', '3*8', '3*8', '2*8', '3*12', '3*8',],
                },
                {
                    name: 'Тяга блока к поясу',
                    id: 1,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0.mp4',
                    weeks: ['3*15', '2*10', '3*8', '3*12', '3*20', '2*12', '3*12', '3*8',],
                },
                {
                    name: 'Мостик с резинкой',
                    id: 2,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA.mp4',
                    weeks: ['3*15', '2*15', '3*15', '3*20', '3*20', '2*15', '3*20', '3*15',],
                },
                {
                    name: 'Тяга верхнего блока',
                    id: 3,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0.mp4',
                    weeks: ['3*8', '2*8', '3*12', '3*8', '3*12', '2*8', '3*12', '3*8',],
                },
                {
                    name: 'Румынская на 1 ноге',
                    id: 4,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A0%D1%83%D0%BC%D1%8B%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%82%D1%8F%D0%B3%D0%B0%20%D0%BD%D0%B0%201%20%D0%BD%D0%BE%D0%B3%D0%B5',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
                {
                    name: 'Тяга блока к поясу',
                    id: 5,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0.mp4',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
                {
                    name: 'Фрогги',
                    id: 6,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A4%D1%80%D0%BE%D0%B3%D0%B3%D0%B8/%D0%A4%D1%80%D0%BE%D0%B3%D0%B3%D0%B8.mp4',
                    weeks: ['3*15', '2*12', '3*12', '3*15', '3*20', '2*12', '3*15', '3*12',],
                },
            ],
        },
        {
            day: 'wednesday',
            exercises: [
                {
                    name: 'Румынская тяга',
                    id: 0,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A0%D1%83%D0%BC%D1%8B%D0%BD%D1%81%D0%BA%D0%B0%D1%8F',
                    weeks: ['3*6', '2*12', '3*12', '3*6', '3*12', '2*8', '3*6', '3*12',],
                },
                {
                    name: 'Жим лежа',
                    id: 1,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%96%D0%B8%D0%BC45/%D0%96%D0%B8%D0%BC45.mp4',
                    weeks: ['3*15', '2*15', '3*15', '3*20', '3*20', '2*15', '3*20', '3*15',],
                },
                {
                    name: 'Мостик с резинкой',
                    id: 2,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA/%D0%9C%D0%BE%D1%81%D1%82%D0%B8%D0%BA.mp4',
                    weeks: ['3*8', '2*8', '3*12', '3*15', '3*12', '2*8', '3*8', '3*12',],
                },
                {
                    name: 'Боковые отведения',
                    id: 3,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%91%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/%D0%91%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
                {
                    name: 'Сгибание голени',
                    id: 4,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A1%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B3%D0%BE%D0%BB%D0%B5%D0%BD%D0%B8/%D0%A1%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B3%D0%BE%D0%BB%D0%B5%D0%BD%D0%B8.mp4',
                    weeks: ['3*8', '2*8', '3*12', '3*8', '3*8', '2*8', '3*15', '3*8',],
                },
                {
                    name: 'Тяга блока к поясу',
                    id: 5,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0/%D0%A2%D1%8F%D0%B3%D0%B0%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0.mp4',
                    weeks: ['3*8', '2*8', '3*8', '3*15', '3*8', '2*12', '3*8', '3*12',],
                },
                {
                    name: 'Гиперэкстензия',
                    id: 6,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%8D%D0%BA%D1%81%D1%82%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
            ]
        },
        {
            day: 'friday',
            exercises: [
                {
                    name: 'Выпады 1 ногой',
                    id: 0,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B%201%20%D0%BD%D0%BE%D0%B3%D0%BE%D0%B9%20%D0%B2%20%D1%88%D0%B0%D0%B3%D0%B5/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B%201%20%D0%BD%D0%BE%D0%B3%D0%BE%D0%B9%20%D0%B2%20%D1%88%D0%B0%D0%B3%D0%B5.mp4',
                    weeks: ['3*6', '2*8', '3*8', '3*6', '3*12', '2*8', '3*6', '3*12',],
                },
                {
                    name: 'Махи на плечи',
                    id: 1,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%B0%D1%85%D0%B8%20%D0%B2%20%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B%20%D0%B8%D0%BB%D0%B8%20%D0%9C%D0%B0%D1%85%D0%B8%20%D1%81%D1%82%D0%BE%D1%8F',
                    weeks: ['3*8', '2*8', '3*12', '3*12', '3*12', '2*8', '3*8', '3*12',],
                },
                {
                    name: 'Болгарский сплит прис',
                    id: 2,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A1%D0%BF%D0%BB%D0%B8%D1%82%20%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%A1%D0%BF%D0%BB%D0%B8%D1%82%20%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4.mp4',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
                {
                    name: 'Боковые отведения',
                    id: 3,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%91%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/%D0%91%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.mp4',
                    weeks: ['3*12', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*12',],
                },
                {
                    name: 'Махи на ягодицы',
                    id: 4,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9C%D0%B0%D1%85%D0%B8%20%D0%BD%D0%B0%20%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B/%D0%9C%D0%B0%D1%85%D0%B8%20%D0%BD%D0%B0%20%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B.mp4',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
                {
                    name: 'Отведения в бок в наклон',
                    id: 5,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%9E%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B1%D0%BE%D0%BA%20%D0%B2%20%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%B5%20%D0%B8%D0%BB%D0%B8%20%D0%9C%D0%B0%D1%85%D0%B8%20%D0%B2%20%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83%20%D0%BF%D0%BE%D0%B4%20%D1%83%D0%B3%D0%BE%D0%BB%D0%BE%D0%BC/%D0%9E%D1%82%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B1%D0%BE%D0%BA%20%D0%B2%20%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%B5%20%D0%B8%D0%BB%D0%B8%20%D0%9C%D0%B0%D1%85%D0%B8%20%D0%B2%20%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83%20%D0%BF%D0%BE%D0%B4%20%D1%83%D0%B3%D0%BE%D0%BB%D0%BE%D0%BC%20.mp4',
                    weeks: ['3*8', '2*8', '3*8', '3*12', '3*8', '2*8', '3*8', '3*8',],
                    descriptions: 'DROPP',
                },
                {
                    name: 'Фрогги',
                    id: 6,
                    link: 'https://disk.yandex.ru/d/FNbXDkVv2SA6zw/%D0%A4%D1%80%D0%BE%D0%B3%D0%B3%D0%B8/%D0%A4%D1%80%D0%BE%D0%B3%D0%B3%D0%B8.mp4',
                    weeks: ['3*20', '2*12', '3*15', '3*20', '3*15', '2*8', '3*20', '3*8',],
                },
            ],
        },
    ]
]