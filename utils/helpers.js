export const shuffleArray = (array) => {
   for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   return array;
};

export const formatQuery = (input) => {
   return input.replace('_', ' ');
};

export const formatSlug = (input) => {
   return input.replace(/\W+/g, '-').toLowerCase();
};