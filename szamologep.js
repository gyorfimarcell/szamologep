function szamolj(muvelet) {
    var szam1 = parseFloat(document.getElementById("be1").value);
    var szam2 = parseFloat(document.getElementById("be2").value);
    var eredmeny;
    switch (muvelet) {
        case "+":
            eredmeny = szam1 + szam2;
            break;
        case "-":
            eredmeny = szam1 - szam2;
            break;
        case "*":
            eredmeny = szam1 * szam2;
            break;
        case "/":
            eredmeny = szam1 / szam2;
            break;
    }
    document.getElementById("eredmeny").innerHTML = eredmeny;
}