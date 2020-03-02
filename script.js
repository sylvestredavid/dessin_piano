// version jquery
//  $(function() {
//     var on = false;

//     $("#btn_on").click(function() {
//         if($("#ecran").hasClass("ecran_actif")) {
//             $("#ecran").removeClass("ecran_actif")
//             on = false;
//         } else {
//             $("#ecran").addClass("ecran_actif")
//             on = true;
//         }
//     })

//     $(".blanche").each(function() {
// 		$(this).mousedown(function(e) {
//             if(on) {
//                 console.log($(this).text())
//             }
// 			$(this).addClass("pressed_blanche")
// 		})
// 		$(this).mouseup(function(e) {
// 			$(this).removeClass("pressed_blanche")
// 		})
// 	});

//     $(".noire").each(function() {
// 		$(this).mousedown(function(e) {
//             if(on) {
//                 console.log($(this).text())
//             }
// 			$(this).addClass("pressed_noire")
// 		})
// 		$(this).mouseup(function(e) {
// 			$(this).removeClass("pressed_noire")
// 		})
// 	});
// });

//version js pure
(function() {
    var on = false;
    document.getElementById("btn_on").addEventListener("click", function() {
        if(document.getElementById("ecran").classList.contains("ecran_actif")) {
            document.getElementById("ecran").classList.remove("ecran_actif")
            on = false;
        } else {
            document.getElementById("ecran").classList.add("ecran_actif")
            on = true;
        }
    })

    var blanches = document.getElementsByClassName("blanche");

    Array.prototype.forEach.call(blanches, function(blanche) {
        blanche.addEventListener("mousedown", function() {
            if(on) {
                console.log(blanche.innerText)
            }
            blanche.classList.add("pressed_blanche")
        })
        blanche.addEventListener("mouseup", function() {
            blanche.classList.remove("pressed_blanche")
        })
    });

    var noires = document.getElementsByClassName("noire");

    Array.prototype.forEach.call(noires, function(noire) {
        noire.addEventListener("mousedown", function() {
            if(on) {
                console.log(noire.innerText)
            }
            noire.classList.add("pressed_noire")
        })
        noire.addEventListener("mouseup", function() {
            noire.classList.remove("pressed_noire")
        })
    });
})();