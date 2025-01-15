const Employees = [
  {
      "id": "E001",
      "email": "john@me.in",
      "name": "John",
      "password": "123",
      "tasks": [
          {
              "task_id": "T001",
              "category": "Development",
              "date": "2024-10-10",
              "title": "Implement Login Feature",
              "description": "Create a login module for the user interface",
              "status": {
                  "active": true,
                  "completed": false,
                  "failed": false,
                  "new_task": false
              }
          },
          {
              "task_id": "T002",
              "category": "Testing",
              "date": "2024-10-12",
              "title": "User Interface Testing",
              "description": "Perform UI testing on the main dashboard",
              "status": {
                  "active": false,
                  "completed": true,
                  "failed": false,
                  "new_task": false
              }
          }
      ],
      "taskCounts": {
          "activeTask": 1,
          "completedTask": 1,
          "failedTask": 0,
          "newTask": 0
      }
  },
  {
      "id": "E002",
      "email": "2@emp.in",
      "name": "Jane",
      "password": "123",
      "tasks": [
          {
              "task_id": "T003",
              "category": "Design",
              "date": "2024-10-11",
              "title": "Landing Page Design",
              "description": "Design the main landing page",
              "status": {
                  "active": true,
                  "completed": false,
                  "failed": false,
                  "new_task": false
              }
          },
          {
              "task_id": "T004",
              "category": "Development",
              "date": "2024-10-14",
              "title": "API Integration",
              "description": "Integrate backend APIs with frontend",
              "status": {
                  "active": false,
                  "completed": true,
                  "failed": false,
                  "new_task": false
              }
          }
      ],
      "taskCounts": {
          "activeTask": 1,
          "completedTask": 1,
          "failedTask": 0,
          "newTask": 0
      }
  },
  {
      "id": "E003",
      "email": "3@emp.in",
      "name": "Will",
      "password": "123",
      "tasks": [
          {
              "task_id": "T005",
              "category": "Maintenance",
              "date": "2024-10-13",
              "title": "Database Cleanup",
              "description": "Cleanup old data from database",
              "status": {
                  "active": false,
                  "completed": true,
                  "failed": false,
                  "new_task": false
              }
          },
          {
              "task_id": "T006",
              "category": "Testing",
              "date": "2024-10-15",
              "title": "Regression Testing",
              "description": "Conduct regression tests on all modules",
              "status": {
                  "active": true,
                  "completed": false,
                  "failed": false,
                  "new_task": false
              }
          }
      ],
      "taskCounts": {
          "activeTask": 1,
          "completedTask": 1,
          "failedTask": 0,
          "newTask": 0
      }
  },
  {
      "id": "E004",
      "email": "4@emp.in",
      "name": "Mike",
      "password": "123",
      "tasks": [
          {
              "task_id": "T007",
              "category": "Development",
              "date": "2024-10-12",
              "title": "Bug Fixing",
              "description": "Resolve critical bugs reported in the bug tracker",
              "status": {
                  "active": true,
                  "completed": false,
                  "failed": false,
                  "new_task": false
              }
          },
          {
              "task_id": "T008",
              "category": "Testing",
              "date": "2024-10-16",
              "title": "System Testing",
              "description": "Run system tests for the latest build",
              "status": {
                  "active": false,
                  "completed": true,
                  "failed": false,
                  "new_task": false
              }
          }
      ],
      "taskCounts": {
          "activeTask": 1,
          "completedTask": 1,
          "failedTask": 0,
          "newTask": 0
      }
  },
  {
      "id": "E005",
      "email": "5@emp.in",
      "name": "Lucy",
      "password": "123",
      "tasks": [
          {
              "task_id": "T009",
              "category": "Documentation",
              "date": "2024-10-10",
              "title": "Create User Guide",
              "description": "Draft a user guide for the new release",
              "status": {
                  "active": true,
                  "completed": false,
                  "failed": false,
                  "new_task": false
              }
          },
          {
              "task_id": "T010",
              "category": "Design",
              "date": "2024-10-13",
              "title": "UI Mockup",
              "description": "Create a UI mockup for the admin dashboard",
              "status": {
                  "active": false,
                  "completed": true,
                  "failed": false,
                  "new_task": false
              }
          }
      ],
      "taskCounts": {
          "activeTask": 1,
          "completedTask": 1,
          "failedTask": 0,
          "newTask": 0
      }
  }
];

const Admin = [
  {
      "id": "A001",
      "email": "admin@me.in",
      "password": "123",
      "name" : 'admin'
  }
];



 export const setLocalStorage = ()=>{
    localStorage.setItem('Employees', JSON.stringify(Employees));
    localStorage.setItem('Admin', JSON.stringify(Admin));
 }

 export const getLocalStorage = ()=>{
   const employees =  JSON.parse(localStorage.getItem('Employees'));
   const admin = JSON.parse(localStorage.getItem('Admin'));
   return{employees, admin};
 }


