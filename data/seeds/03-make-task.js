exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {task_id: 1, task_description: 'baz', task_notes: null, task_completed: false, project_id: 1},
          {task_id: 2, task_description: 'hardware', task_notes: 'Open source project', task_completed: true, project_id: 2},
          {task_id: 3, task_description: 'OOP library', task_notes: 'OOP', task_completed: false, project_id: 3},
          {task_id: 4, task_description: 'Package', task_notes: 'OOP', task_completed: false, project_id: 3},
          {task_id: 5, task_description: 'Module', task_notes: 'OOP', task_completed: false, project_id: 4}
        ]);
      });
  };