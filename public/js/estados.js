let dropdown = $('#estados');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Estados</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

// Populate dropdown with list of provinces
$.getJSON(url, function(data) {
    $.each(data, function(key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.sigla).text(entry.nome));
    })
});
$("#estados").change(function() {
    var estadoSelecionado = $("select#estados option:selected").val();
    cidades(estadoSelecionado);

});