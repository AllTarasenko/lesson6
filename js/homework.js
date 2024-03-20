/*ДЗ1 Тусувати масив
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!
Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив.
Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.

Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:
Створіть гілку js_homework6.
Додати туди ваше домашне завдання
Вислати вашу гілку*/

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr)
function myBlend(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}

console.log("Original array:", arr);

myBlend(arr);
console.log("Blend array:", arr);*/

/* ДЗ2 BigBoss
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків.
Окрім того, наша компанія продає рішення для організації продажу цих квитків.
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО).
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків.
Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення,
і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі
Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим.

Вам необхідно написати функцію findValueByKey(companyName),
яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:
Створіть гілку js_homework6.
Додати туди ваше домашне завдання
Вислати вашу гілку
 */

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(companyName) {
    function findCompany(company, name) {
        if (company.name === name) {
            return company;
        }
        if (company.clients) {
            for (let client of company.clients) {
                const result = findCompany(client, name);
                if (result) {
                    return result;
                }
            }
        }
        if (company.partners) {
            for (let partners of company.partners) {
                const result = findCompany(partners, name);
                if (result) {
                    return result;
                }
            }
        }
    }

    return findCompany(company, companyName);
}
const companyName = 'Клієнт 1.2.3';
const foundCompany = findValueByKey(companyName);
console.log(foundCompany);