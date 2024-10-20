function desc(clave, texto){

    if(clave === " " || texto === " "){
        return "Introduzca los datos solicitados";
    }

    let it = texto.split(' ');
    let ac = clave.split('');
    let at = [];
    let alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
               'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let an = [];

    let lc = ac.length;
    
    let pt = it.length;
    let la = alf.length;

    let o ;
    let u;
    let p;
    let p1;

    for (let i = 0; i < pt; i++){
        let sopas = it[i];
        at=sopas.split('');
        let lt = at.length;
        for (let j = 0; j < lt; j++){
            o = at[j].toLowerCase(); 
            u = ac[j % lc].toLowerCase();
            
            if( isNaN(u)){

            }
            else{
                return "No puede tener números la clave";
            }

            p = alf.indexOf(o);  
            p1 = alf.indexOf(u); 

            let om= p-p1;
            if (p === -1 ) {
                an.push(at[j]);
            } else {
                
                let om = (p - p1 + la) % la;  
                an.push(alf[om]); }
        }
        an.push(' '); 
    }

    

    let rre = an.join('');  
    return rre;
}
module.exports = desc;