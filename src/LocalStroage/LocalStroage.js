const addToLocal = (props) => {
    // console.log(props)
    // localStorage.setItem("user", JSON.stringify([props]));
    let preStorage = localStorage.getItem("user");
    let oldStorage = JSON.parse(preStorage);
    // console.log(...oldStorage ,props)
    if (oldStorage) {
        localStorage.setItem("user", JSON.stringify([...oldStorage, props]));
    }
    else {
        localStorage.setItem("user", JSON.stringify([props]));
    }
    window.location.reload();
}
const removeFromLocal = (props) => {
    localStorage.removeItem(props ,1)
}
export {
    addToLocal,
    removeFromLocal
}