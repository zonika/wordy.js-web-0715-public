'use strict';

function WordProblem(question){
  this.question = question.replace('What is ','').replace('?','').replace(/plus/g,'+').replace(/minus/g,'-').replace(/divided by/g,'/').replace(/multiplied by/g,'*');
}
WordProblem.prototype.answer = function () {
  var s = this.question.split(' ');
  if (!parseInt(s[0]) || s.length < 3) {
    throw new ArgumentError();
  }else{
    if (s.length == 3){
      return eval(this.question);
    }else{
      var p1 = s.slice(0,3).join('');
      var p2 = s.slice(3,5).join('');
      var a1 = eval(p1);
      if(p2[0]== '-'&& p2[1]== '-'){
        return a1-parseInt(p2.slice(1,3))
      }else{
        return eval(a1+p2);
      }
    }
    // return eval(this.question);
  }
};
function ArgumentError(){}
