﻿Bridge.merge(new System.Globalization.CultureInfo("ne-NP", true), {
    englishName: "Nepali (Nepal)",
    nativeName: "नेपाली (नेपाल)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "अंक नभएको",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3,2],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "रु",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3,2],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],
        abbreviatedMonthGenitiveNames: ["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस",""],
        abbreviatedMonthNames: ["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस",""],
        amDesignator: "पूर्वाह्न",
        dateSeparator: "/",
        dayNames: ["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, MMMM dd, yyyy h:mm:ss tt",
        longDatePattern: "dddd, MMMM dd, yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर",""],
        monthNames: ["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर",""],
        pmDesignator: "अपराह्न",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "M/d/yyyy",
        shortestDayNames: ["आ","सो","म","बु","बि","शु","श"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM,yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
