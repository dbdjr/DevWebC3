class Setings {
    //Vamos desenvolver um jogo de adivinhação no qual o jogador é solicitado a escolher uma entre dez cores. 
    //Ao inserir a cor desejada, o mesmo deverá receber um feedback sobre o estado do jogo, ou seja, se ele
    //acertou a cor ou não.
    cores: Array<string> = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige",
        "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood",
        "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
        "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
        "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
        "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
        "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
        "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick",
        "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold",
        "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
        "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
        "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
        "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
        "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray",
        "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
        "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
        "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen",
        "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose",
        "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange",
        "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
        "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum",
        "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
        "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna",
        "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
        "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat",
        "White", "WhiteSmoke", "Yellow", "YellowGreen"]

    corAleatoria: Array<String> = []
    usuario: String = null
    vidas: number = 4
    i: number = 0;
    comparacao: boolean

    sortear(corAleatoria: Array<String>, cores: Array<String>, corSorteada: Array<number>) {
        for (this; this.i < 10; this.i++) {
            corAleatoria.push(cores[Math.floor(Math.random() * cores.length) + 1].toLowerCase())
            corAleatoria.sort
        }
    }
    corSorteada = this.corAleatoria[Math.floor((Math.random() * this.corAleatoria.length))]

    jogar(corSorteada, usuario, vidas) {
        do {
            this.usuario = prompt(`ESCOLHA UMA DAS CORES ABAIXO:\n ${this.corAleatoria}\nVidas Restantes: ${vidas}`).toLowerCase()
            if (this.usuario != this.corSorteada && this.usuario != "") {

                if (this.comparacao = corSorteada.localeCompare(usuario) > 0) {
                    alert('Resposta incorreta!!')
                    alert('A cor está em posição maior na ordem alfabética')
                }
                else {
                    alert('Resposta incorreta!!')
                    alert('A cor está em posição menor na ordem alfabética')
                }
                vidas--
            }

            else if (usuario == corSorteada) {
                document.body.style.backgroundColor = corSorteada
                alert('Correto!!')
                vidas = 0

            }



        } while (vidas != 0);
        if (usuario == "") {
            alert('CAMPO EM BRANCO!!')


        }
    }
}
