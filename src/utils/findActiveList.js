const findList = (id = "", lists = [], temp_id = 0) => {

    const list = lists.filter((list) => id === list._id)
    const listByTemp_id = lists.filter(list => temp_id === list.temp_id)
    if (list.length) {
        return list[0]
    } else if (listByTemp_id.length) {
        return listByTemp_id[0]
    }
    return false

}
export default findList
const tempLists = [{ temp_id: 1256 }, { id: 'lala' }]
console.log(findList('55ffrrtt44', tempLists, 1256), "testFindLists");
