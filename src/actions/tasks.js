export const addTask = (task) => {
    return {
        type: "addTask",
        task
    }
};

export const markAs = (task) => {
    return {
        type: "markAs",
        task
    }
};