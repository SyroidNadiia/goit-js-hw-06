const CounterPlugin = function ({
    initialValue = 0,
    step = 1,
  } = {}) {
    this._value = initialValue;
    this._step = step;
    this._refs = this._getRefs();
  
    this._bindEvents();
    this.updateValueUI();
  };
  
  CounterPlugin.prototype._getRefs = function () {
    const refs = {};
    refs.incrementBtn = document.querySelector('[data-action="increment"]');
    refs.decrementBtn = document.querySelector('[data-action="decrement"]');
    refs.value = document.querySelector('#value');
  
    return refs;
  };
  
  CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
      this.increment();
      this.updateValueUI();
    });
  
    this._refs.decrementBtn.addEventListener('click', () => {
      this.decrement();
      this.updateValueUI();
    });
  };
  
  CounterPlugin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;
  };
  
  CounterPlugin.prototype.increment = function () {
    this._value += this._step;
  };
  
  CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
  };
  
  new CounterPlugin();
  
  