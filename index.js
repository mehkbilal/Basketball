const basketball=document.querySelector("#basketball")
const text=document.querySelector("#text")


basketball.addEventListener('click', function(event){

  basketball.classList.toggle('spin')
  text.innerHTML=randomBallQuote()

  setTimeout(function(){
    basketball.classList.toggle('spin')
  },1000)
});


function randomBallQuote(){
  const Quotes=['Ball is life!', "Let's get some buckets",'Man on','Box out','Five out','REBOUNDDD!','DEFENSE!!!','Break them ankles...','Are you gonna shoot your shot or bench yourself','Coaches dont play','One team, one dream']
  return Quotes[getRandomInt(Quotes.length)]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function fakeEventListner(type, callback) {
//   // when some event that matches type happens
//   // callback runs
//   const event = 'hi '+type 
//   callback(event)
// };

// fakeEventListner('mehk', function(e) {
//   alert(e)
// })