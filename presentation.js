import reveal from 'reveal.js'
import marked from 'reveal.js/plugin/markdown/marked.js'
import markdown from 'reveal.js/plugin/markdown/markdown.js'

System.import('reveal.js/css/reveal.css!').then(function(){
    System.import('/styles/style.less!');
});
System.import('prism/themes/prism.css!').then(function(){
    System.import('prism/themes/prism-coy.css!');
    System.import('prism/plugins/line-numbers/prism-line-numbers.css!');
});

System.import('prism').then(() => {
    System.import('prism/plugins/line-numbers/prism-line-numbers.js').then(() => {
        Prism.highlightAll();
    });
});

markdown.initialize();
reveal.initialize({});