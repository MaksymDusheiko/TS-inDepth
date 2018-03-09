export function sealed(name: string) {
    return function(target: Function): void {
        console.log(`sealing constractor> param: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function() {
        console.log(`CreatingNew instance`);
        console.log(target.prototype)
    }
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target
    return <TFunction > newConstructor;
}

export function writable(isWritable: boolean) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`Settingproperty:${propertyKey}`);
        descriptor.writable = isWritable;
    }
}