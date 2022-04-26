$(document).ready(()=>{
    $('#popup_close').click(()=>{
        $('#popup').css({'display':'none'})
        
    })
    $('#slide_btn>ul>li').click(function(){
        $(this).css({'opacity':'1'}).children('img').attr({'src':'icons/imgRoll_indi_on.png'});
        $(this).siblings('li').css({'opacity':'0.3'}).children('img').attr({'src':'icons/imgRoll_indi.png'})
        $('#slide_imgbox').animate({'left':$(this).index()*-100+'%'})
    })
    let slide_pause_num = 0;
    $('#slide_pause').click(function(){
        
        if(slide_pause_num == 0){
            slide_pause_num = 1;
            $(this).children('img').attr({'src':'icons/play_bt_on.png'})
            speed = 0;
            }
        else if(slide_pause_num == 1){
            slide_pause_num = 0;
            $(this).children('img').attr({'src':'icons/play_bt.png'})
            speed = 100;
            }
        
    })
    let speed = 100;
  setInterval(function(){
        left100 = left100 - speed
        let slidenum = (-left100/100)+1
        if(slidenum<=1){slidenum=1}
        if(left100<-700){left100 = 0}
        $('#slide_imgbox').stop().animate({'left':left100 + '%'})
        $('#box-x2').html(left100)     
        $('#slide_btn>ul>li:nth-child('+slidenum+')').css({'opacity':'1'}).children('img').attr({'src':'icons/imgRoll_indi_on.png'});
        $('#slide_btn>ul>li:nth-child('+slidenum+')').siblings('li').css({'opacity':'0.3'}).children('img').attr({'src':'icons/imgRoll_indi.png'})
    },3000)
    $('#header2_menu>li').mouseenter(function(){
        $('#sub_bg').stop().slideDown()
    })
    $('#header2_menu>li:nth-child(1)').mouseenter(function(){
        $('.sub_box2>ul>li:nth-child(1)').html('어트랙션')
        $('.sub_box2>ul>li:nth-child(2)').html('페스티벌')
        $('.sub_box2>ul>li:nth-child(3)').html('공연').css({'border-bottom':'1px solid #ccc'})
        $('.sub_box2>ul>li:nth-child(4)').html('다이닝/쇼핑')
        $('.sub_box2>ul>li:nth-child(5)').html('다시만난월드/캐릭터전시회').css({'border-bottom':'1px solid #ccc'})
    })
    $('#header2_menu>li:nth-child(2)').mouseenter(function(){
        $('.sub_box2>ul>li:nth-child(1)').html('이용요금')
        $('.sub_box2>ul>li:nth-child(2)').html('이달의 혜택')
        $('.sub_box2>ul>li:nth-child(3)').html('연간이용').css({'border-bottom':'1px solid #ccc'})
        $('.sub_box2>ul>li:nth-child(4)').html('롯데월드카드')
        $('.sub_box2>ul>li:nth-child(5)').html('').css({'border-bottom':'none'}).siblings().css({'border-bottom':'1px solid #ccc'})
    })
    $('#header2_menu>li:nth-child(3)').mouseenter(function(){
        $('.sub_box2>ul>li:nth-child(1)').html('공연참여')
        $('.sub_box2>ul>li:nth-child(2)').html('가든스테이지 좌석예약')
        $('.sub_box2>ul>li:nth-child(3)').html('').css({'border-bottom':'none'})
        $('.sub_box2>ul>li:nth-child(4)').html('').css({'border-bottom':'none'})
        $('.sub_box2>ul>li:nth-child(5)').html('').css({'border-bottom':'none'})
    })
    $('#header2_menu>li:nth-child(4)').mouseenter(function(){
        $('.sub_box2>ul>li:nth-child(1)').html('운영/운휴')
        $('.sub_box2>ul>li:nth-child(2)').html('파크 이용안내')
        $('.sub_box2>ul>li:nth-child(3)').html('편의시설/제도').css({'border-bottom':'1px solid #ccc'})
        $('.sub_box2>ul>li:nth-child(4)').html('오시는 길').css({'border-bottom':'1px solid #ccc'})
        $('.sub_box2>ul>li:nth-child(5)').html('가이드맵').css({'border-bottom':'1px solid #ccc'})
    })
    $('#header2_menu>li:nth-child(5)').mouseenter(function(){
        $('.sub_box2>ul>li:nth-child(1)').html('공지사항')
        $('.sub_box2>ul>li:nth-child(2)').html('FAQ')
        $('.sub_box2>ul>li:nth-child(3)').html('고객소리함').css({'border-bottom':'1px solid #ccc'})
        $('.sub_box2>ul>li:nth-child(4)').html('').css({'border-bottom':'none'})
        $('.sub_box2>ul>li:nth-child(5)').html('').css({'border-bottom':'none'})
    })
    $('#header2_menu>li').mouseleave(function(){
        $('#sub_bg').stop().slideUp()
    })
    $('#attraction_bt1').click(function(){
        $(this).css({'color':'#550adf', 'border':'1px solid #550adf'}).siblings().css({'color':'#666', 'border':'1px solid #aaa'})
        $('#attraction_box1').show().siblings().hide()
    })
    $('#attraction_bt2').click(function(){
        $(this).css({'color':'#550adf', 'border':'1px solid #550adf'}).siblings().css({'color':'#666', 'border':'1px solid #aaa'})
        $('#attraction_box2').show().siblings().hide()
    })
    $('#attraction_bt3').click(function(){
        $(this).css({'color':'#550adf', 'border':'1px solid #550adf'}).siblings().css({'color':'#666', 'border':'1px solid #aaa'})
        $('#attraction_box3').show().siblings().hide()
    })
    $('#operating_time').animate({marginTop:0, opacity:1},600)
    $(window).scroll(function(){
       let sc = $(window).scrollTop();
       $('#sc').text(left100)
       if(sc>=200){$('header').css({'position':'fixed'});
                  $('#header1').hide();
                  $('#sub_bg').css({'top':'100px'})
                    }
       if(sc<200){$('header').css({'position':'absolute'}); $('#header1').show();
       $('#sub_bg').css({'top':'146px'})
       }
       if(sc>399 && sc<1399){
        $('#event_list').delay(400).animate({'marginTop':'50', 'opacity':'1'},500)
        $('#event_btn').delay(500).animate({'marginTop':'50', 'opacity':'1'},500)
        $('#event_box>h4').delay(300).animate({'marginTop':'20', 'opacity':'1'},800)
        $('#event_box>h2').delay(200).animate({'marginTop':'0', 'opacity':'1'},600)
        }
        if(sc>1400 && sc<2399){
            $('#information_box>h2').animate({'marginTop':'50','opacity':'1'},500)
            $('#information_box>h5').delay(100).animate({'marginTop':'30','opacity':'1'},500)
            $('#information_ul').delay(300).animate({'top':'0','opacity':'1'},500)
            $('#line_box').delay(400).animate({'marginTop':'500','opacity':'1'},500)
            $('#information_drag').delay(600).animate({'marginTop':'80','opacity':'1'})

        }
        if(sc>2400 && sc<3599){
            $('#fun_box>h2').animate({'marginTop':'0','opacity':'1'})
            $('#attraction_bt').delay(200).animate({'marginTop':'0','opacity':'1'})
            $('#attraction_box').delay(400).animate({'marginTop':'0','opacity':'1'})
            $('#fun_btn_box2').delay(600).animate({'marginTop':'0','opacity':'1'})
        }
        if(sc>3600){
            $('#special_box>h2').animate({'marginTop':'100','opacity':'1'})
            $('#special_box>h5').delay(200).animate({'marginTop':'20','opacity':'1'})
            $('#special_line').delay(400).animate({'marginTop':'40','opacity':'1'})
            $('#special_ul_box').delay(400).animate({'marginTop':'0','opacity':'1'})
            $('#special_news_box').delay(600).animate({'marginTop':'50','opacity':'1'})
        }
        if(sc<4219){ $('#top_btn').css({'position':'fixed'})}
        if(sc>4220){
            $('#top_btn').css({'position':'absolute'})
        }
    })
    $('#special_top_btn').click(function(){
        $('html,body').animate({'scrollTop':'0'},500)
    })
    $('#top_btn').mouseenter(function(){
        $(this).children('h2').animate({'left':'-200px'},200)
        $(this).children('h2').animate({'left':'200px'},0)
        $(this).children('h2').animate({'left':'0px'},200)
    })
    let left100 = 0;
    
    $('#slide_prebtn').click(function(){
        left100 = left100 + 100
        if(left100>0){left100 = -700}
        $('#slide_imgbox').animate({'left':left100 + '%'})
        $('#slide_btn>ul>li:nth-child('+((left100*-0.01)+1)+')').css({'opacity':'1'}).children('img').attr({'src':'icons/imgRoll_indi_on.png'}).parent().siblings('li').css({'opacity':'0.3'}).children('img').attr({'src':'icons/imgRoll_indi.png'})
        // $('#slide_btn>ul>li:nth-child('+a+')').css({'opacity':'1'}.children('img').attr({'src':'icons/imgRoll_indi_on.png'}))
        // $('#slide_btn>ul>li:nth-child('+a+')').siblings('li').css({'opacity':'0.3'}).children('img').attr({'src':'icons/imgRoll_indi.png'})

    })
    // $('#attraction_bt2').click(function(){
    //     $('#attraction_box1 h3').children()
    // })
    $('#slide_nextbtn').click(function(){
        left100 = left100 - 100
        if(left100<-700){left100 = 0}
        $('#slide_imgbox').animate({'left':left100 + '%'})
        $('#slide_btn>ul>li:nth-child('+((left100*-0.01)+1)+')').css({'opacity':'1'}).children('img').attr({'src':'icons/imgRoll_indi_on.png'}).parent().siblings('li').css({'opacity':'0.3'}).children('img').attr({'src':'icons/imgRoll_indi.png'})
    })
    // 자동 슬라이드 


        $('#line_box_btn>img').draggable({ containment : "parent", axis:'x'});
        $('#information_ul').draggable({ containment : 'parent', axis : 'x' , drag : function(){ $('#line_box_btn>img').css({'left':(69+(($('#information_ul').offset().left)*0.04928))+'%'})}
       
        });

    $('#line_box_btn>img').mousemove(function(){
       let informationWidth = $('#information_box').width(); 
       let box_x2= $('#information_ul').offset().left
       let box_x=  $(this).offset().left - (informationWidth-146)/2
       let box42 = $('#line_box_btn>img').offset().left - (($('#information_box').width()-146)/2)
       //146
       $('.sc').html((box42))
        $('#information_ul').css({'left':(box_x*0.295)+'%'})
    //    ,'transform':'translateX(-'+box_x+'%)'
    //    $('#information_ul_box').css({'left':box_x})
    })
    // $('#information_ul').draggable(function(){
    //     let box_3 = $('#line_box_btn>img').offset().left - (($('#information_box').width()-146)/2)
    //     $('#line_box_btn>img').css({'left':box_3+'%'})
    
    // })
    // $('#information_ul_box').mousemove(function(){
    //    let box_x2= $(this).offset().left
    //    
    // })
})