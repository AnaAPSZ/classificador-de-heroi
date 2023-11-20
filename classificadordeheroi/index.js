let heroi = "Alex"
let xp = 10300

 switch (true) {
    case xp < 1000:
        console.log("O Herói de nome "+heroi,"está no nível de Ferro")
        break;
    case xp > 1000 && xp < 2001:
        console.log("O Herói de nome "+heroi,"está no nível de Bronze")
        break;
    case xp > 2000 && xp < 5001:
        console.log("O Herói de nome "+heroi,"está no nível de Prata")
        break;
    case xp > 6000 && xp < 7001:
        console.log("O Herói de nome "+heroi,"está no nível de Ouro")
        break;
    case xp > 7000 && xp < 8001:
        console.log("O Herói de nome "+heroi,"está no nível de Platina")
        break;
    case xp > 8000 && xp < 9001:
        console.log("O Herói de nome "+heroi,"está no nível de Ascendente")
        break;
    case xp > 9000 && xp < 10001:
        console.log("O Herói de nome "+heroi,"está no nível de Imortal")
        break;
    case xp >= 10001:
        console.log("O Herói de nome "+heroi,"está no nível de Radiante")
        break;
 }