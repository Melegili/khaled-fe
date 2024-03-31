
// function hijriz() {

// 	var cal1 = new Calendar(),
// 			cal2 = new Calendar(true, 0, false, true),
// 			date2 = document.getElementById('date-2'),
// 			cal2Mode = cal2.isHijriMode();


// 	document.getElementById('cal-2').appendChild(cal2.getElement());
// 	setDateFields();
// 	cal2.callback = function () {
// 		if (cal2Mode !== cal2.isHijriMode()) {
// 			cal1.disableCallback(true);
// 			cal1.changeDateMode();
// 			cal1.disableCallback(false);
// 			cal1Mode = cal1.isHijriMode();
// 			cal2Mode = cal2.isHijriMode();
// 		}
// 		else
// 			cal1.setTime(cal2.getTime());
// 		setDateFields();
// 	};

// 	function setDateFields() {
// 		date2.value = cal2.getDate().getDateString();
// 	}

// 	function showCal2() {
// 		if (cal2.isHidden()) cal2.show();
// 		else cal2.hide();
// 	}

// };



// function Ftimes() {


//     var FtimesObj = new Object()
//     function Cal1() {
//         return cal1 = new Calendar();
//     }
//     function Cal2() {
//         return cal2 = new Calendar(true, 0, false, true);
//     }
//     function Date2() {
//         return date2 = document.getElementById('date-2');
//     }
//     function Cal2Mode() {
//         return cal2Mode = cal2.isHijriMode();
//     }
//     function Cal2Element() {
//         return document.getElementById('cal-2').appendChild(cal2.getElement());
//     };
//     // var ce = Cal2Data();
//     // var d2 = ce[0];
//     // var d2v = ce[1];
//     function Cal2Data() {

//         cal1 = new Calendar();
// 				cal2 = new Calendar(true, 0, false, true);
// 				date2 = document.getElementById('date-2');
// 				cal2Mode = cal2.isHijriMode();
//         c2el = document.getElementById('cal-2').appendChild(cal2.getElement());
//         date2 = document.getElementById('date-2');
//         // date2.value = cal2.getDate().getDateString();

//         date2.setValue = cal2.getDate().getDateString();


//         // date2.value = mainGroup.get('stepOneGroup.idExpiry').setValue.getDate().getDateString();

//         cal2.callback = function () {
//             if (cal2Mode !== cal2.isHijriMode()) {
//                 cal1.disableCallback(true);
//                 cal1.changeDateMode();
//                 cal1.disableCallback(false);
//                 cal1Mode = cal1.isHijriMode();
//                 cal2Mode = cal2.isHijriMode();
//             }
//             else
//                 cal1.setTime(cal2.getTime());
//             setDateFields();
//         };
//         function setDateFields() {
//             date2.value = cal2.getDate().getDateString();
//         }

//         showCal2f = function showCal2() {
//             return (cal2.isHidden()) ? cal2.show() : cal2.hide();
//         }

//         return [cal1, cal2, cal2Mode, c2el, date2, date2.value, cal2.callback(), showCal2f];
//     }
//     // function Cal2Callback(Cal1, Cal1Mode, Cal2, Cal2Mode) {
//     //     return if (Cal2Mode !== Cal2.isHijriMode()) {
//     //         Cal1.disableCallback(true);
//     //         Cal1.changeDateMode();
//     //         Cal1.disableCallback(false);
//     //         Cal1Mode = Cal1.isHijriMode();
//     //         Cal2Mode = Cal2.isHijriMode();
//     //     }
//     //     else
//     //         Cal1.setTime(Cal2.getTime());
//     //     setDateFields();
//     //
//     // }


//     FtimesObj.Cal1 = Cal1
//     FtimesObj.Cal2 = Cal2
//     FtimesObj.Date2 = Date2
//     FtimesObj.Cal2Mode = Cal2Mode
//     FtimesObj.Cal2Element = Cal2Element
//     FtimesObj.Cal2Data = Cal2Data
//     // FtimesObj.showCal2 = Cal2Data.showCal
//     return FtimesObj
// }

// Multi = new Ftimes()


// //# sourceURL=penyy.js
