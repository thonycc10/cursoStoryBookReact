/*
*  Creando los state
* */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export function createTask(attrs) {
    return {
        id: Math.round(Math.random() * 1000000).toString(),
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: Date.now(),
        ...attrs,
    };
}

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

/*
*storiesOf() para registrar el componente.
* action() nos permite crear un callback que aparecerá en el panel actions de la UI de Storybook cuando es cliqueado.
*Como necesitamos pasarle el mismo conjunto de acciones a todas las permutaciones de nuestro componente, es conveniente agruparlas en una sola variable actions y utilizar {...actions},
* Para definir nuestras historias, llamamos a add() una vez para cada uno de nuestros estados del test para generar una historia.
* Al crear una historia utilizamos una función auxiliar (createTask()) para construir la forma de la task que el componente espera. Esto generalmente se modela a partir del aspecto de los datos verdaderos. Nuevamente, export-ando esta función nos permitirá reutilizarla en historias posteriores
*
* */
storiesOf('Task', module)
    .add('default', () => <Task task={createTask({ state: 'TASK_INBOX' })} {...actions} />)
    .add('pinned', () => <Task task={createTask({ state: 'TASK_PINNED' })} {...actions} />)
    .add('archived', () => <Task task={createTask({ state: 'TASK_ARCHIVED' })} {...actions} />);

