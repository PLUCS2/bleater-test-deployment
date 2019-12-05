module.exports = {
  fetchBleats() {
    return $.ajax({
      method: "GET",
      url: "/api/bleats"
    });
  },

  createBleat(body) {
    // debugger; //return your ajax requests! 
    return $.ajax({ 
      method: "POST",
      url: "/api/bleats",
      data: {bleat: {body: body, author_id: 1}},
    });
  }, 

  fetchBleat(id) {
    return $.ajax({
      method: "GET", 
      url: `/api/bleats/${id}`
    })
  }
};

// module.exports = {
//   fetchBleats: fetchBleats,
//   createBleat: createBleat
// };