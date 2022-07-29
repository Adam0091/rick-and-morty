module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [{
        "files": ["*.jsx", "*.js"]
    }],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react"
    ],
    "rules": {
        "no-unused-vars": 0,
        "prettier/prettier": 1
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}