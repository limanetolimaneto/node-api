class Container{
  constructor() {
    this.bindings = {};
  }

  bind(key, factory) {
    this.bindings[key] = factory;
  }
  
  resolve(key) {
    const factory = this.bindings[key];

    if (!factory) {
      throw new Error(`Dependency "${key}" not found`);
    }

    return factory(this);
  }
}

const container = new Container();

require('./user.container')(container);

require('./client.container')(container);

module.exports = container;



