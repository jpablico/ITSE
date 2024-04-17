$(document).ready(function() {
    function filterOwls() {
        var searchValue = $('#searchInput').val().toLowerCase();
        $("#owlsList tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
        });
    }

    // Trigger filter function on button click
    $('#searchButton').click(filterOwls);

    // Trigger filter function on keyup
    $('#searchInput').keyup(filterOwls);
});
