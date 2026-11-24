const product = {
    size: {
        width : 10,
        height : 30,
    },
    items : ["doll", "robot"],
};

const {
    size:{width:w, height:h}, 
    items: [item1, item2]
} = product;

console.log(w);
console.log(h);
console.log(item1);
console.log(item2);

const {size} = product;

console.log(size);