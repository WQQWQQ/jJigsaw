(function($){
    $.fn.jJigsaw=function(options){
        var $bodybgc=$("body").css("background-color"),
            defaultOptions;
        if($bodybgc!="rgba(0, 0, 0, 0)" && $bodybgc!="transparent"){
            defaultOptions={
                bgcolor:$bodybgc,
                bdcolor:"#cccccc",
                bdwidth:5,
                holerate:8
            };
        }
        else{
            defaultOptions={
                bgcolor:"#ffffff",
                bdcolor:"#cccccc",
                bdwidth:5,
                holerate:8
            };
        }
        options= $.extend(defaultOptions,options);
        return this.each(function(){
            var $elem=$(this),
                $elemHeight=$elem.innerHeight(),
                $elemWidth=$elem.innerWidth(),
                $divwidth=$elemWidth/defaultOptions.holerate,
                $boxshadowwidth=defaultOptions.bdwidth/2;
            var leftsideDiv=creatediv();
            $(leftsideDiv).css({
                'position':"absolute",
                'height':$elemHeight+defaultOptions.bdwidth,
                'width':$divwidth,
                'background-color':defaultOptions.bgcolor,
                'top':0,
                'left':0
            });
            var rightsideDiv=creatediv();
            $(rightsideDiv).css({
                'position':"absolute",
                'height':$elemHeight+defaultOptions.bdwidth,
                'width':$divwidth,
                'background-color':defaultOptions.bgcolor,
                'top':0,
                "right":0
            });
            var leftdiv=creatediv();
            $(leftdiv).css({
                'position':"absolute",
                'height':$divwidth,
                'width':$divwidth,
                '-webkit-border-radius':"50%",
                '-moz-border-radius':"50%",
                'border-radius':"50%",
                "-webkit-box-shadow":-$boxshadowwidth+"px "+$boxshadowwidth+"px "+defaultOptions.bdcolor,
                "-moz-box-shadow":-$boxshadowwidth+"px "+$boxshadowwidth+"px "+defaultOptions.bdcolor,
                "box-shadow":-$boxshadowwidth+"px "+$boxshadowwidth+"px "+defaultOptions.bdcolor,
                'top':"50%",
                'left':$divwidth/5,
                'margin-top':-$divwidth/2
            });
            var rightdiv=creatediv();
            $(rightdiv).css({
                'position':"absolute",
                'height':$divwidth,
                'width':$divwidth,
                '-webkit-border-radius':"50%",
                '-moz-border-radius':"50%",
                'border-radius':"50%",
                "-webkit-box-shadow":$boxshadowwidth+"px "+$boxshadowwidth+"px "+defaultOptions.bdcolor,
                "-moz-box-shadow":$boxshadowwidth+"px "+$boxshadowwidth+"px "+defaultOptions.bdcolor,
                "box-shadow":$boxshadowwidth+"px "+$boxshadowwidth+"px "+defaultOptions.bdcolor,
                'top':"50%",
                'right':$divwidth/5,
                'margin-top':-$divwidth/2
            });
            var elembgc=$elem.css("background-color");
            var elembgi=$elem.css("background-image");
            if(elembgi!="none"){
                var leftbgposx=-($divwidth/5);
                var bgposy=-($elemHeight/2-$divwidth/2);
                var rightbgposx=-($elemWidth-$divwidth-$divwidth/5);
                $(leftdiv).css({
                    'background-image':elembgi,
                    'background-repeat':"no-repeat",
                    'background-size':$elemWidth+"px "+$elemHeight+"px",
                    '-webkit-background-size':$elemWidth+"px "+$elemHeight+"px",
                    'background-position':leftbgposx+"px "+bgposy+"px"
                });
                $(rightdiv).css({
                    'background-image':elembgi,
                    'background-repeat':"no-repeat",
                    'background-size':$elemWidth+"px "+$elemHeight+"px",
                    '-webkit-background-size':$elemWidth+"px "+$elemHeight+"px",
                    'background-position':rightbgposx+"px "+bgposy+"px"
                })
            }
            else if(elembgc!="rgba(0, 0, 0, 0)" && elembgc!="transparent"){
                $(leftdiv).css({
                    'background-color':elembgc
                });
                $(rightdiv).css({
                    'background-color':elembgc
                });
            }
            else if(elembgc=="rgba(0, 0, 0, 0)" && elembgi=="none"){
                $(leftdiv).css({
                    'background-color':"#ffffff"
                });
                $(rightdiv).css({
                    'background-color':"#ffffff"
                });
            }
            var topdiv=creatediv();
            $(topdiv).css({
                'position':"absolute",
                'height':$divwidth,
                'width':$divwidth,
                'background-color':defaultOptions.bgcolor,
                '-webkit-border-radius':"50%",
                '-moz-border-radius':"50%",
                'border-radius':"50%",
                'top':-$divwidth/5,
                'left':"50%",
                'margin-left':-$divwidth/2
            });
            var bottomdiv=creatediv();
            $(bottomdiv).css({
                'position':"absolute",
                'height':$divwidth,
                'width':$divwidth,
                'background-color':defaultOptions.bgcolor,
                '-webkit-border-radius':"50%",
                '-moz-border-radius':"50%",
                'border-radius':"50%",
                'border-top':defaultOptions.bdcolor+" "+defaultOptions.bdwidth+"px solid",
                'bottom':-$divwidth/5,
                'left':"50%",
                'margin-left':-$divwidth/2
            });
            return $elem.css({
                "position":"relative",
                'border-bottom-color':defaultOptions.bdcolor,
                'border-bottom-width':defaultOptions.bdwidth,
                'border-bottom-style':"solid"
            }).append($(leftsideDiv),$(rightsideDiv),$(leftdiv),$(rightdiv),$(topdiv),$(bottomdiv));
        });
        function creatediv(){
            return document.createElement("div");
        }
    }
})(jQuery);