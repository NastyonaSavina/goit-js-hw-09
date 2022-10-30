import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');


let numberOfPosition=0;
let delayForNotify = 0;



const actPromise = event => {
  event.preventDefault();

  const { elements: { delay, step, amount },
  } = event.currentTarget;
 
 
  for (let i = 0; i < amount.value; i += 1) {
    numberOfPosition += 1;
    delayForNotify = delay.value + step.value *i;
    
  
    console.log(delayForNotify);

    

    function createPromise(numberOfPosition, delayForNotify) {
  
    const shouldResolve = Math.random() > 0.3;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
            resolve(`✅ Fulfilled promise ${numberOfPosition} in ${delayForNotify} ms`);
          } else {
            reject(`❌ Rejected promise ${numberOfPosition} in ${delayForNotify} ms`);
          }
        }, delayForNotify);
      });
    };

createPromise(numberOfPosition, delay)
  .then(result => Notify.success(result))
  .catch(result => Notify.failure(result));
    
  };


}
  

  
  
formRef.addEventListener('submit', actPromise);

