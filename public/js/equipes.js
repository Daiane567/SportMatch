$("#cdequipe").on('click', function() {
    console.log("chamando o post");
    var table = $('#table_id').DataTable();
    var dados = table.rows().data();
    var values = []
    for (var i = 0; i < dados.length; i++) {
        values.push(table.rows(i).data()[0][1]);
    }
    $.post("/cadastroEquipes", { 'equipes': values },
        function(data, status) {
            alert("Valores inseridos com sucesso!");
        });
});