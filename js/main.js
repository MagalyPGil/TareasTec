let tabla = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
let turnos = 1;
let izq;
let cont = 1;
let Turquesa = 0;
let Magenta = 0;
function filas(val) {
    switch (val) {
        case 1:
            clickUp(val)       
            break;
        case 2:
            clickUp(val)
            break;
        case 3:
            clickUp(val)
            break;
        case 4:
            clickUp(val)
            break;
        case 5:
            clickUp(val)
            break;
        case 6:
            clickUp(val)
            break;
        case 7:
            clickUp(val)
            break;
    }
    function clickUp(val) {
        calHeight(val)
        validacion()
        empate()
    }
    function color(esp1, esp2,id){
        if (turnos == 1) {
            document.getElementById(id).style.background = '#00A4C4';
            tabla[esp1][esp2] = 3
            cont++
        } else {
            document.getElementById(id).style.background = '#E538F6';
            tabla[esp1][esp2] = -3
            cont++
        }
        console.log(cont)
    }
    function calHeight(val){
        c1 = tabla[0][val-1]
        c2 = tabla[1][val-1]
        c3 = tabla[2][val-1]
        c4 = tabla[3][val-1]
        c5 = tabla[4][val-1]
        c6 = tabla[5][val-1]
        let i = 0;
        let col = val - 1
        while(i < 7){
            switch (i) {
                case 0:
                    if (c1 == 0 && c2 !== 0) {
                        color(i,col,val)
                        turno() 
                     }
                    break;
                case 1:
                    if (c1 === 0 && c2 === 0 && c3 !== 0) {
                        color(i,col,val)
                        turno()
                     }
                    break;
                case 2:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                        color(i,col,val)
                        turno()
                     }
                        break;
                case 3:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                        color(i,col,val)
                        turno()
                    }
                        break;
                case 4:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                        color(i,col,val)
                        turno() 
                    }  
                        break;
                case 5:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                        color(i,col,val)
                        turno()
                    }  
                        break;
                case 5:
                        if(c1 !== 0){
                            turno()
                        }
                        break;
                default:
                    break;
            }
            i++
            val += 7                      
        }        
    }
    function turno() {
        if (turnos == 1) {
            turnos = 2;
        } else {
            turnos = 1
        }
    }
    function ganador(){
        if(turnos===1 || izq===true){
            alert('El ganador es el jugador Magenta')
            history.go('/')
        }
        else{
            alert('El ganador es el jugador Turquesa')
            history.go('/')
        }
    }
    function empate(){
    if(cont == 43){
        alert('Empate')
        history.go('/')
    }
    
}
    function validacion(){
        let suma = turnos === 1 ? -12 : 12
    //tabla
    c1 = tabla[0][0]; c21 = tabla[0][1]; c31 = tabla[0][2]; c41 = tabla[0][3]; c51 = tabla[0][4]; c61 = tabla[0][5]; c71 = tabla[0][6];
    c2 = tabla[1][0]; c22 = tabla[1][1]; c32 = tabla[1][2]; c42 = tabla[1][3]; c52 = tabla[1][4]; c62 = tabla[1][5]; c72 = tabla[1][6];
    c3 = tabla[2][0]; c23 = tabla[2][1]; c33 = tabla[2][2]; c43 = tabla[2][3]; c53 = tabla[2][4]; c63 = tabla[2][5]; c73 = tabla[2][6];
    c4 = tabla[3][0]; c24 = tabla[3][1]; c34 = tabla[3][2]; c44 = tabla[3][3]; c54 = tabla[3][4]; c64 = tabla[3][5]; c74 = tabla[3][6];
    c5 = tabla[4][0]; c25 = tabla[4][1]; c35 = tabla[4][2]; c45 = tabla[4][3]; c55 = tabla[4][4]; c65 = tabla[4][5]; c75 = tabla[4][6];
    c6 = tabla[5][0]; c26 = tabla[5][1]; c36 = tabla[5][2]; c46 = tabla[5][3]; c56 = tabla[5][4]; c66 = tabla[5][5]; c76 = tabla[5][6];
    d1 = c3 + c24 + c35 + c46; 
    d2 = c2 + c23 + c34 + c45; 
    d3 = c23 + c34 + c45 + c56; 
    d4 = c1 + c22 + c33 + c44;
    d5 = c22 + c33 + c44 + c55;
    d6 = c33 + c44 + c55 + c66;
    d8 = c21 + c32 + c43 + c54;
    d9 = c32 + c43 + c54 + c65;
    d10 = c43 + c54 + c65+ c76;
    d11 = c31 +c42 +c53 + c64;
    d12 = c42 +c53 + c64 +c75;
    d13 = c41 + c52 + c63 + c74;
        
    d14= c73 + c64 + c55 + c46
    d15= c72 + c63 + c54 + c45
    d16= c63 + c54 + c45 + c36
    d17= c72 + c63 + c54 + c45
    d18= c71 + c62 + c53 + c44
    d19= c62 + c53 + c44 + c35 
    d20= c53 + c44 + c35 + c26
    d21= c61 + c52 + c43 + c34
    d22= c52 + c43 + c34 + c23
    d23= c41 + c32 + c23 + c4
    d24= c5 + c24 + c33 + c42 
    d25= c24 + c33 + c42 + c51
    d26= c6 + c25 + c34 + c43


    if( d26 == suma ||d25 == suma ||d24 == suma ||d23 == suma ||d22 == suma ||d21 == suma ||d20 == suma ||d19 == suma ||d18 == suma ||d17 == suma ||d14 == suma ||d15 == suma || d16 == suma || d1 == suma || d2 == suma || d3 == suma || d4 == suma || d5 == suma || d6== suma || d8== suma ||d9 ==suma|| d10 == suma || d11 == suma|| d12 == suma || d13 == suma ||d14 == suma  ){
        ganador()
    }
    //Resultados del jueo en horizontal
    h11 = c1 + c21 + c31 + c41; h21 = c2 + c22+ c32 + c42;h31 = c3 + c23+ c33 + c43;h41 = c4 + c24+ c34 + c44;h51 = c5 + c25+ c35 + c45;
    h12 = c21 + c31 + c41 + c51; h22 = c22 + c32 + c42 + c52;h32 = c23+ c33 + c43 +c53;h42 = c24+ c34 + c44 + c54;h52 = c25+ c35 + c45 + c55;
    h13 = c31 + c41 + c51 + c61; h23 = c32 + c42 + c52; + c62;h33 = c33 + c43 + c53 + c63;h43 = c34 + c44 + c54 + c64;h53 = c35 + c45 + c55 + c65;
    h14 =  c41 + c51 + c61 + c71; h24 = c42 + c52; + c62 + c72;h34 = c43 + c53 + c63+ c73;h44 = c44 + c54 + c64 + c74;h54 = c45 + c55 + c65 + c75;
    h61 = c6 + c26 + c36 + c46;
    h62 = c26 + c36 + c46 + c56;
    h63 = c36 + c46 + c56 + c66;
    h64 = c46 + c56 + c66 + c76;
        //Ganador horizontal
        if(h11 == suma || h12 == suma || h13 == suma || h14 == suma){
            ganador()
        }
        if(h21 == suma || h22 == suma || h23 == suma || h24 == suma){
            ganador() 
        }
        if(h31 == suma || h32 == suma || h33 == suma || h34 == suma){
            ganador()
        }
        if(h41 == suma || h42 == suma || h43 == suma || h44 == suma){
            ganador()
        }
        if(h51 == suma || h52 == suma || h53 == suma || h54 == suma){
            ganador()
        }
        if(h61 == suma || h62 == suma || h63 == suma || h64 == suma){
            ganador()
        }
         //Resultados del jeugo en vertical
    r11 = c1 + c2 + c3 + c4;  r21 = c21 + c22 + c23 + c24; r31 = c31 + c32 + c33 + c34; r41 = c41 + c42 + c43 + c44;
    r12 = c2 + c3 + c4 + c5;  r22 = c22 + c23 + c24 + c25; r32 = c32 + c33 + c34 + c35; r42 = c42 + c43 + c44 + c45;
    r13 = c3 + c4 + c5 + c6;  r23 = c23 + c24 + c25 + c26; r33 = c33 + c34 + c35 + c36; r43 = c43 + c44 + c45 + c46;
    r51 = c51 + c52 + c53 + c54;  r61 = c61 + c62 + c63 + c64;  r71 = c71 + c72 + c73 + c74;
    r52 = c52 + c53 + c54 + c55;  r62 = c62 + c63 + c64 + c65;  r72 = c72 + c73 + c74 + c75;
    r53 = c53 + c54 + c55 + c56;  r63 = c63 + c64 + c65 + c66;  r73 = c73 + c74 + c75 + c76;
        // Vertical
        if( r11 == suma || r12 == suma || r13 == suma){
            ganador() 
        }  
        if( r21 == suma || r22 == suma || r23 == suma){
            ganador()       
        }
        if( r31 == suma || r32 == suma || r33 == suma){
            ganador()    
        }   
        if( r41 == suma || r42 == suma || r43 == suma){
            ganador()    
        }
        if( r51 == suma || r52 == suma || r53 == suma){
            ganador()    
        }
        if( r61 == suma || r62 == suma || r63 == suma){
            ganador()    
        }
        if( r71 == suma || r72 == suma || r73 == suma){
            ganador()    
        }
    }
}
