exports.index = function(req, res){
  console.log(req.params.id);
  res.render(req.params.id);
};
