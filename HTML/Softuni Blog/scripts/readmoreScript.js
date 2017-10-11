//remove html method!!!
Element.prototype.remove = function() {

    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


let first_readmoreBtn =
    document.getElementById("first_readmoreBtn");

first_readmoreBtn.onclick = function () {

    var index_header = document.getElementById("index.header");
    var index_main = document.getElementById("index.main");

    //document.getElementById("index.header").remove();
    //document.getElementById("index.main").remove();


//Show viewpost1.html

        index_main.innerHTML = '<main>\n' +
            '\t<div class="container body-content">\n' +
            '\n' +
            '\t\t<div class="row">\n' +
            '\n' +
            '\t\t\t<div class="col-md-12">\n' +
            '\n' +
            '\t\t\t\t<article>\n' +
            '\n' +
            '\t\t\t\t\t<header>\n' +
            '\t\t\t\t\t\t<h1>Top 10 Programming Languages in 2017</h1>\n' +
            '\t\t\t\t\t</header>\n' +
            '\n' +
            '\t\t\t\t\t<p>\n' +
            '\t\t\t\t\t\t<small>Programming is something vast and rather individual as each\n' +
            '\t\t\t\t\t\tdeveloper chooses tools that are most convenient for them. However,\n' +
            '\t\t\t\t\t\tcertain languages, platforms and frameworks have claimed themselves as one o\n' +
            '\t\t\t\t\t\tf the easiest and most efficient to use. Thus we have collected for you top-10\n' +
            '\t\t\t\t\t\tprogramming\n' +
            '\t\t\t\t\t\t\tlanguages loved by developers nowadays. Which one is your favorite?</small>\n' +
            '\n' +
            '\n' +
            '\t\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t\t<h1><b>1. C#</b></h1>\n' +
            '\t\t\t\t\t\tC Sharp has seen an increase in popularity over the last year. I\n' +
            '\t\t\t\t\t\tt is an object-oriented and multi-paradigm language that encompasses man\n' +
            '\t\t\t\t\t\ty disciplines. C# was developed by Microsoft and is designated for the Common Language Infrastructure.\n' +
            '\t\t\t\t\t\tThough it is not so widespread as Java or Python, C# has its fans who appreciate the\n' +
            '\t\t\t\t\t\tlack of headers, macros and templates, presence of LINQ and anonymous types.\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>2. Python</b></h1>\n' +
            '\t\t\t\t\tPython is a dynamic and general-purpose language that emphasizes\n' +
            '\t\t\t\t\tcode readability and enables developers to use fewer lines of code (in co\n' +
            '\t\t\t\t\tmparison with Java or C++). It supports multiple programming paradigms and has a large standard library.\n' +
            '\t\t\t\t\tDevelopers love this language for clear syntax, good OOP support and great shortcuts.\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>3. Java</b></h1>\n' +
            '\t\t\t\t\tJava is one the leading choices among developers all over the world. This la\n' +
            '\t\t\t\t\tnguage is object-oriented and class-based and follow\n' +
            '\t\t\t\t\ts the “WORA” principle: write once, run anywhere.\n' +
            '\t\t\t\t\tPeople love Java for its concurrency (comparing it to be better than Python,\n' +
            '\t\t\t\t\tfor example), great variety of libraries and steadily good performance. Community is huge as we\n' +
            '\t\t\t\t\tll, meaning Java fans can always get a lot of support.\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>4. C++</b></h1>\n' +
            '\t\t\t\t\tThis language is compiled, imperative and program-oriented and allows low-level m\n' +
            '\t\t\t\t\temory manipulation. C++ influenced a number of o\n' +
            '\t\t\t\t\tther languages, such as C# or Java and is used for a variety of purposes.\n' +
            '\t\t\t\t\tIts key features that make it stand out are strong, static type system (making it possible\n' +
            '\t\t\t\t\tto catch more errors within a compile time), ability to use it in a few programming styles, good perf\n' +
            '\t\t\t\t\tormance and expressiveness.\n' +
            '\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>5. C</b></h1>\n' +
            '\t\t\t\t\tC is a general-purpose imperative language that supports structured prog\n' +
            '\t\t\t\t\tramming, recursion and lexical variable scope. It is designed to encourage cross-pl\n' +
            '\t\t\t\t\tatform programming and is available on many platforms.\n' +
            '\t\t\t\t\tThis language is valued for being clear, providing access to hardware and making it possible\n' +
            '\t\t\t\t\tto create tiny binaries.\n' +
            '\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>6. R</b></h1>\n' +
            '\t\t\t\t\tThis is an open source language for statistical computing and it\n' +
            '\t\t\t\t\tis very popular among data miners and statisticians. This language is a GNU package.\n' +
            '\t\t\t\t\tThe R pros include its package ecosystem and its vastness and all the charting benefits.\n' +
            '\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>7. JavaScript</b></h1>\n' +
            '\t\t\t\t\tS is an object-based and dynamic language and is one o\n' +
            '\t\t\t\t\tf the core technologies of WWW content production. Even though some peop\n' +
            '\t\t\t\t\tle tend to think Java and JS are the same (or at least, very similar) languages, Ja\n' +
            '\t\t\t\t\tvaScript was influenced mostly by Self and Scheme.\n' +
            '\t\t\t\t\tJavaScript is seeing a rise in popularity and is included in hottest web development\n' +
            '\t\t\t\t\ttrends for the year 2017.\n' +
            '\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>8. PHP</b></h1>\n' +
            '\t\t\t\t\tIt’s a server-side and general-p\n' +
            '\t\t\t\t\turpose language designed for web development. PHP is considered rat\n' +
            '\t\t\t\t\ther easy to learn and is often chosen by junior developers.\n' +
            '\t\t\t\t\tAs well developers love that it’s portable, has a lot of high-quality solutions fo\n' +
            '\t\t\t\t\tr an array of web problems and has a lot of frameworks.\n' +
            '\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>9. GO</b></h1>\n' +
            '\t\t\t\t\tGo was created at Google and is an open-source language. It’s c\n' +
            '\t\t\t\t\tompiled and has such features as garbage collection, memory safety and limited structural typing.\n' +
            '\t\t\t\t\tIt is really a good choice if you work with network applications and web se\n' +
            '\t\t\t\t\trvers. Go also consistently behaves across platforms, which is also a good feature.\n' +
            '\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t<h1><b>10. Swift</b></h1>\n' +
            '\t\t\t\t\tSwift is a multi-paradigm language developed\n' +
            '\t\t\t\t\tby Apple and is one of the top choices among iOS developers. It support\n' +
            '\t\t\t\t\ts such concepts as late binding, extensible programming and dynamic dispatch.\n' +
            '\t\t\t\t\tEven though Swift is a relatively new language, it also saw ri\n' +
            '\t\t\t\t\tse in popularity in 2017 and overall looks quite promising.\n' +
            '\t\t\t\t\t</p>\n' +
            '\n' +
            '\n' +
            '\n' +
            '\t\t\t\t\t<small class="author">\n' +
            '\t\t\t\t\t\tDashBouquet\n' +
            '\t\t\t\t\t</small>\n' +
            '\n' +
            '\t\t\t\t\t<footer>\n' +
            '\n' +
            '\t\t\t\t\t\t<div class="pull-right">\n' +
            '\n' +
            '\t\t\t\t\t\t\t<a href="index.html" id="first_post_backbtn" class="btn btn-default btn-xs">Back &raquo;</a>\n' +
            '\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\n' +
            '\t\t\t\t\t</footer>\n' +
            '\n' +
            '\t\t\t\t</article>\n' +
            '\n' +
            '\n' +
            '\t\t\t</div>\n' +
            '\n' +
            '\t\t</div>\n' +
            '\t</div>\n' +
            '</main>';


    if(Is_in_View === 1){
        index_main.innerHTML = '<main id="index.main">\n' +
            '\t<div class="container body-content">\n' +
            '\n' +
            '\t\t<div class="row">\n' +
            '\n' +
            '\t\t\t<div class="col-md-6">\n' +
            '\n' +
            '\t\t\t\t<article>\n' +
            '\n' +
            '\t\t\t\t\t<header>\n' +
            '\t\t\t\t\t\t<h3><b>Top 10 Programming Languages in 2017</b></h3>\n' +
            '\t\t\t\t\t</header>\n' +
            '\n' +
            '\t\t\t\t\t<p>\n' +
            '\t\t\t\t\t\tProgramming is something vast and rather individual as each\n' +
            '\t\t\t\t\t\tdeveloper chooses tools that are most convenient for them. However,\n' +
            '\t\t\t\t\t\tcertain languages, platforms and frameworks have claimed themselves as one o\n' +
            '\t\t\t\t\t\tf the easiest and most efficient to use. Thus we have collected for you top-10\n' +
            '\t\t\t\t\t\tprogramming\n' +
            '\t\t\t\t\t\tlanguages loved by developers nowadays. Which one is your favorite?\n' +
            '\t\t\t\t\t</p>\n' +
            '\n' +
            '\t\t\t\t\t<small class="author">\n' +
            '\t\t\t\t\t\tDashBouquet\n' +
            '\t\t\t\t\t</small>\n' +
            '\n' +
            '\t\t\t\t\t<footer>\n' +
            '\n' +
            '\t\t\t\t\t\t<div class="pull-right">\n' +
            '\n' +
            '\t\t\t\t\t\t\t<button id="first_readmoreBtn" class="btn btn-default btn-xs">Read more &raquo;</button>\n' +
            '\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\n' +
            '\t\t\t\t\t</footer>\n' +
            '\n' +
            '\t\t\t\t</article>\n' +
            '\n' +
            '\n' +
            '\t\t\t</div>\n' +
            '\n' +
            '\t\t\t<div class="col-md-6" id = "second_div">\n' +
            '\n' +
            '\t\t\t\t<article>\n' +
            '\n' +
            '\t\t\t\t\t<header>\n' +
            '\t\t\t\t\t\t<h3><b>How much programmers earn ? </b></h3>\n' +
            '\t\t\t\t\t</header>\n' +
            '\n' +
            '\t\t\t\t\t<p>\n' +
            '\t\t\t\t\t\tAbout $100,000 a year. That\'s th\n' +
            '\t\t\t\t\t\te answer if you have been programming for 4\n' +
            '\t\t\t\t\t\t+ years and work in a major tech hub like the Ba\n' +
            '\t\t\t\t\t\ty area or NYC. Of course your mileage WILL vary. Your\n' +
            '\t\t\t\t\t\tsalary is dependent on your skill level, your experience a\n' +
            '\t\t\t\t\t\tnd your negotiating power.\n' +
            '\t\t\t\t\t</p>\n' +
            '\n' +
            '\t\t\t\t\t<small class="author">\n' +
            '\t\t\t\t\t\tDev/Code/Hack\n' +
            '\t\t\t\t\t</small>\n' +
            '\n' +
            '\t\t\t\t\t<footer>\n' +
            '\n' +
            '\t\t\t\t\t\t<div class="pull-right">\n' +
            '\n' +
            '\t\t\t\t\t\t\t<a href="viewpost2.html" class="btn btn-default btn-xs">Read more &raquo;</a>\n' +
            '\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\n' +
            '\t\t\t\t\t</footer>\n' +
            '\n' +
            '\t\t\t\t</article>\n' +
            '\n' +
            '\n' +
            '\t\t\t</div>\n' +
            '\n' +
            '\t\t</div>\n' +
            '\t</div>\n' +
            '</main>';
        Is_in_View = 0;
    }




}









