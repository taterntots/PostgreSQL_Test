exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pokemon').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        { id: 1, name: 'bulbasaur', type: 'grass' },
        { id: 2, name: 'charmander', type: 'fire' },
        { id: 3, name: 'squirtle', type: 'water' }
      ])
    })
}