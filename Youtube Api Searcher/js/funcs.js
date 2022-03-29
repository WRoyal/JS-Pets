function strCut(searchLine, len)
{
    if (searchLine.length > len)
        return searchLine.substring(0, len) + "...";
    else
        return searchLine;
}

function getMonth(month)
{
    if (month == "01")
        return "янв.";
    else if (month == "02")
        return "фев.";
    else if (month == "03")
        return "мар.";
    else if (month == "04")
        return "апр.";
    else if (month == "05")
        return "мая";
    else if (month == "06")
        return "июн.";
    else if (month == "07")
        return "июл.";
    else if (month == "08")
        return "авг.";
    else if (month == "09")
        return "сен.";
    else if (month == "10")
        return "окт.";
    else if (month == "11")
        return "ноя.";
    else
        return "дек.";
}

function getFullTime(inputTime)
{
    let year = inputTime.substring(0, 4),
        month = inputTime.substring(5, 7),
        day = inputTime.substring(8, 10);
    let finalTime;

    finalTime = day + " " + getMonth(month) + " " + year + " г.";
    return finalTime;
}