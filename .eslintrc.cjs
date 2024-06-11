module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    createDefaultProgram: true,
  },
  plugins: ["react-refresh", "@tanstack/query", "@typescript-eslint"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/stable-query-client": "error",
    "react-hooks/exhaustive-deps": "off",
    // 버튼의 타입 지정 권장 제거
    "react/button-has-type": "off",
    "jsx-a11y/label-has-associated-control": "off",
    // 콘솔 예외 처리
    "no-console": "off",
    // 함수형 컴포넌트 정의하는 방식 지정
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    // 파일에서 export가 하나인 경우 export default 사용 권장 제거
    "import/prefer-default-export": "off",
    // array에 index를 key로 사용 지양 제거
    "react/no-array-index-key": "off",
    // 부모 컴포넌트에서 데이터를 받지 못할 경우 props에서 에러 발생
    "react/require-default-props": 0,
    // import 의 종속성 에러 제거
    "import/no-cycle": "off",
    // props를 사용하지 않을 경우 에러 발생 off
    "react/no-unused-prop-types": "off",
    "import/no-named-as-default": 0,
    "object-shorthand": 0,
    "@typescript-eslint/naming-convention": "off",
    // return 관련
    "consistent-return": "off",
    // 작은따옴표사용
    "@typescript-eslint/quotes": ["error", "double"],
    // 줄바꿈
    "linebreak-style": "off",
    "function-paren-newline": "off",
    "@typescript-eslint/comma-dangle": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "object-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "max-len": "off",
    "implicit-arrow-linebreak": "off",
    "no-alert": "off",
    "react/jsx-curly-newline": "off",
    "no-confusing-arrow": "off",
    "react/destructuring-assignment": "off",
    "no-template-curly-in-string":"off",
    "@typescript-eslint/no-unused-vars":"off"
  },
};
