/* eslint-disable no-console */
/* eslint-disable import/default */


import webpack from 'webpack'; 
import webpackConfig from '../webpack.config.prod'; 
import colors from 'colors'; 

process.env.NODE_ENV = 'production';  //this assures the Babel dev config doesn't apply

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) =>{
    if(err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson(); 
    
    if(jsonStats.hasError) {
        return jsonStats.errors.map(error => console.log(error.red));
    } 

    if(jsonStats.hasWarnings) {
        console.log('Webpack has generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow)); 
    }

    console.log(`Webpack stats: ${stats}`);

    //if we got this far, the build succeeded
    console.log('Your app has been compiled in production mode and written to /dist'.green);

    return 0; 
});