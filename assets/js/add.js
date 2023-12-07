   
   let roundsLeft = 10;
   let secretNumber = gen();
   
   
   function gen() {
       let n = Math.random();
       n = Math.floor(n * 100) + 1;
       return n;
   }
   
   function game() {
       let unknownNumber = +document.querySelector("#unknowNumber").value;
       let result = document.querySelector("#result");
       let roundsElement = document.querySelector("#rouds");
   
       if (roundsLeft > 0) {
           if (unknownNumber >= 1 && unknownNumber <= 100) {
               if (unknownNumber === secretNumber) {
                   result.innerHTML = `Вы выиграли, это действительно число ${secretNumber}`;
                   roundsLeft = 0;
                   oneImage.classList.add("hidden");
                   twoImage.classList.remove("hidden");
               } else {
                   roundsLeft--;
                   if (roundsLeft === 0) {
                       result.innerHTML = `Вы проиграли, это было число ${secretNumber}`;
                       roundsElement.innerText = `Осталось попыток: 0`;
                       oneImage.classList.add("hidden");
                       threeImage.classList.remove("hidden");
                   } else {
                       if (unknownNumber < secretNumber) {
                           result.innerHTML = `Число ${unknownNumber} меньше моего`;
                       } else {
                           result.innerHTML = `Число ${unknownNumber} больше моего`;
                       }
                       roundsElement.innerText = `Осталось попыток: ${roundsLeft}`;
                   }
               }
           } else {
               result.innerHTML = 'Введите корректные данные (число от 1 до 100)';
           }
       }
   }
