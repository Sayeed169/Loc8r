// Get Home Page
module.exports.homeList = function(req, res){
    res.render('index', {title: 'Home'});
};

// Get Location Info
module.exports.locationInfo = function(req, res){
    res.render('index', {title: 'Location Info'});
}

// Get Review page
module.exports.addReview = function(req, res){
    res.render('index', {title: 'Add review'});
};