/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v4.1
   http://deluxe-menu.com
*/


// -- Deluxe Tuner Style Names
var itemStylesNames=[];
var menuStylesNames=[];
// -- End of Deluxe Tuner Style Names

//--- Common
var menuIdentifier="cssMenu";
var ie6Support=1;
var isHorizontal=1;
var smColumns=1;
var smOrientation=0;
var dmRTL=0;
var pressedItem=-2;

//--- Dimensions
var menuWidth="";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="";
var posY="";
var subMenuAlign="left";
var subMenuVAlign="top";

//--- Font
var fontStyle=["normal 11px Trebuchet MS, Tahoma","normal 11px Trebuchet MS, Tahoma"];
var fontColor=["#000000","#FFFFFF"];
var fontDecoration=["none","none"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="#00FF00";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="#789FC7";
var menuBorderWidth="1px";
var menuBorderStyle="solid";
var menuBorderRadius="15px";
var smFrameImage="";
var smFrameWidth=0;

//--- Item Appearance
var itemBackColor=["#99C9FF","#0393FC"];
var itemBackImage=["",""];
var itemSlideBack=0;
var itemShadow="";
var itemBorderWidth="0px";
var itemBorderColor=["#FCEEB0","#4C99AB"];
var itemBorderStyle=["solid","solid"];
var itemBorderRadius="15px";
var itemSpacing=1;
var itemPadding="0px";
var itemAlignTop="left";
var itemAlign="left";
var itemCursor="pointer";

//--- Item Icons
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=16;
var iconHeight=16;
var arrowImageMain=["deluxe-css-menu.files/arrowmain.gif","deluxe-css-menu.files/arrowmaino.gif"];
var arrowWidth=7;
var arrowImageSub=["deluxe-css-menu.files/arrowsub.gif","deluxe-css-menu.files/arrowsubo.gif"];
var arrowWidthSub=0;

//--- Separators
var separatorImage="";
var separatorColor="";
var separatorWidth="100%";
var separatorHeight="3px";
var separatorAlignment="left";
var separatorVImage="";
var separatorVColor="";
var separatorVWidth="3px";
var separatorVHeight="100%";
var separatorPadding="0px";

//--- Transitional Effects & Filters
var transparency="80";
var transition="-1";
var itemTransition="0";
var transDuration=350;
var shadowLen=3;
var shadowColor="#B1B1B1";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Floatable Menu
var floatable=0;

//--- Advanced Features
var saveNavigationPath=1;
var itemTarget="";
var pathPrefix_img="";
var pathPrefix_link="";

var itemStyles = [
];
var menuStyles = [
];

var menuItems = [

    ["Menu","http://deluxe-menu.com/css-menu/", "", "", "", "_blank", "", "", "", "", "", ],
        ["|PingooMoslem Menu :","", "", "", "", "", "", "", "", "", "", ],
        ["|Aplikasi HP Islami","", "", "", "", "", "", "", "", "", "", ],
        ["|Driver For Netbook","", "", "", "", "", "", "", "", "", "", ],
    ["Islam","", "deluxe-css-menu.files/icon1.gif", "deluxe-css-menu.files/icon1o.gif", "", "", "", "", "", "", "", ],
        ["|Features","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon2.gif", "deluxe-css-menu.files/icon2o.gif", "", "", "", "", "", "", "", ],
        ["|Installation","", "deluxe-css-menu.files/icon2.gif", "deluxe-css-menu.files/icon2o.gif", "", "", "", "", "", "", "", ],
            ["||Description of Files","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
            ["||How To Setup","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Parameters Info","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon2.gif", "deluxe-css-menu.files/icon2o.gif", "", "", "", "", "", "", "", ],
        ["|Dynamic Functions","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon2.gif", "deluxe-css-menu.files/icon2o.gif", "", "", "", "", "", "", "", ],
        ["|Supported Browsers","", "deluxe-css-menu.files/icon2.gif", "deluxe-css-menu.files/icon2o.gif", "", "", "", "", "", "", "", ],
            ["||Windows OS","", "deluxe-css-menu.files/icon3.gif", "deluxe-css-menu.files/icon3o.gif", "", "", "", "", "", "", "", ],
            ["||Internet Explorer","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Firefox","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Mozilla","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Netscape","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Opera","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||MAC OS","", "deluxe-css-menu.files/icon3.gif", "deluxe-css-menu.files/icon3o.gif", "", "", "", "", "", "", "", ],
            ["||Firefox","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Safari","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Internet Explorer","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Unix/Linux OS","", "deluxe-css-menu.files/icon3.gif", "deluxe-css-menu.files/icon3o.gif", "", "", "", "", "", "", "", ],
            ["||Firefox","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
            ["||Konqueror","", "deluxe-css-menu.files/icon5.gif", "deluxe-css-menu.files/icon5o.gif", "", "", "", "", "", "", "", ],
    ["Soft","", "deluxe-css-menu.files/icon1.gif", "deluxe-css-menu.files/icon1o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 1","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 2 is Disabled","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "_", "", "", "", "", "", ],
        ["|Sample 3","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 4","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 5","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 6","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 7","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 8","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
        ["|Sample 9","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon6.gif", "deluxe-css-menu.files/icon6o.gif", "", "", "", "", "", "", "", ],
    ["Fun","", "", "", "", "", "", "", "", "", "", ],
        ["|Item 42","", "", "", "", "", "", "", "", "", "", ],
    ["PrayTime","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon1.gif", "deluxe-css-menu.files/icon1o.gif", "", "_blank", "", "", "", "", "", ],
    ["Cool","", "", "", "", "", "", "", "", "", "", ],
        ["|Item 44","", "", "", "", "", "", "", "", "", "", ],
    ["Movie","", "", "", "", "", "", "", "", "", "", ],
        ["|Item 46","", "", "", "", "", "", "", "", "", "", ],
    ["Tips","", "", "", "", "", "", "", "", "", "", ],
        ["|Item 48","", "", "", "", "", "", "", "", "", "", ],
    ["Forum","", "", "", "", "", "", "", "", "", "", ],
    ["About","http://deluxe-menu.com/css-menu/", "deluxe-css-menu.files/icon1.gif", "deluxe-css-menu.files/icon1o.gif", "", "", "", "", "", "", "", ],
];

