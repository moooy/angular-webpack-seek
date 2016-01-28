var Table = (function () {
    function Table() {
        this._table = {};
        this._dirty = false;
        this.queryParams = function (params) { };
        this.checkboxHeader = false;
        this.pagination = true;
        this.sidePagination = "server";
        this.pageList = "[10,20,50,100,200]";
        this.height = 400;
        this.checkRows = [];
    }
    return Table;
})();
exports.Table = Table;
//# sourceMappingURL=table.model.js.map