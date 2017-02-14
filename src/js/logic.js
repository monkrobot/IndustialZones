//var classesHideElement = 'hide-element-sm hide-element-xs hide-element-lg hide-element-md';
//
//var hideElement = function (element){
//    element.addClass(classesHideElement);
//};
//
//var showElement = function (element){
//    element.removeClass(classesHideElement);
//};
//
//var pasteData = function (inputElement, outputElement){
//    var content = inputElement.html();
//    outputElement.html(content);
//};
//
//
//
//
//var contentPeople = function(){
//    var idContentPeople = $('#contentPeople');
//    var wrapperIdContentPeople = $("#wrapper-contentPeople")
//    var body = $('body');
//
//    $('.itemPeople').click(function() {
//        body.css("overflow", "hidden");
//        var content = $(this).children('.contentPeople').html();
//        idContentPeople.html(content);
//        if(wrapperIdContentPeople.hasClass("hide-element-sm" || "hide-element-xs" || "hide-element-lg" || "hide-element-md")){
//
//            wrapperIdContentPeople.removeClass(classesHideElement);
//        }
//    });
//
//    var peopleButtonClose = $('#peopleButtonClose');
//
//    peopleButtonClose.click(function(){
//        hideElement(wrapperIdContentPeople);
//        body.css("overflow", "auto");
//    });
//
//    wrapperIdContentPeople.click(function (event) {
//        if(event.target.id === 'wrapper-contentPeople'){
//            hideElement(wrapperIdContentPeople);
//            body.css("overflow", "auto");
//        }
//
//    });
//
//};