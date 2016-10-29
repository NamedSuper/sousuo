/**
 * Created by Administrator on 2016/10/15.
 */
var div = $("#search-suggest");


$(function () {

    $("#search-value").blur(function () {
        div.hide();
    });
    $("#search-value").focus(function () {
        div.show();
    });



    $("#search-value").bind("keyup",function () {
        var searchText = $("#search-value").val();
        var url = "http://tip.soku.com/search_tip_1?query="+searchText;
        // $("#search-suggest").show();
        // var url = "http://cn.bing.com/AS/Suggestions?pt=page.home&mkt=zh-cn&qry="+searchText+"&cp=2&o=hs&css=1&cvid=56A775C11C4D429E8433A6D68BAB8F71";
        queryMessage(url);
    });





    function queryMessage(url) {
        $.ajax({
            type: 'get',
            url: url,
            dataType: 'jsonp',

            jsonp: 'jsoncallback',
            //XBox(数据);
//                jsonpCallback:'message',

            success: function (data) {
                console.log(data);
                var tag = '<ul>';
                for (var i = 0; i < data.r.length; i++) {
                    var item = data.r[i];
                    var title = item.w;
                    //console.log(title);
                    tag += '<li>' + title + '</li>';
                }
                tag += '</ul>';
                div.html(tag);

                //连缀
                // $(div).find('li').hover(function () {  //鼠标放上去的时候执行
                //         $(this).css('color', 'red');
                //     }, function () {   //鼠标放移开的时候执行
                //         $(this).css('color', 'black');
                //     }
                // );


            },
            error: function () {
                console.log('错误');
            }
        });
    }
});



    //注意获取的区域
// var div = $('#search-suggest');
//
// $(function () {
//
//     //http://tip.soku.com/search_tip_1?jsoncallback=XBox&query=java
//     //获取输入框中内容
//     $('#search-value').keyup(function () {
//
//         var val = $('#search-value').val();
//         //动态生成查询链接
//         var url = 'http://tip.soku.com/search_tip_1?query='+val;
//
//         //alert(url);
//         //进行查询
//         queryMessage(url);
//
//         console.log(url);
//
//     });
//
// });
//
// //自定义请求
// function queryMessage(url) {
//     $.ajax({
//         type:'get',
//         url:url,
//         dataType:'jsonp',
//
//         jsonp:'jsoncallback',
//         //XBox(数据);
// //                jsonpCallback:'message',
//
//         success:function (data) {
//             console.log(data);
//             var tag = '<ul>';
//             for(var i=0;i<data.r.length;i++) {
//                 var item = data.r[i];
//                 var title = item.w;
//                 //console.log(title);
//                 tag += '<li>'+title+'</li>';
//             }
//             tag += '</ul>';
//             div.html(tag);
//
//             //连缀
//             $(div).find('li').hover(function () {  //鼠标放上去的时候执行
//                     $(this).css('color','red');
//                 },function () {   //鼠标放移开的时候执行
//                     $(this).css('color','black');
//                 }
//             );
//
//         },
//         error:function () {
//             console.log('错误');
//         }
//     });
//
// }