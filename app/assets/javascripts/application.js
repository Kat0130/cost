// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery 
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var total = 0;
    input1 = document.getElementById('input1');
    input2 = document.getElementById('input2');
    input3 = document.getElementById('input3');
    input4 = document.getElementById('input4');
    btn1 = document.getElementById('option1');
    btn2 = document.getElementById('option2');
    btn3 = document.getElementById('option3');
    btn4 = document.getElementById('option4');
    step1 = document.getElementById('step1');
    step2 = document.getElementById('number_of_stages');
    step3 = document.getElementById('serveice_period');
    step4 = document.getElementById('options');
    button1 = document.getElementById('button1');
    button2 = document.getElementById('button2');
    button3 = document.getElementById('button3');
    arr = [ ]

    input2.disabled = true;
    input3.disabled = true;
    input4.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;

    function guid_line(input){
      if (input.disabled = true){
          input.style.backgroundColor = "#e8e8e8"
      }
  }
  guid_line(input2);
  guid_line(input3);
  guid_line(input4);
/////////選考ステージ
var stage = {
  total: 0,
  structure: function(){
    var candidates_n = parseInt(input1.value);
        stage_n = parseInt(input2.value);
        f_stage = (candidates_n*500);
        stage_p = 0;
    if(input2.value.length === 0){
      step2.style.backgroundColor = "#F6E3E2"
      alert("選考ステージ数を選択して下さい！")
    }else{
    for(var i = 0; i < stage_n; i++){
        var num = (candidates_n *= 0.7);
        stage_p += (num*1000);
    }
    stage.total = (stage_p + f_stage);
    step2.style.backgroundColor = "#F8FBFF"
    input3.disabled = false;
    button3.disabled = false;
    input3.style.backgroundColor = "#fff";
    }
 }
}
//////////////サービス期間
var serveice_period = {
  price: 50000,
  total: 0,
  show: function(){
  var period = parseInt(input3.value);
  if (input3.value.length === 0){
    step3.style.backgroundColor = "#F6E3E2"
    alert("適切なサービス期間を入力して下さい！")
  }else{
  this.total = (period * this.price);
  step3.style.backgroundColor = "#F8FBFF"
  input4.style.backgroundColor = "#fff"
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  input4.disabled = false;
}
}
}
/////////////オプション
function Option(state,option,price){
  this.state = state,
  this.option = option,
  this.price = price
}
Option.prototype.change = function(){
    this.state = !this.state;
    if (this.state === false){
        this.option.style.backgroundColor = "#fff";
        this.option.innerHTML = "追加する";
        this.option.style.color = "black";
    }else if(this.state === true){
        this.option.style.backgroundColor = "#3E97D3";
        this.option.innerHTML = "追加解除";
        this.option.style.color = "white";
    }
}
option1 = new Option(false,btn1,25000)
option2 = new Option(false,btn2,25000)

var handlers = {
  change:function(arg){
    arg.change();
  }
}
////////////////////面接代行
var interview = {
  total: 0,
  state: false,
  option: document.getElementById('option3'),
  input: document.getElementById('input4'),
  price:300000,
  display: function(){
    this.state = !this.state
    if(this.state === false){
      this.option.style.backgroundColor = '#fff';
      this.option.innerHTML = "追加する";
      this.option.style.color = "black";
    }else if(this.state === true){
      this.option.style.backgroundColor = '#3E97D3';
      this.option.innerHTML = "追加解除";
      this.option.style.color = "white";
      this.check();
    }
  },
  cal:function(){
    this.total = this.price + (parseInt(this.input.value)*10350);
  },
  check:function(){
    if(input4.value.length === 0){
     alert("面接代行件数に適切な値を入力して下さい！")
     this.state === false;
     this.option.style.backgroundColor = '#fff';
     this.option.innerHTML = "追加する";
     this.option.style.color = "black";
    }
  }
}
//////////////////////全体メソッド
function cal(){
  var period = parseInt(input3.value);
  var re = document.getElementById('cost_result');
  if (interview.state === true){
    interview.cal();
  }
  if (option1.state === true){
    total += option1.price
  }
  if (option2.state === true){
    total += option2.price
  }
  for(var i = 0; i < arr.length; i++){
  total += parseInt(arr[i]);
  }
  re.innerHTML = changeYen(Math.round((total*period)+(serveice_period.total + stage.total + interview.total)));
  input1.disabled = true;
  input2.disabled = true;
  input3.disabled = true;
  input4.disabled = true;
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  guid_line(input1);
  guid_line(input2);
  guid_line(input3);
  guid_line(input4);
}

function initial_state(){
  var re = document.getElementById('cost_result');
  total = 0;
  serveice_period.total = 0;
  stage.total = 0;
  interview.total = 0;
  re.innerHTML = " ";
  input1.value = " ";
  input2.value = " ";
  input3.value = " ";
  interview.input.value = " ";
  input1.style.backgroundColor = '#fff'
  step1.style.backgroundColor = "#fff"
  step2.style.backgroundColor = "#fff"
  step3.style.backgroundColor = "#fff"
  input1.disabled = false;
  input2.disabled = true;
  input3.disabled = true;
  button1.disabled = false;
  button2.disabled = true;
  button3.disabled = true;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  
  option1.option.style.backgroundColor = "#fff";
  option1.option.innerHTML = "追加する";
  option1.option.style.color = "black";
  option1.state = false;
  
  option2.option.style.backgroundColor = "#fff";
  option2.option.innerHTML = "追加する";
  option2.option.style.color = "black";
  option2.state = false;
  
  interview.option.style.backgroundColor = '#fff';
  interview.option.innerHTML = "追加する";
  interview.option.style.color = "black";
  interview.state = false;
  
  guid_line(input2);
  guid_line(input3);
}
function check(){
  if(input1.value.length === 0){
   step1.style.backgroundColor = "#F6E3E2"
   alert("適切な応募総数を入力して下さい")
  }else{
  step1.style.backgroundColor = "#F8FBFF"
  input2.disabled = false;
  button2.disabled = false;
  input2.style.backgroundColor = "#fff";
}
}

function changeYen(num){
    return Number(num).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
}


var smooth = $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });