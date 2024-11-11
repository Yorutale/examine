var SanEngyzA = Number(prompt("Введите любое первое число"));
var SanEngyzB = Number(prompt("Введите любое второе число"));
var SanEngyzC = Number(prompt("Введите любое третье число"));

if (SanEngyzA >= SanEngyzC <= SanEngyzB) {
    var AirmasyA = SanEngyzA - SanEngyzB;

    alert("Разница между самым большим и маленькими цифрами: " + AirmasyA);
} else if (SanEngyzC >= SanEngyzA <= SanEngyzB) {
    var AirmasyB = SanEngyzC - SanEngyzB;

    alert("Разница между самым большим и маленькими цифрами: " + AirmasyB);
} else if (SanEngyzA >= SanEngyzB <= SanEngyzC) {
    var AirmasyC = SanEngyzA - SanEngyzC;

    alert("Разница между самым большим и маленькими цифрами: " + AirmasyC);
} else {
    alert("Ең үлкен және ең кішкентай санның айырмасы: бұл жерде екі саннын айырмасы болады")
}