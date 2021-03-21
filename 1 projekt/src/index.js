var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.getInputs = function () {
        this.liczba1Input = document.querySelector('#liczba1');
        this.liczba2Input = document.querySelector('#liczba2');
        this.liczba3Input = document.querySelector('#liczba3');
        this.liczba4Input = document.querySelector('#liczba4');
        this.sumaInput = document.querySelector('#suma');
        this.sredniaInput = document.querySelector('#srednia');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.showStats = function (suma, srednia, min, max) {
        this.sumaInput.value = suma.toString();
        this.sredniaInput.value = srednia.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    StatsApp.prototype.computeData = function () {
        var liczba1 = +this.liczba1Input.value;
        var liczba2 = +this.liczba2Input.value;
        var liczba3 = +this.liczba3Input.value;
        var liczba4 = +this.liczba4Input.value;
        var suma = liczba1 + liczba2 + liczba3 + liczba4;
        var srednia = suma / 4;
        var min = Math.min(liczba1, liczba2, liczba3, liczba4);
        var max = Math.max(liczba1, liczba2, liczba3, liczba4);
        this.showStats(suma, srednia, min, max);
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.liczba1Input.addEventListener('input', function () { return _this.computeData(); });
        this.liczba2Input.addEventListener('input', function () { return _this.computeData(); });
        this.liczba3Input.addEventListener('input', function () { return _this.computeData(); });
        this.liczba4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
