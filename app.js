let questions=[]
let index=0
let score=0
let current

function shuffle(arr){
for(let i=arr.length-1;i>0;i--){
let j=Math.floor(Math.random()*(i+1))
[arr[i],arr[j]]=[arr[j],arr[i]]
}
return arr
}

function start(){

questions=shuffle([...words]).slice(0,100)

nextQuestion()

}

function nextQuestion(){

if(index>=questions.length){

document.getElementById("word").innerHTML="测试结束"
document.getElementById("options").innerHTML=""
document.getElementById("score").innerHTML="得分："+score+" / "+questions.length
return

}

current=questions[index]

document.getElementById("progress").innerHTML=
"第 "+(index+1)+" / "+questions.length+" 题"

document.getElementById("word").innerHTML=current.zm

let options=[current.cn]

while(options.length<4){

let r=words[Math.floor(Math.random()*words.length)].cn

if(!options.includes(r)){
options.push(r)
}

}

options=shuffle(options)

let html=""

options.forEach(o=>{
html+=`<button onclick="check('${o}')">${o}</button>`
})

document.getElementById("options").innerHTML=html

index++

}

function check(a){

if(a===current.cn){
score++
}

}

start()