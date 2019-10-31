var duration = 50
var id 
var n = 0
  $('.button-wrapper').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 5
        break
      case 'stop':
        n=css.length
        break
    }
  })
  
  function xx( code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    
   
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = Prism.highlight(code.substring(0,n), Prism.languages.css, 'css')
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }

var css = `/*今天给大家画一个多啦A梦
            *先画出头的大概形状
            *顺便给代码来点高亮
            */
            .head {
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background: #3c9dca;
                border: black solid 5px;
                position: relative;
            }
            /*
            *
            *画出哆啦A梦的大脸~~
            */
            .white {
                width: 262px;
                height: 231px;
                border-radius: 100%;
                position: absolute;
                top: 65px;
                left: 50%;
                transform: translateX(-50%);
                background: #FFF;
                border: black solid 2px;
                z-index: 0;
            }
            /*
            *画一双眼睛~~
            */
            .eye {
                position: absolute;
                z-index: 1;
                width: 63px;
                height: 76px;
                border-radius: 100%;
                background: white;
                border: black solid 1px;
                top: 30px;
            }

            .eye-left {
                left: 50%;
                transform: translateX(-100%);
            }

            .eye-right {
                right: 50%;
                transform: translateX(100%);
            }
            /*
            *画小小眼珠~~
            */
            .eye-inner {
                width: 13px;
                height: 23px;
                border-radius: 100%;
                background: #000;
                list-style: none;
                position: absolute;
                right: 10px;
                top: 50%;
            }

            .inner-right {
                left: 10px;
            }

            .eye-inner::before {
                content: '';
                display: block;
                width: 5px;
                height: 8px;
                border-radius: 100%;
                background: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            /*
            *画出有趣的胡须~~
            */
            .beard {
                width: 75px;
                height: 1px;
                position: absolute;
                border-radius: 10%;
                background: #000;
            }
            .beard-left {
                transform: rotate(20deg);
                top: 100px;
                left: 30px;
            }

            .beard-left::before {
                content: '';
                display: block;
                width: 75px;
                height: 1px;
                position: absolute;
                border-radius: 10%;
                background: #000;
                transform: rotate(-20deg);
                top: 21px;
                left: 6px;
            }

            .beard-left::after {
                content: '';
                display: block;
                width: 75px;
                height: 1px;
                position: absolute;
                border-radius: 10%;
                background: #000;
                transform: rotate(-40deg);
                top: 42px;
                left: 20px;
            }

            .beard-right {
                transform: rotate(-20deg);
                top: 100px;
                right: 30px;
            }

            .beard-right::before {
                content: '';
                display: block;
                width: 75px;
                height: 1px;
                position: absolute;
                border-radius: 10%;
                background: #000;
                transform: rotate(20deg);
                top: 21px;
                right: 6px;
            }

            .beard-right::after {
                content: '';
                display: block;
                width: 75px;
                height: 1px;
                position: absolute;
                border-radius: 10%;
                background: #000;
                transform: rotate(40deg);
                top: 42px;
                right: 20px;
            }
            /*
            *画可爱的小鼻子
            */
            .nose {
                width: 27px;
                height: 27px;
                border-radius: 100%;
                background: #b90319;
                position: absolute;
                border: black solid 2px;
                left: 50%;
                transform: translateX(-50%);
                top: 88px;
                z-index: 2;
            }

            .nose::after {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 100%;
                background: #FFF;
                position: absolute;
                left: 7px;
                top: 5px;
            }
            .line-mid {
                width: 1px;
                height: 50px;
                position: absolute;
                border-radius: 10%;
                background: #000;
                z-index: 1;
                left: 50%;
                top: 116px;
            }
            .lip-left {
                height: 40px;
                width: 144px;
                border: 1px solid black;
                position: absolute;
                left: 50%;
                top: 131px;
                border-bottom-left-radius: 40px 45px;
                border-top: none;
                border-right: none;
                transform: translateX(-100%) rotate(-4deg);
                z-index: 1;
            }
            .lip-right {
                height: 40px;
                width: 144px;
                border: 1px solid black;
                position: absolute;
                right: 50%;
                margin-right: -144px;
                top: 131px;
                border-bottom-right-radius: 40px 45px;
                border-top: none;
                border-left: none;
                transform: rotate(4deg);
                z-index: 1;
            }
            /*
            *画出爱吃铜锣烧的大嘴~~
            */
            .mouse-wrapper {
                width: 226px;
                height: 225px;
                position: absolute;
                left: 50%;
                margin-left: -113px;
                top: 166px;
                overflow: hidden;

            }

            .mouse {
                width: 225px;
                height: 225px;
                border: 1px solid black;
                position: absolute;
                border-radius: 50%;
                top: -112px;
                background: red;
                z-index: 0;
                overflow: hidden;
            }
            /*
            *再来一只小舌头~~
            */
            .mouse-inner {
                width: 80px;
                height: 80px;
                background: orange;
                position: absolute;
                top: 174px;
                left: 49%;
                transform: translateX(-50%);
            }
            .mouse-inner::before {
                content: '';
                display: block;
                width: 80px;
                height: 80px;
                border: 1px solid orange;
                background-color: orange;
                border-radius: 100%;
                position: absolute;
                z-index: 5;
                top: -30%;
                left: -49%;
            }
            .mouse-inner::after {
                content: '';
                display: block;
                width: 80px;
                height: 80px;
                border: 1px solid orange;
                background-color: orange;
                border-radius: 100%;
                position: absolute;
                z-index: 5;
                top: -30%;
                left: 50%;
            }
            /*
            *ok，哆啦A梦成型啦~~
            */`
xx(css)

