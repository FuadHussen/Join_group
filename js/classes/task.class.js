class Task {
    title;
    description;
    assignedContacts;
    date;
    priority;
    category;
    subtasks;
    state;
    uniqueIndex;

    constructor(title, description, assignedContacts, date, priority, category, subtasks) {
        this.title = title;
        this.description = description;
        this.assignedContacts = assignedContacts;
        this.date = date;
        this.priority = priority;
        this.category = category;
        this.subtasks = subtasks;
        this.state = 'todo'
        this.uniqueIndex = Math.floor(Math.random() * (1-100000)) + 100000;
    }
}