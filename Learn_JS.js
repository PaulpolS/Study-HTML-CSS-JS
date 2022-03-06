
// เป็นคำสั่งเมื่อคลิกปุ่ม แล้วข้อความบนปุ่มจะเปลี่ยน
document.getElementById("click1").onclick = function() {click1()};

function click1() {
  document.getElementById("click1").innerHTML = "คลิกแล้วนะ";
}

// เป็นคำสั่งเมื่อคลิกปุ่ม แล้วจะมีข้อความเด้งเตือนขึ้นมา
document.getElementById("click2").onclick = function() {click2()};

function click2() {
  alert("คลิกปุ่มแล้ว")
}

//คำสั่ง TypeOf เพื่อดูค่าต่างๆที่เก็บไว้ว่าเป็นตัวแปรแบบไหน
let a = 1
let b = 0.01
let c = 'TON'
let d = true
// สร้างfunctionนี้มาเพื่อให้กดปุ่มแล้วแสดงคำตอบ
function replaceText(id,data){
    document.getElementById(id).innerHTML = typeof(data);
}
//เรียนใช้Function
document.getElementById("type1").onclick = function() {replaceText("ansType1",a)};
document.getElementById("type2").onclick = function() {replaceText("ansType2",b)};
document.getElementById("type3").onclick = function() {replaceText("ansType3",c)};
document.getElementById("type4").onclick = function() {replaceText("ansType4",d)};

//ใช้คำสั่ง if else

function CheckNumberClick(){
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    if (number1>number2){
        alert("x > y")
    }
    else if (number1 < number2){
        alert("x < y")
    }
    else{
        alert("x = y")
    }
}

document.getElementById("CheckNumber").onclick = function() {CheckNumberClick()};

//ใช้คำสั่ง Switch-Case
function CheckMonthClick(){
    monthNumber = document.getElementById("monthNumber").value
    switch(monthNumber){
        case "1": alert("มกราคม");
        break;
        case "2": alert("กุมภาพันธ์")
        break;
        case "3": alert("มีนาคม");
        break;
        case "4": alert("เมษายน");
        break;
        case "5": alert("พฤษภาคม");
        break;
        case "6": alert("มิถุนายน");
        break;
        case "7": alert("กรกฎาคม");
        break;
        case "8": alert("สิงหาคม");
        break;
        case "9": alert("กันยายน");
        break;
        case "10": alert("ตุลาคม");
        break;
        case "11": alert("พฤศจิกายน");
        break;
        case "12": alert("ธันวาคม");
        break;
        default : alert("ใส่เลข 1 - 12 ครับ");
        break;
}}

document.getElementById("CheckMonth").onclick = function() {CheckMonthClick()};

// การใช้ Loop for ต่างๆ
function countNumber(){
    startNumber = document.getElementById("startNumber").value
    endNumber = document.getElementById("endNumber").value
    let result = []
    for(i = startNumber;i<=endNumber;i++){
        result.push(i)
    }
    console.log(result)
    document.getElementById("countAns").innerHTML= result
}
document.getElementById("countNumber").onclick = function() {countNumber()};

// ทำงานเกี่ยวกับ array

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}
let arr = []

function show(){
    max = parseInt(document.getElementById("randomValueMax").value)
    length = parseInt(document.getElementById("randomRangeMax").value)
    arr = randomArray(length,max)
    document.getElementById("randomResult").innerHTML = arr;
    //เรียกใช้ sort เรียงจากน้อยไปมาก
    arr.sort(function(a,b){
        return a - b
    })
    document.getElementById("minToMax").innerHTML = arr;
    //เรียกใช้ sort เรียงจากมากไปน้อย
    arr.sort(function(a,b){
        return b - a
    })
    document.getElementById("maxToMin").innerHTML = arr;
}

document.getElementById("startRandom").onclick = function() {show()};


