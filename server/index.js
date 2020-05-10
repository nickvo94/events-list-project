// ------------- use server side code from https://www.digitalocean.com/community/tutorials/react-server-side-rendering
import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import cors from 'cors';
import request from 'request'

import App from '../src/js/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));
app.use(cors())

app.get('/events/', (req, res) => {
    console.log('events links.....')
    var resBody
    
    request(
      { url: 'http://open-api.myhelsinki.fi/v1/events/' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
        //console.log(response);
        //console.log(body)
  
        resBody =  JSON.parse(body);
        res.json(resBody)         
      }
    )
       
    //res.send('hello world')    
    //console.log(res);
  });

app.get('/*', (req, res) => {
  
  console.log('----/app-----');
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});