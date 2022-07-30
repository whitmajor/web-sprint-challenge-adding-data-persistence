exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {project_id: 1, project_name: 'bar', project_description: null, project_completed: false},
          {project_id: 2, project_name: 'Ion', project_description: 'A portable suite of libraries and tools', project_completed: true},
          {project_id: 3, project_name: 'Polymer', project_description: 'A lightweight library', project_completed: true},
          {project_id: 4, project_name: 'GO++', project_description: 'Open source project', project_completed: false},
          {project_id: 5, project_name: 'Python', project_description: 'Open source project', project_completed: true}
        ]);
      });
  };

  