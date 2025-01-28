// localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website",
        "taskDescription": "Revamp the homepage design.",
        "taskDate": "2024-10-12",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize images",
        "taskDescription": "Compress all high-resolution images.",
        "taskDate": "2024-10-15",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup Analytics",
        "taskDescription": "Integrate Google Analytics on the website.",
        "taskDate": "2024-10-10",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee@2.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Blog",
        "taskDescription": "Create a blog post about the latest trends.",
        "taskDate": "2024-10-13",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social Media Post",
        "taskDescription": "Design and schedule posts for Instagram.",
        "taskDate": "2024-10-11",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Email Campaign",
        "taskDescription": "Send the monthly newsletter to subscribers.",
        "taskDate": "2024-10-09",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Contact the client for feedback.",
        "taskDate": "2024-10-08",
        "category": "Client Relations"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vikram",
    "email": "vikram@3.com",
    "password": "321",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 3,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Create backups of the main database.",
        "taskDate": "2024-10-16",
        "category": "IT Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "System Update",
        "taskDescription": "Update software across all workstations.",
        "taskDate": "2024-10-17",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Network Setup",
        "taskDescription": "Setup a secure Wi-Fi network.",
        "taskDate": "2024-10-14",
        "category": "Infrastructure"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Conduct routine maintenance on servers.",
        "taskDate": "2024-10-13",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Update the technical documentation.",
        "taskDate": "2024-10-11",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "sneha@4.com",
    "password": "456",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Organize a weekly team meeting.",
        "taskDate": "2024-10-18",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Project Proposal",
        "taskDescription": "Draft a proposal for the upcoming project.",
        "taskDate": "2024-10-19",
        "category": "Planning"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Workshop Plan",
        "taskDescription": "Prepare a detailed plan for the client workshop.",
        "taskDate": "2024-10-20",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Feedback Session",
        "taskDescription": "Conduct a feedback session for the team.",
        "taskDate": "2024-10-12",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Presentation",
        "taskDescription": "Prepare slides for the client presentation.",
        "taskDate": "2024-10-10",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Aditi",
    "email": "aditi@5.com",
    "password": "789",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Analyze and improve website SEO.",
        "taskDate": "2024-10-17",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Research competitor strategies.",
        "taskDate": "2024-10-18",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Market Survey",
        "taskDescription": "Conduct a survey for target audience insights.",
        "taskDate": "2024-10-10",
        "category": "Survey"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Ad Campaign",
        "taskDescription": "Launch and monitor a new ad campaign.",
        "taskDate": "2024-10-14",
        "category": "Advertising"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Budget Review",
        "taskDescription": "Review and adjust the marketing budget.",
        "taskDate": "2024-10-12",
        "category": "Finance"
      }
    ]
  }
];

  
    const admin = {
        "admin": {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      }
      
  
  
 export const setLocalStorage = () => {
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin));
}


export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees'));
const admin = JSON.parse(localStorage.getItem('admin'));

// console.log(employees ,admin);
return {employees,admin}
}

