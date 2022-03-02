var clock24_lang=new Array;clock24_lang.en=["en","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Sun","Mon","Tue","Wed","Thu","Fri","Sat"],clock24_lang.ru=["ru","Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек","Вс","Пн","Вт","Ср","Чт","Пт","Сб"],clock24_lang.it=["it","Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Otr","Nov","Dic","Do","Lu","Ma","Me","Gi","Ve","Sa"],clock24_lang.es=["es","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic","Dom","Lun","Mar","Mié","Jue","Vie","Sab"],clock24_lang.de=["de","Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez","So","Mo","Di","Mi","Do","Fr","Sa"],clock24_lang.fr=["fr","Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc","Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];var clock24_dst=new Array([[0,7,3,0,7,10,60],[]],[[0,7,3,0,7,10,60],["AZ","AM","BY","MD","UA","AT","AL","AD","BE","BG","BA","VA","GB","HU","DE","GR","DK","IE","ES","IT","CY","LV","LT","LI","LU","MT","MK","MC","NL","NO","PL","PT","RO","SM","CS","SK","SI","TR","FI","FR","HR","CZ","CH","SE","EE"]],[[2,7,3,1,7,11,60],["US","CA"]],[[1,7,4,0,7,10,60],["MX"]],[[3,7,3,0,7,10,60],["CU"]],[[4,5,3,3,6,9,60],["IR"]],[[0,5,3,1,7,10,60],["IL"]],[[0,5,4,0,4,8,60],["EG"]],[[1,7,10,1,7,4,60],["AU"]],[[0,7,9,1,7,4,60],["NZ"]],[[2,7,10,0,7,3,60],["CL"]],[[1,7,11,0,7,2,60],["BR"]]);function clock24(e,t,c,l){this.p=e,999==t&&(t=-1*(new Date).getTimezoneOffset()),this.tz=t,""==c&&(c="%hh:%nn:%ss"),this.fmt=c,this.refresh=clock24_refresh,this.format=clock24_format,this.daylight=clock24_daylight,this.dstdata=0,this.dst1=0,this.dst2=0,this.dsttype=0,clock24_lang[l]||(l="en"),this.lang=l,this.clock24_m=new Array,this.clock24_m[1]=clock24_lang[l][1],this.clock24_m[2]=clock24_lang[l][2],this.clock24_m[3]=clock24_lang[l][3],this.clock24_m[4]=clock24_lang[l][4],this.clock24_m[5]=clock24_lang[l][5],this.clock24_m[6]=clock24_lang[l][6],this.clock24_m[7]=clock24_lang[l][7],this.clock24_m[8]=clock24_lang[l][8],this.clock24_m[9]=clock24_lang[l][9],this.clock24_m[10]=clock24_lang[l][10],this.clock24_m[11]=clock24_lang[l][11],this.clock24_m[12]=clock24_lang[l][12],this.clock24_w=new Array,this.clock24_w[0]=clock24_lang[l][13],this.clock24_w[1]=clock24_lang[l][14],this.clock24_w[2]=clock24_lang[l][15],this.clock24_w[3]=clock24_lang[l][16],this.clock24_w[4]=clock24_lang[l][17],this.clock24_w[5]=clock24_lang[l][18],this.clock24_w[6]=clock24_lang[l][19],window.setInterval("clock24_"+e+".refresh()",1e3)}function clock24_refresh(){var e=new Date,e=new Date(e.getTime()+6e4*this.tz);this.dst1&&this.dsttype?(e.getTime()>this.dst1||e.getTime()<this.dst2)&&(e=new Date(e.getTime()+6e4*this.dstdata)):this.dst1&&e.getTime()>this.dst1&&e.getTime()<this.dst2&&(e=new Date(e.getTime()+6e4*this.dstdata)),document.getElementById("clock24_"+this.p).innerHTML=this.format(e,this.fmt)}function clock24_format(e,t){var c=e.getUTCDate(),l=c;c<10&&(l="0"+c);var a=e.getUTCMonth()+1,n=a;a<10&&(n="0"+a);var o=e.getUTCFullYear(),s=o-2e3;s<10&&(s="0"+s);var i=e.getUTCHours(),r=i;i<10&&(r="0"+i);var g=i%12;0==g&&(g=12);var d=g;g<10&&(d="0"+g);var h=e.getUTCMinutes(),k=h;k<10&&(k="0"+h);var _=e.getUTCSeconds(),w=_;w<10&&(w="0"+_);var p=e.getUTCDay();W=this.clock24_w[p];var m=this.clock24_m[a],e="am";12<=i&&(e="pm");p=12<=i?"PM":"AM";return(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=new String(t)).replace(new RegExp("%dd"),l)).replace(new RegExp("%d"),c)).replace(new RegExp("%mm"),n)).replace(new RegExp("%m"),a)).replace(new RegExp("%yyyy"),o)).replace(new RegExp("%yy"),s)).replace(new RegExp("%hh"),r)).replace(new RegExp("%h"),i)).replace(new RegExp("%nn"),k)).replace(new RegExp("%n"),h)).replace(new RegExp("%ss"),w)).replace(new RegExp("%s"),_)).replace(new RegExp("%HH"),d)).replace(new RegExp("%H"),g)).replace(new RegExp("%W"),W)).replace(new RegExp("%M"),m)).replace(new RegExp("%p"),e)).replace(new RegExp("%P"),p)).toString()}function clock24_daylight(e){if(!(e=clock24_find_dst(e)))return this.dst1=0,void(this.dst2=0);dd=clock24_dst[e][0],d=clock24_byweekday(dd[0],dd[1],dd[2]-1),d.setUTCHours(2,0,0,0),this.dst1=d.getTime(),d=clock24_byweekday(dd[3],dd[4],dd[5]-1),d.setUTCHours(3,0,0,0),this.dst2=d.getTime(),this.dst1>this.dst2&&(this.dsttype=1),this.dstdata=dd[6]}function clock24_byweekday(e,t,c){var l=new Date;if(l.setUTCMonth(c,1),w1=1+Math.abs(t-l.getUTCDay()),l.setUTCDate(w1),wn=0,e)wn=7*(e-1)+w1;else for(i=2;i<=6;i++)if(td=new Date(l.getTime()+7*i*86400*1e3),td.getUTCMonth()>c){wn=w1+7*(i-1);break}return l.setUTCDate(wn),l}function clock24_find_dst(e){if(e)for(var t=0;t<clock24_dst.length;t++)for(var c=0;c<clock24_dst[t][1].length;c++)if(clock24_dst[t][1][c]==e)return t}