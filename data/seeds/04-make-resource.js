exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {resource_id: 1, resource_name: 'foo', resource_description: null},
          {resource_id: 2, resource_name: 'Web Components standard', resource_description: 'to better structure your web applications'},
          {resource_id: 3, resource_name: 'C++ like programming language', resource_description: null},
          {resource_id: 4, resource_name: 'OOP programming language', resource_description: null},
          {resource_id: 5, resource_name: 'Hardware workshop', resource_description: null}
        ]);
      });
  };