var SanEngyzA = Number(prompt("Введите число a"));
var SanEngyzB = Number(prompt("Введите число b"));

if (SanEngyzA >= SanEngyzB) {
    alert("число a больше чем число b");

    alert("a и b, среднее значение: " + (SanEngyzA % SanEngyzB));
} else if (SanEngyzA <= SanEngyzB) {
    alert("число b больше чем число a");

    alert("a и b, среднее значение: " + (SanEngyzA % SanEngyzB));
} else if (SanEngyzA == SanEngyzB) {
    alert("Обе цифр равны");
} else { 
    alert("Введите правильное число")
}

