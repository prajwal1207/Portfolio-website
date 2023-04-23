"use strict"

let moreBtn = document.querySelector(".btn")
let redBtn = document.querySelector(".red")
let blueBtn = document.querySelector(".blue")
let greenBtn = document.querySelector(".green")
let purpleBtn = document.querySelector(".purple")
let orangeBtn = document.querySelector(".orange")

const btnMoreAboutMe = document.querySelector(".btn")
console.log(btnMoreAboutMe)

greenBtn.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(".link").href ="style--1.css" ;
})

orangeBtn.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(".link").href ="style--0.css" ;
})

blueBtn.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(".link").href ="style--3.css" ;
})

btnMoreAboutMe.addEventListener('click',function(e){
    // console.log("here")
    // const s1coords = document.getElementById('2').getBoundingClientRect()
     // windows scrolling 
     document.getElementById('section--2').scrollIntoView({behavior:"smooth"})
})

document.querySelectorAll('.nav__link').forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault()
        const id = this.getAttribute('href')
        console.log(id)
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
       
    })
})


