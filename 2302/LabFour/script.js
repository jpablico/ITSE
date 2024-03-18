document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const actionVerb = document.getElementById('actionVerb').value;
    const color = document.getElementById('color').value;
    const landmark = document.getElementById('landmark').value;
    
    const story = `While out walking by the ${landmark}, we saw ${name} in a ${color} car ${actionVerb} a tree.`;
    
    document.getElementById('story').textContent = story;
});
