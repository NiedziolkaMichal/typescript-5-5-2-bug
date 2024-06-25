import React, { createContext } from 'react';

interface TestType {
  asd: string;
}

const TestContext = createContext<TestType | null>(null);

const Component = () => {
  const renderContextValue = (testTypeOrNull: TestType) => {
    return <div>{testTypeOrNull}</div>;
  };

  return <TestContext.Consumer>{renderContextValue}</TestContext.Consumer>;
};
