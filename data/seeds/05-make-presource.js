exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('project_resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('project_resources').insert([
          {project_resource_id: 1, project_id: 1, resource_id: 1},
          {project_resource_id: 2, project_id: 2, resource_id: 2},
          {project_resource_id: 3, project_id: 2, resource_id: 3},
          {project_resource_id: 4, project_id: 2, resource_id: 4},
          {project_resource_id: 5, project_id: 3, resource_id: 3},
          {project_resource_id: 6, project_id: 3, resource_id: 4},
          {project_resource_id: 7, project_id: 4, resource_id: 2},
          {project_resource_id: 8, project_id: 4, resource_id: 4},
          {project_resource_id: 9, project_id: 2, resource_id: 5}
        ]);
      });
  };