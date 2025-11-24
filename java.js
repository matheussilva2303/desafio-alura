function calcularPontos() {
    
    const P_FICCAO = 10;
    const P_NAO_FICCAO = 8;
    const P_INFANTIL = 6;

    
    let ficcao = Number(document.getElementById("ficcao").value);
    let naoFiccao = Number(document.getElementById("naoFiccao").value);
    let infantil = Number(document.getElementById("infantil").value);

    if (isNaN(ficcao) || isNaN(naoFiccao) || isNaN(infantil)) {
        document.getElementById("resultado").textContent = "Preencha todos os campos corretamente!";
        return;
    }

    
    let pontosAna = (ficcao * P_FICCAO) + (naoFiccao * P_NAO_FICCAO) + (infantil * P_INFANTIL);

    
    let pontosRodrigo = 10 + 8 + 6; 

    let total = pontosAna + pontosRodrigo;

    document.getElementById("resultado").innerHTML =
        `Pontos de Ana: <strong>${pontosAna}</strong><br>
         Pontos de Rodrigo: <strong>${pontosRodrigo}</strong><br>
         <br><strong>Total acumulado: ${total}</strong>`;
}
