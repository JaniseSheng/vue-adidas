const Storage = {}


Storage.get = function (name) {
    return localStorage.getItem(name)
}
Storage.remove = function (name) {
    localStorage.removeItem(name)
}

Storage.set = function (name, val) {
    localStorage.setItem(name, val)
}

Storage.add = function (name, addVal) {
    let oldVal = Storage.get(name)
    let newVal = oldVal.concat(addVal)
    Storage.set(name, newVal)
}

Storage.getInfo = function () {
  return this.get('userInfo')
}
export default Storage
