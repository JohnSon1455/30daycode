var year=2000
if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
    console.log("不是潤年")
}else
    console.log("是潤年")
