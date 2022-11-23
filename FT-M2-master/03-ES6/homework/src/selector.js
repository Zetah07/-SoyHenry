var traverseDomAndCollectElements = function (matchFunc, startEl/*= document.body*/) {
  var resultSet = [];

  if (typeof startEl === 'undefined') {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
    if (matchFunc(startEl)) resultSet.push(startEl);

    for (let i = 0; i < startEl.children.length; i++){
      var child = traverseDomAndCollectElements(matchFunc, startEl.children[i]); //recursividad para recorrer todos los hijos
      resultSet = resultSet.concat(child);
    }
    return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // if(selector[0] === '#')return 'id';
  // if(selector[0] === '.')return 'class';
  // if(selector.indexOf('.') > 0)return 'tag.class';//si hay un punto y no es el primero
  // else return 'tag';
  return selector[0] === '#' ? 'id': selector[0] === '.' ? 'class' : selector.indexOf('.') > 0? 'tag.class': 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === 'id') {
    // matchFunction = function(element) {
    //   if (element ===selector) return true
    //   else return false}
    matchFunction = (element) => `#${element.id}` === selector ? true : false;

  } else if (selectorType === 'class') {
    matchFunction= (element) =>{
      for (let i = 0; i < element.classList.length; i++){
        if (`.${element.classList[i]}` === selector) return true;
      }
      return false;
    }

  } else if (selectorType === 'tag.class') {

    matchFunction = (element) =>{
      let [tag, clase] = selector.split('.');
      return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${clase}`)(element);
    };

  } else if (selectorType === 'tag') {

    matchFunction = (element) =>element.tagName.toLowerCase() === selector ? true : false;

  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

