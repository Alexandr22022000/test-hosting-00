const express = require('express'),
    fs = require('fs'),
    sites = require('./dust/sites.json'),
    app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/store'));

app.get('/', (req, res) => {
    let links = '';
    for (let key in sites) {
        links = links + `
            <a class="link" href="${sites[key].folder}">
                <div class="link__container">
                    <h3 class="link__title">${sites[key].title}</h3>
                    <p class="link__description">${sites[key].description}</p>
                </div>
            </a>
        `;
    }

    fs.readFile('dust/index.html', 'utf-8', (error, data) => {
        if (error) return console.log(error);

        data = data.replace(/{{([^{}]*)}}/g, () => {
            return links;
        });

        res.send(data);
    });
});

for (let key in sites) {
    app.get('/' + sites[key].folder + "/*", (req, res) => {
        fs.readFile(`store/${sites[key].folder}/index.html`, 'utf-8', (error, data) => {
            if (error) return console.log(error);
            res.send(data);
        });
    });
}

app.use(express.static(__dirname + '/dust'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


