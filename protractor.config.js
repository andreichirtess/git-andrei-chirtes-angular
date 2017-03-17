var HierarchicalHTMLReporter = require('protractor-html-hierarchical-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--test-type", "--no-sandbox"]
        }
	},

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine2',

	// Spec patterns are relative to this config file
	specs: ['./e2e/**/*.e2e-spec.js'],

	baseUrl: 'http://localhost:8080',

	// For angular tests
	useAllAngular2AppRoots: true,

    // HierarchicalHTMLReporter
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'e2e/report/',
            filePrefix: 'xmloutput'
        }));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'e2e/report/'
            })
        );
    }
};
