// 1)

n = +prompt('Введите высоту n', '');
m = +prompt('Введите ширину m', '');

star = '*';
space = '&nbsp;';
strStar = '';
strSpace = '';

for(i = 1; i <= n - 2; i++) {
    strSpace = strSpace + space;
    strStar = strStar + star;
}

resultSpace = '*' + strSpace + '*<br />';
resultStar = strStar + star + star + '<br />';
resultLinewWithSpaces = '';

for(i = 1; i <= m - 2; i++) {
    resultLinewWithSpaces = resultLinewWithSpaces + resultSpace;
}

document.write(resultStar)
document.write(resultLinewWithSpaces)
document.write(resultStar)

// 2)

// n = +prompt('Введите высоту n', '');
// m = +prompt('Введите ширину m', '');

// star = '*';
// space = '&nbsp;';

// for (i = 0; i < n; i++) {
//     str = '';

//     if (i == 0 || i == n - 1) {
//         for (var j = 0; j < m; j++) {
//             str = str + star;
//         }
//         document.write(str + '<br>')
//     } else {
//         str = star;
//         for (var j = 0; j < m - 2; j++) {
//             str = str + space;
//         }
//         str += star;
//         document.write(str + '<br>')
//     }
// }
