function spinalCase(str) {
  const regEx  = /([a-z])([A-Z])/g;
  const regEx1 = /\s+|_+/g;
  const subst  = '-';
  
  const result = str.replace(regEx, '$1-$2')
                    .replace(regEx1, '-')
                    .toLowerCase();
  
  return result
}

spinalCase('This Is Spinal Tap');
