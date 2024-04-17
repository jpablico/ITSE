$(document).ready(function() {
    $('#searchButton').click(function() {
        var searchValue = $('#searchInput').val().toLowerCase();
        $("#landmarksList tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1)
        });
    });

    // Optionally, implement the keyup feature as follows:
    $('#searchInput').keyup(function() {
        var searchValue = $(this).val().toLowerCase();
        $("#landmarksList tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1)
        });
    });
});
