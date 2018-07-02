export default(state=[], payload) => {
    switch(payload.type){
        case 'addTask': 
            return [...state, payload.task]
        case 'clear':
            return []
        case 'markAs':
            return [...
                state.map((content, i) => content.id === payload.task.id ? {...content, done: !content.done} : content)]
        case 'remove':
            return state.filter((content) => content.id !== payload.task.id)
        default:
            return state;
    }
}