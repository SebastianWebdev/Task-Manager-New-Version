const findTasksToRender = (list_id = "", tasks = [], stage) => {
    //tasks is a parameter that can take a  list of react components Tasks

    const tasksToRender = tasks.filter(e => list_id === e.props.task.list && stage === e.props.task.stage)
    return tasksToRender
}
export default findTasksToRender