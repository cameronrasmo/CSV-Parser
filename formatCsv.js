const rawData = [
    [
       "name",
       "email",
       "street",
       "city",
       "state",
       "zip"
    ],
    [
       "Aclymate Dev1",
       "devtest1@aclymate.com",
       // i'm assuming gaps in csv data mean empty string values. i'm providing N/A to the property if it is empty
       "",
       "Denver",
       "CO",
       "80206"
    ],
    [
       "Aclymate Dev2",
       "devtest2@aclymate.com",
       "1601 albion St.",
       "Denver",
       "CO",
       ""
    ],
]

const formatCsv = (data) => {
    const header = data[0];
    const values = data.slice(1);
    const formatted = [];

    for(let i = 0; i < values.length; i++){
        const obj = {};
        for(let j = 0; j < values[i].length; j++){
            obj[header[j]] = values[i][j] === "" ? "N/A" : values[i][j];
        }
        formatted.push(obj);
    }

    return formatted;
}

console.log(formatCsv(rawData));
