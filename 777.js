function show_date_time(){
        window.setTimeout("show_date_time()", 1000);
        // 这里修改站点开启日期
        BirthDay=new Date("01/15/2024 00:00:00");
        today=new Date();
        timeold=(today.getTime()-BirthDay.getTime());
        sectimeold=timeold/1000
        secondsold=Math.floor(sectimeold);
        msPerDay=24*60*60*1000
        e_daysold=timeold/msPerDay
        daysold=Math.floor(e_daysold);
        e_hrsold=(e_daysold-daysold)*24;
        hrsold=Math.floor(e_hrsold);
        e_minsold=(e_hrsold-hrsold)*60;
        minsold=Math.floor((e_hrsold-hrsold)*60);
        seconds=Math.floor((e_minsold-minsold)*60);
        span_dt_dt.innerHTML='<font style=color:#16982b>'+daysold+'</font> 天 <font style=color:#16982b>'+hrsold+'</font> 时 <font style=color:#16982b>'+minsold+'</font> 分 <font style=color:#16982b>'+seconds+'</font> 秒';
    }
    show_date_time();
