function timeConversion(s) {
    if (s.includes("PM")){
        let a = s.substring(0,2);
        let b = s.substring(2,8);
        if (parseInt(a)<12){
            let h = 12 + parseInt(a);
            toString(h);
            return h+b;
        }
        else{
            return s.substring(0,8);
        }
    }
    else{
        let a = s.substring(0,2);
        let b = s.substring(2,8);
        if (parseInt(a) == 12){
            a = "00";
            return a+b;
        }
        else{
            return s.substring(0,8);
        }
    }
}
