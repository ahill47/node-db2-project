//changing schema always put async 
//use altertable command
exports.up = async function(knex) {
    await knex.schema.alterTable('cars', (table)=>{
        table.boolean('automaticTransmission').defaultTo(true)
    })
};
// use table.dropcoloumn
exports.down = async function(knex) {
    await knex.schema.alterTable('cars', (table) =>{
        table.dropColumn('automaticTransmission')
    })
};
