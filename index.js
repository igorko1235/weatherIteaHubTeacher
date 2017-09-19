'use strict';
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
var readJson = require('read-package-json');
var registryUrl = require('registry-url');
var Promise = require('pinkie-promise');
var got = require('got');

function handleData(data) {
  var name 		= '';
  var version 	= '';
  var description = '';
  var license 	= '';
  var homepage 	= '';
  var authorName = '';

  var dataParsed = JSON.parse(data.body);

  name 		= dataParsed.name;
  version 	= dataParsed[ 'dist-tags' ].latest;
  description = dataParsed.description;
  license 	= dataParsed.license;

  if(dataParsed.homepage !== undefined){
    homepage 	= dataParsed.homepage;
  }

  if(dataParsed.author !== undefined){
    authorName = dataParsed.author.name;
  }
  else{
    if(dataParsed.maintainers !== undefined){
      for (var i in dataParsed.maintainers) {
        var maintainer = dataParsed.maintainers[i];
        if(authorName === ''){
          authorName = maintainer.name;
        }
        else{
          authorName = authorName + ', ' + maintainer.name;
        }
      }
    }
  }
  var result = {
    name        : name,
    version			: version,
    //description	: description,
    license			: license,
    //homepage		: homepage,
    //author			: authorName
  };
  console.log(result);
  return result;
}

function handleError(err) {
  if (err.statusCode === 404) {
    err.message = 'Package doesn\'t exist';
  }
  throw err;
}

function getDataAboutPackage(name) {
  if (typeof name !== 'string') {
    return Promise.reject(new Error('package name required'));
  }
  got(registryUrl + name).then(handleData)
    .catch(handleError);
}
// readJson(filename, [logFunction=noop], [strict=false], cb)
readJson('./package.json', console.error, false, function (er, data) {
  if (er) {
    console.error("There was an error reading the file");
    return;
  }
  for (var dep in  data.dependencies) {
    console.log(dep);
      getDataAboutPackage(dep);
  }
});

var server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
