const localStorageMock = {
    token: Math.random().toString(36).substr(-8),
    get: jest.fn(),
    getAll: jest.fn(),
}

global.localStorage = localStorageMock;