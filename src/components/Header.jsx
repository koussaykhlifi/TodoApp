export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  const isTaskPlural = todosLength != 1;
  const task0rTasks = isTaskPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {task0rTasks}.
      </h1>
    </header>
  );
}
