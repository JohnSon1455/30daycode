
var SubrectangleQueries = function(rectangle) {
    rec = rectangle;
};


SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for(let r=row1;r<=row2;r++){
        for(let c=col1;c<=col2;c++){
            rec[r][c]=newValue;
        }
    }
}


SubrectangleQueries.prototype.getValue = function(row, col) {
     return rec[row][col];
};