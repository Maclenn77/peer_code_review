// File with CRUD methods
export function updateLs(thelist) {
  localStorage.setItem('TodoList', JSON.stringify(thelist));
}

class Task {
  constructor(description, thelist) {
    this.index = thelist.length + 1;
    this.description = description;
    this.completed = false;
    thelist = thelist.push(this);
    updateLs(thelist);
  }

  this.update = function(description, thelist) {
    this.description = description;
    updateLs(thelist);
  }

  this.removeTaskFrom = function(thelist) {
    const ind = this.index;
    const element = document.getElementById(ind.toString());
    element.remove();
    const index = ind - 1;
    thelist.forEach((task) => {
      if (task.index > ind) {
        const i = task.index.toString();
        task.index -= 1;
        const element = document.getElementById(i);
        element.id = task.index.toString();
      }
    });
    thelist.splice(index, 1);
    updateLs(thelist);
  }
}

export function removeAllFrom(thelist) {
  const tasksCompleted = thelist.filter((task) => (task.completed === true));

  tasksCompleted.forEach((task) => {
    task.removeTaskFrom(thelist);
  });
}

export { Task };