
void updateLeapYear(int year) {
    if(year % 400 == 0) {
        month[2] = 29
    } else if(year % 100 == 0) {
        month[2] = 28
    } else if(year % 4 == 0) {
        month[2] = 29
    } else {
        month[2] = 28
    }
}