/* 문제 07. [종합] 할 일 목록 상태 다루기
   유형 : 코드 작성 | 난이도 : ★★★

   React 의 할 일 목록 상태를 다루는 순수 함수들을 완성한다.
   모두 원본 배열과 원본 객체를 바꾸지 않고 새 배열을 반환한다.

     addTodo(todos, text)      : { id, text, done: false } 를 끝에 추가한다.
                                 id 는 마지막 항목의 id + 1 (목록이 비어 있으면 1)
     toggleTodo(todos, id)     : 해당 id 의 done 을 반대로 바꾼다.
                                 바뀌지 않은 항목은 원래 객체를 그대로 쓴다.
     editTodo(todos, id, text) : 해당 id 의 text 를 바꾼다.
     removeTodo(todos, id)     : 해당 id 를 뺀다.
     clearDone(todos)          : 완료된(done 이 true) 항목을 모두 뺀다.
*/

function addTodo(todos, text) {
    // TODO
}
function toggleTodo(todos, id) {
    // TODO
}
function editTodo(todos, id, text) {
    // TODO
}
function removeTodo(todos, id) {
    // TODO
}
function clearDone(todos) {
    // TODO
}

const todos = [
    { id: 1, text: '장보기', done: false },
    { id: 2, text: '운동하기', done: true }
];

console.log(addTodo(todos, '책 읽기'));
// 기대 : 세 번째 항목 { id: 3, text: '책 읽기', done: false } 가 추가된 배열
console.log(addTodo([], '첫 할 일'));
// 기대 : [ { id: 1, text: '첫 할 일', done: false } ]

const toggled = toggleTodo(todos, 1);
console.log(toggled?.[0]);                   // 기대 : { id: 1, text: '장보기', done: true }
console.log(toggled?.[1] === todos[1]);      // 기대 : true   (바뀌지 않은 항목은 같은 객체)

console.log(editTodo(todos, 2, '산책하기')?.[1]);   // 기대 : { id: 2, text: '산책하기', done: true }
console.log(removeTodo(todos, 1));                 // 기대 : [ { id: 2, text: '운동하기', done: true } ]
console.log(clearDone(todos));                     // 기대 : [ { id: 1, text: '장보기', done: false } ]

console.log(todos);
// 기대 : 원본 그대로 [ { id: 1, text: '장보기', done: false }, { id: 2, text: '운동하기', done: true } ]
