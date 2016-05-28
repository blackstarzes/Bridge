﻿Bridge.merge(new System.Globalization.CultureInfo("si-LK", true), {
    englishName: "Sinhala (Sri Lanka)",
    nativeName: "සිංහල (ශ්‍රී ලංකා)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-අනන්තය",
        positiveInfinitySymbol: "අනන්තය",
        percentSymbol: "%",
        percentGroupSizes: [3,2],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "රු.",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 14,
        currencyPositivePattern: 2,
        numberGroupSizes: [3,2],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ඉරිදා","සඳුදා","කුජදා","බුදදා","ගුරුදා","කිවිදා","ශනිදා"],
        abbreviatedMonthGenitiveNames: ["ජන.","පෙබ.","මාර්තු.","අප්‍රේල්.","මැයි","ජූනි","ජූලි","අගෝ.","සැප්.","ඔක්.","නොවැ.","දෙසැ.",""],
        abbreviatedMonthNames: ["ජන.","පෙබ.","මාර්තු.","අප්‍රේල්.","මැයි","ජූනි","ජූලි","අගෝ.","සැප්.","ඔක්.","නොවැ.","දෙසැ.",""],
        amDesignator: "පෙ.ව.",
        dateSeparator: "-",
        dayNames: ["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "yyyy MMMM' මස 'dd' වැනිදා 'dddd tt h:mm:ss",
        longDatePattern: "yyyy MMMM' මස 'dd' වැනිදා 'dddd",
        longTimePattern: "tt h:mm:ss",
        monthDayPattern: "MMMM dd",
        monthGenitiveNames: ["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්",""],
        monthNames: ["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්",""],
        pmDesignator: "ප.ව.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["ඉ","ස","අ","බ","බ්‍ර","සි","සෙ"],
        shortTimePattern: "tt h:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
