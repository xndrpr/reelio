import React from "react";
import { Tab, TabsSC } from "./styled";

interface Props {
  className?: string;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  tabs: string[];
}

export const Tabs = ({ className, activeTab, setActiveTab, tabs }: Props) => {
  return (
    <TabsSC
      className={className}
      $tabsCount={tabs.length}
      $activeTab={activeTab}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          $isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </Tab>
      ))}
    </TabsSC>
  );
};
