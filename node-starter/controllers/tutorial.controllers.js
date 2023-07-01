exports.create = (req, res) => {
    res.send("POST > create response from controllers")
}

exports.findAll = (req, res) => {
    res.send("GET > get response from controllers")
}

exports.findOne = (req, res) => {
    res.send("GET > get one response from controllers")
}

exports.update = (req, res) => {
    res.send("POST > update response from controllers");
  };
  
  exports.deleteAll = (req, res) => {
    res.send("POST > delete all response from controllers");
  };

exports.deleteOne = (req, res) => {
    res.send("GET > get response from controllers")
}