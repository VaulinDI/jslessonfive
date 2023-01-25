/* Задача 1. Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}*/

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
}
const arr = Object.values(numbers);
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 3) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

/* Задача 2. Необходимо из объекта, который лежит в константе post вывести значения, к
которым приписан комментарий, в консоль.

  const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

const postArray = Object.values(post);
const commentsArray1 = Object.values(post.comments[0]);
const commentsArray2 = Object.values(post.comments[1]);
const ratingArray1 = Object.values(commentsArray1[3]);
const endArray = [postArray[0], ratingArray1[1], commentsArray2[0], commentsArray2[2]];
console.log(endArray);

/* Задача 3. Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.

  const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];*/

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach(element => console.log(element.price * 0.85));

/* Задача 4. 
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];*/

const products1 = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg",
    ],
  },
  {
    id: 8,
    price: 78,
  },
];

const keyPhotos = 'photos';
const hasKey = [];
for (let i = 0; i < products1.length; i++) {
  if (keyPhotos in products1[i]) {
    hasKey[i] = products1[i];
  } else {
    continue;
  }
}
console.log(hasKey);

const filterArray = hasKey.filter(element1 => element1.photos.length > 0);
console.log(filterArray);

const sortArray = products1.sort((a, b) => a.price - b.price);
console.log(sortArray);

/* Задача 5.

Дано 2 массива

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const weekObject = {};
for (let i = 0; i < en.length; i++) {
  let keyWeek = en[i];
  let valueWeek = ru[i];
  weekObject[keyWeek] = valueWeek;
}
console.log(weekObject);