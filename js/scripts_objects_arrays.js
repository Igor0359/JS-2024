//const arr = [1, 2, 3];
const arr = ['a', 'b', 'c'];
arr[10] = '3456';
console.log(arr);



//const arrObj = {
//    0: 1,
 //   1: 2,
 //   2: 3
//}

//const arrObj = {
 //   a: 'a',
 //   '1': 'b',
 //   2: 'c'
 //   }

const arrObj = {
     a: 'a',
     '1': 'b',
     2: 'c',
     abc: { 
        df: [{}, {}],
        def: {
        }
    }
         };
const b = 'b';
arrObj[b] = '1234'
//arrObj[b] = {};
//arrObj.b = '1234';

//arrObj['b'] = '1234'
console.log(arrObj['b']);
console.log(arrObj.b)  
//console.log(arr[1]);
//console.log(arrObj.0);
//console.log(arrObj.a);
console.log(arrObj[1]);

//const obj = {a: 1, b: 2};
const obj = {
    Anna: 500, 
    'Alice': 800
};

['Anna', 500, 'Alice', 800];



let store = "name";
store = "Rozetka"
console.log(store)




let storeName;
storeName = "Rozetka"
console.log(storeName)



Задачи:

//Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.
//Создайте объект под названием storeDescription

// Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте

// Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор

// Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.

// Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым


const storeDescription = {
    budget: 10000,
    employees: ['Alex', 'Dan', 'Max'],
    products: {
        'TV': 1400,
        'Radio': 1100
    }, 
    open: true
}