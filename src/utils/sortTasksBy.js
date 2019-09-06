const sortTasksBy = (activeSortType, list = [], sortOptions = []) => {
    console.log(activeSortType);

    const listCopy = [...list]
    const sortFunction = sortOptions.filter(option => option.sortType === activeSortType).length === 1 ? sortOptions.filter(option => option.sortType === activeSortType)[0].callback : undefined

    if (sortFunction) {
        listCopy.sort(sortFunction)
    }
    return listCopy
}
export default sortTasksBy