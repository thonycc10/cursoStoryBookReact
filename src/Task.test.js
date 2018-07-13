import React from 'react';
import ReactDOM from 'react-dom';
import { withPinnedTasks } from "./components/TaskList.stories";
import TaskList from "./components/TaskList";

it('renders pinned tasks at the start of the list', () => {
    const div = document.createElement('div');
    const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
    ReactDOM.render(<TaskList tasks={withPinnedTasks} {...events} />, div);

    // Esperamos que la tarea titulada "Tarea 6 (anclada)" se ejecute primero, no al final.
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
});
