module.exports = class DatabaseMapper{

    static MapUserRating(UserModel){
        const ratingArray = UserModel.rates;
        console.log(`RatingArray ${ratingArray}`);
        const sum = ratingArray.map(x => x.rating).reduce((a, b) => a + b, 0);
        const avg = (sum / ratingArray.length) || 0;
        return avg; 
    }
    
}