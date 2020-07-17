
exports.up = async function(knex) {
  await knex.schema.createTable("hobbits", (tbl) => {
      tbl.increments()
      tbl.text("name").notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("hobbits")
};
