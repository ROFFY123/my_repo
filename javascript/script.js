function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(name => name.length < 5);
para.textContent = shortNames;


