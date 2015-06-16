module.exports = {
    fetchArray: function(key){
      if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
      }

      return [];
    },

    saveArray: function(key, value){
      localStorage.setItem(key, JSON.stringify(value));
    }
}