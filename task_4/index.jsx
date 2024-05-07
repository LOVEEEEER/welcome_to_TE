import React, { useState, createContext, useContext } from "react";

const BlockContext = createContext();

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error("useBlockContext must be used within a BlockProvider");
  }
  return context;
};

export const BlockProvider = ({ children }) => {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const contextValue = {
    isActive,
    handleMouseEnter,
  };

  return <BlockContext.Provider value={contextValue}>{children}</BlockContext.Provider>;
};

export const BlockWrapper = ({ children }) => {
  const { isActive, handleMouseEnter } = useBlockContext();

  return (
    <div onMouseEnter={handleMouseEnter} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ imgSrc, imgAlt }) => (
  <BlockWrapper>
    <img src={imgSrc} alt={imgAlt} />
  </BlockWrapper>
);

export const Block2 = ({ content }) => (
  <BlockWrapper>
    <p>{content}</p>
  </BlockWrapper>
);

export const Block3 = ({ userData }) => (
  <BlockWrapper>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </BlockWrapper>
);
