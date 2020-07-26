const obj = {q1: 89, q2: 75, q3: 88};

const table = document.querySelector("#sampleTbl");
Object.keys(obj).map((key) => {
  const rowElement = document.createElement("tr");
  const column1 = document.createElement("td");
  const column2 = document.createElement("td");
  column1.innerText = key;
  column2.innerText = obj[key];
  rowElement.appendChild(column1);
  rowElement.appendChild(column2);
  table.appendChild(rowElement);
});


const feedbackElement = document.querySelector("#feedback");

feedbackElement.addEventListener('click', 
(event) => {
   if(feedbackElement.style.backgroundColor === 'lightblue') {
     feedbackElement.style.backgroundColor = 'yellow';
   } else {
     feedbackElement.style.backgroundColor = 'lightblue';
   }
});