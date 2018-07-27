module.exports = {
    // 指定校验的ECMAScript的版本及特性
    "parserOptions": {
      "ecmaVersion": 7, // ECMAScript版本，7为ES7
      "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
      "ecmaFeatures": { // 使用额外的语言特性
          "jsx": true // 启用JSX
      }
    },
    // 当访问未定义的变量时，no-undef 规则将发出警告
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    "env": {
      "es6": true,
      "node": true,
      "browser": true,
    },
    // 当访问未定义的变量时，no-undef 规则将发出警告
    // 脚本在执行期间访问的额外的全局变量
    "globals": {
      "document": true,
      "navigator": true,
      "window":true,
      "node":true
    },
    // 使用第三方airbnb开发配置合集
    "extends": "airbnb",
    // eslint-config-airbnb包括了以下3个插件
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    // 定义自己的规则
    "rules": {
        "comma-dangle": 0,
        "func-names": 0,
        "max-len": ["error", 160, 4, {
            "comments": 160
        }],
        "indent": ["error", 2],
        "import/prefer-default-export": 0,
        "import/extensions": ["off", "never"],
        "react/jsx-indent": [2, 2],
        "semi": 0,
        "react/sort-comp": 0,
        "react/prop-types": 0,
        "react/require-default-props": 0,
        "react/prefer-es6-class": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-filename-extension": 0,
        "react/forbid-prop-types": 0,
        "react/no-array-index-key": 0,
        "no-return-assign": 0,
        "react/no-multi-comp": 0,
        "array-callback-return": 0,
        "new-cap": 0,
        "no-nested-ternary": 0,
        "no-await-in-loop": 1,
        "no-underscore-dangle": 0,
        "no-bitwise": ["error", {
            "allow": ["~"]
        }],
        "no-console": 2,
        "no-plusplus": 2,
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-default": 1,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/img-has-alt": 0,
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "none"
        }],
        "no-param-reassign": ["error", {
            "props": false
        }],
        "object-shorthand": 0
    },
  };