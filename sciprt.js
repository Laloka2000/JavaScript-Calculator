const szamologep = {
    kijelzettErtek: 0,
    elsoMuvelet: null,
    masodikErtekreVar: false,
    operator: null,
};


function bevittSzam(Szam){
    const {kijelzettErtek,masodikErtekreVar} = szamologep;


    if(masodikErtekreVar === true)
    {
        szamologep.kijelzettErtek = Szam;
        szamologep.masodikErtekreVar = false;
    } 
    else 
    {
        szamologep.kijelzettErtek = kijelzettErtek === "0" ? Szam : kijelzettErtek + Szam;
    }
}


function inputDecimal(pont){
    if(szamologep.masodikErtekreVar === true){
        szamologep.kijelzettErtek = "0";
        szamologep.masodikErtekreVar = false;
        return;
    }

    if(!szamologep.kijelzettErtek.includes(pont)){
        szamologep.kijelzettErtek += pont;
    }
}


function kezeloMuvelet(kovetkezoMuvelet){
    const {elsoMuvelet, kijelzettErtek, operator} = szamologep;
    const bevitErtek = parseFloat(kijelzettErtek);

    if(operator && szamologep.masodikErtekreVar){
        szamologep.operator = kovetkezoMuvelet;
        return;
    }

    if(elsoMuvelet == null && !isNaN(bevitErtek)){
        szamologep.elsoMuvelet = bevitErtek;
    }
    else if(operator){
        const eredmeny = szamologep(elsoMuvelet,bevitErtek,operator);
        szamologep.kijelzettErtek = `${parseFloat(eredmeny.toFixed(7))}`;
        szamologep.elsoMuvelet = result;
    }

    szamologep.masodikErtekreVar = true;
    szamologep.operator = kovetkezoMuvelet;
}


function szamol(elsoMuvelet, masodikMuvelet, muvelet){
    if(operator === '+'){
        return elsoMuvelet + masodikMuvelet;
    }
    else if (operator === '-'){
        return elsoMuvelet - masodikMuvelet;
    }
    else if (operator === '*'){
        return elsoMuvelet * masodikMuvelet;
    }
    else if(operator === '/'){
        return elsoMuvelet / masodikMuvelet;
    }

    return masodikMuvelet;
}

function visszaAllit(){
    szamologep.kijelzettErtek = '0';
    szamologep.elsoMuvelet = null;
    szamologep.masodikErtekreVar = false;
    szamologep.operator = null;
}

function kijelzoFrissit(){
    
}