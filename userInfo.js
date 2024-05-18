function createProfiles( names, modifiedNames){
    return names.map((name, index) =>({
        originalName: name,
        modifiedName: modifiedName[index],
        id: index + 1
}))
}
module.exports = { createUserProfiles};