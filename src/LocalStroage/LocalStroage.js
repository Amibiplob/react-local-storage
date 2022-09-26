const addToLocal= (id) =>{
    localStorage.setItem(id, 1);
    
  //  localStorage.setItem('name',id)
}
const removeFromLocal = (id) =>{
    localStorage.removeItem(id, 1)
}
export {
    addToLocal,
    removeFromLocal
}