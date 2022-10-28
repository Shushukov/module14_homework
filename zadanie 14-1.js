//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
const parser = new DOMParser();
const xmlEntity = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlEntity, "text/xml");
const studentsNodes = xmlDOM.querySelectorAll("student");
const result = {
  list: [],
};

studentsNodes.forEach((element) => {
  const student = new Object();
  const studentFirstName = element.querySelector("first");
  const studentSecondName = element.querySelector("second");
  const studentAge = element.querySelector("age");
  const studentProf = element.querySelector("prof");
  const nameNode = element.querySelector("name");
  const nameLang = nameNode.getAttribute("lang");
  student.name =
    studentFirstName.textContent + " " + studentSecondName.textContent;
  student.age = studentAge.textContent;
  student.prof = studentProf.textContent;
  student.lang = nameLang;
  result.list.push(student);
});

console.log(result);
