class Enums {

    constructor(values, ignoreOverwrites = true) {
        this.values = Object.freeze(values);
        for (let key of Object.keys(this.values)) {
            Object.defineProperty(this, key, {
                
                get() {
                    return this.values[key];
                },

                set(value) {
                    if (!ignoreOverwrites) throw new Error("Attempting assignments on enum objects");
                }

            });
        }
    }
}

module.exports = Enums;
