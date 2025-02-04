const subject1 = document.querySelector(".subject1");
const subject2 = document.querySelector(".subject2");
const subject3 = document.querySelector(".subject3");

subject1.addEventListener("click", () => {
  const profileForm = document.querySelector(".profile_form_container");
  profileForm.classList.add("hidden");
  document.querySelector(".middle_section").classList.remove("hidden");
  document.querySelector(".middle_section2").classList.add("hidden");
});
subject2.addEventListener("click", () => {
  const profileForm = document.querySelector(".profile_form_container");
  profileForm.classList.add("hidden");
  document.querySelector(".middle_section2").classList.remove("hidden");
  document.querySelector(".middle_section").classList.add("hidden");
});

const students = document.querySelector(".students");
const tests = document.querySelector(".tests");
const teachers = document.querySelector(".teachers");
const testsSection = document.querySelector(".tests_section");
const studentsSection = document.querySelector(".students_section");
const teachersSection = document.querySelector(".teachers_section");

const remove = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  }
};

students.addEventListener("click", () => {
  remove(tests);
  remove(teachers);
  testsSection.classList.add("hidden");
  studentsSection.classList.remove("hidden");
  students.classList.add("active");
  teachersSection.classList.add("hidden");
});

tests.addEventListener("click", () => {
  studentsSection.classList.add("hidden");
  testsSection.classList.remove("hidden");
  tests.classList.add("active");
  teachersSection.classList.add("hidden");
  remove(students);
  remove(teachers);
});

teachers.addEventListener("click", () => {
  remove(tests);
  remove(students);
  studentsSection.classList.add("hidden");
  testsSection.classList.add("hidden");
  teachersSection.classList.remove("hidden");
  teachers.classList.add("active");
});

function checkRepeat() {
  if (
    document.getElementById("profile_password_input").value !==
    document.getElementById("repeat_password_input").value
  ) {
    document.querySelector(".warning_password").innerHTML =
      "პაროლები არ ემთხვევა!";
    document.querySelector(".reset_btn").disabled = true;
  } else {
    document.querySelector(".warning_password").innerHTML = null;
    document.querySelector(".reset_btn").disabled = false;
  }
}

// RESET VALIDATION
const resetForm = document.querySelector(".profile_section_form");
resetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const warnName = document.querySelector(".profile_name");
  const warnLastName = document.querySelector(".profile_lastName");
  const name = document.querySelector(".profile_firstname_input");
  const LastName = document.querySelector(".profile_lastname_input");
  const passwordInput = document.querySelector("#profile_password_input").value;
  const ResPasswordInput = document.querySelector(
    "#repeat_password_input"
  ).value;
  if (!passwordInput || !ResPasswordInput) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
  } else {
    document.querySelector(".warning_password").innerHTML = null;
  }
  if (name.value.length === 0) {
    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  }
  if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === false) {
    warnName.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === true) {
    warnName.innerHTML = "";
  }
  if (LastName.value.length === 0) {
    warnLastName.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  }
  if (
    LastName.value.length > 0 &&
    /\p{Letter}/u.test(LastName.value) === false
  ) {
    warnLastName.innerHTML = "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    LastName.value.length > 0 &&
    /\p{Letter}/u.test(LastName.value) === true
  ) {
    warnLastName.innerHTML = "";
  }
});

// toggle add students form
const titl2 = document.querySelector(".title2");
const titl1 = document.querySelector(".title1");
const titl3 = document.querySelector(".title3");
const form = document.querySelector(".students__form");
const class1 = document.querySelector(".class1");
const class2 = document.querySelector(".class2");
const class3 = document.querySelector(".class3");

titl2.addEventListener("click", () => {
  const class2form = document.querySelector(".class2__form");
  class1.classList.remove("active_class");
  class2.classList.add("active_class");

  class2form.appendChild(form);
});
titl1.addEventListener("click", () => {
  const class1form = document.querySelector(".class1_form");
  class2.classList.remove("active_class");
  class1.classList.add("active_class");
  class1form.appendChild(form);
});
titl3.addEventListener("click", () => {
  const class3form = document.querySelector(".class3_form");
  class3.classList.add("active_class");
  class2.classList.remove("active_class");
  class1.classList.remove("active_class");
  class3form.appendChild(form);
});

// ADD STUDENTS
const StudentName = document.querySelector(".students_name_input");
const StudentLastName = document.querySelector(".students_lastname_input");
const NameError = document.querySelector(".name_error");
const LastNameError = document.querySelector(".lastName_error");

const AddStudentBtn = document.querySelector(".add_student");
AddStudentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let validateName = false;
  let validateLastName = false;

  if (StudentName.value.length === 0) {
    NameError.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  } else if (
    StudentName.value.length > 0 &&
    /\p{Letter}/u.test(StudentName.value) === false
  ) {
    NameError.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    StudentName.value.length > 0 &&
    /\p{Letter}/u.test(StudentName.value) === true
  ) {
    NameError.innerHTML = "";
    validateName = true;
  }

  if (StudentLastName.value.length === 0) {
    LastNameError.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  } else if (
    StudentLastName.value.length > 0 &&
    /\p{Letter}/u.test(StudentLastName.value) === false
  ) {
    LastNameError.innerHTML = "გვარი არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    StudentLastName.value.length > 0 &&
    /\p{Letter}/u.test(LastNameError.value) === true
  ) {
    LastNameError.innerHTML = "";
    validateLastName = true;
  }
  if (validateLastName && validateName) {
    const activeClass = document.querySelector(".active_class");
    const ActiveUl = activeClass.querySelector(".students_ul");
    const li = document.createElement("li");

    li.appendChild(
      document.createTextNode(StudentName.value + " " + StudentLastName.value)
    );
    ActiveUl.appendChild(li);
    StudentName.value = "";
    StudentLastName.value = "";
  }
});

// add tests
const addTest = document.querySelector(".add_test");
const testUl = document.querySelector(".tests_ul");
const questionIput = document.querySelector(".tests_question_input");
const answerIput = document.querySelector(".tests_answer_input");

addTest.addEventListener("click", (e) => {
  e.preventDefault();
  const answerText = answerIput.value;
  const questionText = questionIput.value;
  if (answerText.trim().length === 0) {
    document.querySelector(".answer_error ").innerHTML =
      "გთხოვთ შეიყვანოთ პასუხი";
  } else {
    document.querySelector(".answer_error ").innerHTML = "";
  }
  if (questionText.trim().length === 0) {
    document.querySelector(".question_error ").innerHTML =
      "გთხოვთ შეიყვანოთ კითხვა";
  } else {
    document.querySelector(".question_error ").innerHTML = "";
  }
  if (questionText.trim().length && answerText.trim().length) {
    const li = document.createElement("li");
    li.classList.add("tests_li");
    const title = document.createElement("h4");
    title.classList.add("test_title");
    const question = document.createElement("p");
    question.classList.add("question");
    const answer = document.createElement("p");
    answer.classList.add("answer");
    const testLi = document.querySelectorAll(".tests_li");
    const titleText = document.createTextNode(`ტესტი ${testLi.length + 1}`);

    li.appendChild(title);

    const answerNode = document.createTextNode(answerText);
    const questionNode = document.createTextNode(questionText);

    question.appendChild(questionNode);
    answer.appendChild(answerNode);

    li.appendChild(question);
    li.appendChild(answer);

    title.appendChild(titleText);
    testUl.appendChild(li);
    answerIput.value = "";
    questionIput.value = "";
    document.querySelector(".question_error ").innerHTML = "";
    document.querySelector(".answer_error ").innerHTML = "";
  }
});

console.log(sessionStorage);

let profileName = sessionStorage.getItem("name");
let profileSurname = sessionStorage.getItem("surname");
let profileEmail = sessionStorage.getItem("email");

document.getElementById("profileName").innerHTML =
  profileName + " " + profileSurname;
document.getElementById("profileEmail").value = profileEmail;

// add teachers

const addTeacher = document.querySelector(".add_teacher");
const teacherName = document.querySelector(".teachers_name_input");
const teacherLastame = document.querySelector(".teachers_lastname_input");
const teacherNameError = document.querySelector(".teacher_name_error");
const teacherLastameError = document.querySelector(".teacher_lastname_error");

addTeacher.addEventListener("click", (e) => {
  e.preventDefault();
  let validateName = false;
  let validateLastName = false;
  if (teacherName.value.trim().length == 0) {
    console.log("test");
    teacherNameError.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  } else if (
    teacherName.value.trim().length !== 0 &&
    (!/\p{L}/u.test(teacherName.value) || /\d/.test(teacherName.value))
  ) {
    teacherNameError.innerHTML =
      "სახელი არ უნდა შეიცავდეს რიცხვებს და სიმბოლოებს";
  } else {
    teacherNameError.innerHTML = "";
    validateName = true;
  }

  if (teacherLastame.value.trim().length == 0) {
    console.log("gvaeri arali");
    teacherLastameError.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  } else if (
    teacherLastame.value.trim().length !== 0 &&
    (!/\p{L}/u.test(teacherLastame.value) || /\d/.test(teacherLastame.value))
  ) {
    teacherLastameError.innerHTML =
      "გვარი არ უნდა შეიცავდეს რიცხვებს და სიმბოლოებს";
  } else {
    teacherLastameError.innerHTML = "";
    validateLastName = true;
  }
  if (validateLastName && validateName) {
    const li = document.createElement("li");
    const teachersUl = document.querySelector(".teachers_ul");

    li.appendChild(
      document.createTextNode(`${teacherName.value} ${teacherLastame.value}`)
    );
    console.log(li);
    teachersUl.appendChild(li);
    teacherName.value = "";
    teacherLastame.value = "";
  }
});
