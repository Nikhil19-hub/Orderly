import React, { useEffect, useState } from "react";

const useTabSwitch = (tabs, defaultTab) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);
  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [defaultTab]);
  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
  };
  return [currentTab, handleTabSwitch];
};

export default useTabSwitch;
