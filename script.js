let addTodo=()=> {
    const input = document.getElementById('todo-input');
    const value = input.value.trim();
    if (value === '') return;

    const list = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    listItem.textContent = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = ()=> {
        list.removeChild(listItem);
    };

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    input.value = '';
}
