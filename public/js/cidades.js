let dropdownCidades = $('#cidades');

dropdownCidades.empty();

dropdownCidades.append('<option selected="true" disabled>Cidades</option>');
dropdownCidades.prop('selectedIndex', 0);

function cidades(estados) {
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + estados + '/municipios';

    // Populate dropdown with list of provinces
    $.getJSON(urlCidades, function(data) {
        $.each(data, function(key, entry) {
            dropdownCidades.append($('<option></option>').attr('value', entry.id).text(entry.nome));
        })
    });
}