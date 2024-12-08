export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.tsx?$": ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/file-mock.js',
    },
};
