var registerTwo = (function () {
    var $nextStep = document.querySelector(".nextStep");
    return {
        init() {
            this.event();
        },
         event() {
            $nextStep.onclick = function() {
                location.href = 'registerThree.html';
            }
        }
    }
}())


















// var registerTwo = (function () {
//     var $nextStep = document.querySelector(".nextStep");
//     return {
//         init() {
//             this.event();
//         },
//         event() {
//             $nextStep.addEventListener("click", function () {
//                 location.href = 'registerThree.html';
//             }, false)
//         }
//     }
// })