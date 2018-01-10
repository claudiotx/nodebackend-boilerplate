const plugin = function valueIndicatorPlugin (schema) {
    // Post Hook
    schema.post('find', function(results) {
        console.log('value indicator plugin running');
        results.forEach(function(element){
            if(element.estvalue > 100){
                element.description += ' ($)'
            }
        }, this);
    });
}

export default plugin;