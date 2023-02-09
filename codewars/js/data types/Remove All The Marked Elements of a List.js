Array.prototype.remove_ = function(integers, values){
  return integers.filter(item=>!values.includes(item))
}