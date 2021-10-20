/**
 * Custom angular webpack configuration
 */
 const nodeExternals = require('webpack-node-externals');

module.exports = (config, options) => {
    
    config.target = 'node';
    config.externals =  {
                          sqlite3: 'commonjs sqlite3' 
                        }

    if (options.fileReplacements) {
        for(let fileReplacement of options.fileReplacements) {
            if (fileReplacement.replace !== 'src/environments/environment.ts') {
                continue;
            }

            let fileReplacementParts = fileReplacement['with'].split('.');
            if (fileReplacementParts.length > 1 && ['web'].indexOf(fileReplacementParts[1]) >= 0) {
                config.target = 'web';
            }
            break;
        }
    }

    return config;
}
