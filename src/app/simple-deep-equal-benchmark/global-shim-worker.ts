/// <reference lib="webworker" />

if (self['global'] === undefined) {
    Object.defineProperty(self, 'global', {
        enumerable: true,
        writable: true,
        configurable: true,
        value: self
    });
}
