var validator = require('validator');
const readXlsxFile = require('read-excel-file/node')


readXlsxFile('.git/.gitignore/excel/Alunos.xlsx').then((rows) => {
    for (let index = 1; index < 11; index++) {
        if((rows[index][0] != null) && (validator.isEmail(rows[index][1]) === true) && ((rows[index][2]) > 0) && (validator.isAlphanumeric(rows[index][3]) === true)){ 
            console.log("Nome: " ,rows[index][0], "\nEmail: " ,rows[index][1], "\nIdade: " ,rows[index][2], "\nMatrícula: " ,rows[index][3])
        }
    }
})
