const plugin = function updateOnPlugin (schema, options){
    // Add new property to Schema
    schema.add({ updatedOn: Date});
    // Pre Hook
    schema.pre('save', function(next) {
        this.updatedOn = new Date;
        next();
    });

    if(options && options.index){
        schema.path('updatedOn').index(options.index);
    }
}
export default plugin;