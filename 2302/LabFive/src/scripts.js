$(document).ready(function() {
    function filterOwls() {
        var searchValue = $('#searchInput').val().toLowerCase();
        $("#owlsList tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
        });
    }
    $('#searchButton').click(filterOwls);
    $('#searchInput').keyup(filterOwls);
});
