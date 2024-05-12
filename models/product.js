const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

module.exports = class product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl; 
        this.description = description;
        this.price = price;
    };

    save() {
        const p = path.join(rootDir, 'data', 'products.json');
        let products = []
        // fs.readFile(p, 'utf8', (err, data) => {
        //     // let products = [];
        //     // if (!err) {
        //     //     products = JSON.parse(data);
        //     // }
        //     // products.push(this);
        //     // fs.writeFile(p, JSON.stringify(products), err => {
        //     //     if (err) throw err;
        //     // })

        // })
        fs.readFile(p, 'utf8', (err, data) => {
            if (err || data.length < 3) {
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            } else {
                products = JSON.parse(data);
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }

        })
    };

    static fetchAll(cb) {
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (err, data) => {
            if (err) {
                return cb([]);
            } else {  
                cb(JSON.parse(data));
            }
        })
    }
}

