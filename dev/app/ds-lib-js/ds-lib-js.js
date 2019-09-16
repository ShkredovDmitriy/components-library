// // модуль для работы в удаленным апи черей аякс

// const dsAjaxRequest = function(method, url, request){
//     console.log("Начало функции ds-http-Request");

//     let result = "empty"

//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url, ["true", "", "password"]);
//     xhr.send([request]);
//     xhr.onload = function() {
//         return xhr.response;
//       };


//     console.log("Конец функции ds-http-Request "+ xhr.response);
// }

// export default window.dsAjaxRequest = dsAjaxRequest;