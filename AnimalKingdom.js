// const animalHierarchy = [
//     {id: 'Animals', parent: null},
//     {id: 'Mammals', parent: 'Animals'},
//     {id: 'Dogs', parent:'Mammals' },
//     {id: 'Cats', parent:'Mammals' },
//     {id: 'Golden Retriever', parent: 'Dogs'},
//     {id: 'Husky', parent:'Dogs' },
//     {id: 'Bengal', parent:'Cats' }
// ]

// function traverse(animalHierarchy, parent) {
//     let node = {};

//     animalHierarchy.filter(item => item.parent === parent)
//                    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
//     return node;  
// }
// console.log(traverse(animalHierarchy, null));


// ==============================
const facebookHierarchy = [
    {id: 'Zuckerburg', parent: null},
    {id: 'Schroetfer', parent: 'Zuckerburg'},
    {id: 'Scharge', parent: 'Zuckerburg'},
    {id: 'Sandberg', parent: 'Zuckerburg'},
    {id: 'Bozzworth', parent:'Schroetfer' },
    {id: 'Zhao', parent: 'Schroetfer' },
    {id: 'Steve', parent: 'Bozzworth'},
    {id: 'Kyle', parent: 'Bozzworth'},
    {id: 'Andra', parent: 'Bozzworth'},
    {id: 'Husky', parent:'Zhao' },
    {id: 'Bengal', parent:'Zhao' },
    {id: 'Crazy Parrot', parent:'Zhao' }
]
function traverse(facebookHierarchy, parent) {
    let node = '';

    facebookHierarchy.filter(item => item.parent === parent)
        .forEach(item => {
            if (item.id) console.log(item.id);  
            traverse(facebookHierarchy, item.id); 
        }); 

    // return node;  
}
traverse(facebookHierarchy, null);
//SUPER CHILL