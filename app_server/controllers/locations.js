// Get Home Page
module.exports.homeList = function(req, res){
    res.render('locations-list', {title: 'Home'});
};

// Get Location Info
module.exports.locationInfo = function(req, res){
    res.render('locations-info', {title: 'Location Info'});
}

// Get Review page
module.exports.addReview = function(req, res){
    res.render('add-review', {title: 'Add review'});
};