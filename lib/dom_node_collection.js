class DomSawyer {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  addClass(newClass) {
    this.each(el => el.classList.add(newClass));
  }

  append(arg) {
    if (typeof arg === "string") {
      this.each((el) => ( el.innerHTML += arg ));
    } else if (typeof arg === "object") {
      this.each((el) => (
        arg.each((argument) => ( el.innerHTML += argument.outerHTML ) )
      ));
    }
  }

  attr(key, val) {
    if (typeof val === "string") {
      this.each( el => el.setAttribute(key, val) );
    } else {
      return this.htmlElements[0].getAttribute(key);
    }
  }

  children() {
    let children = [];
    this.each(el => {
      const childElementList = el.children;
      children = children.concat(Array.from(childElementList));
    });
    return new DomSawyer(children);
  }

  each(callback) {
    this.htmlElements.forEach(callback);
  }

  empty() {
    this.each((el) => (el.innerHTML = ""));
  }

  find(selector) {
    let foundElements = [];
    this.each(el => {
      const elList = el.querySelectorAll(selector);
      foundElements = foundElements.concat(Array.from(elList));
    });
    return new DomSawyer(foundElements);
  }

  html(str) {
    if (str) {
      this.each((el) => (el.innerHTML = str));
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  on(eventName, callback) {
    this.each(el => {
      el.addEventListener(eventName, callback);
      const key = `DomSawyerEvents-${eventName}`;
      if (typeof el[key] === "undefined") {
        el[key] = [];
      }
      el[key].push(callback);
    });
  }

  off(eventName) {
    this.each(el => {
      const eventKey = `DomSawyerEvents-${eventName}`;
      if (el[eventKey]) {
        el[eventKey].forEach(callback => {
          el.removeEventListener(eventName, callback);
        });
      }
      el[eventKey] = [];
    });
  }

  parent() {
    const parentElements = [];

    this.each(( el ) => {
      if (el.parentElement.visited === undefined) {
        parentElements.push(el.parentElement);
        el.parentElement.visited = true;
      }
    });

    parentElements.forEach((el) => (el.visited = false));
    return new DomSawyer(parentElements);
  }

  remove() {
    this.each(el => el.parentElement.removeChild(el));
  }

}

module.exports = DomSawyer;
