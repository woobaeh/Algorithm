// 배열 생성

// 빈 Array
let arr1 = [];

// 미리 초기화된 Array
let arr2 = [1, 2, 3, 4, 5];

// 많은 값을 같은 값으로 초기화할 경우
let arr3 = Array(10).fill(0);
console.log(arr3);

// 특정 로직을 사용하여 초기화할 경우
let arr4 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr4);

// 배열 요소 추가, 삭제
const arr = [1, 2, 3];

arr.push(4); // O(1)

arr.push(5, 6); // O(1)
// 3번 인덱스에 156 추가
arr.splice(3, 0, 156); // O(n)
console.log(arr);
// 3번 인덱스 값 제거.
arr.splice(3, 1); // O(n)
console.log(arr);

// Point
// 자바스크립트 Array는 다른언어의 Array와 조금 다르다
// 자바스크립트의 Array는 동적이다.
// HashMap에 가깝다.
console.log(arr.length);
// index가 number가 아니어도 된다. 길이에 영향 X
arr['string'] = 10;
arr[true] = 0;

console.log(arr);
arr[4] = 10;
console.log(arr);
console.log(arr.length);
