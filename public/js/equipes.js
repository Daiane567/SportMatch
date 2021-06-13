$("#cdequipe").click(function() {
    $.post("/cadastroEquipes", {
            equipes: $('#table_id').DataTable()
        },
        function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});