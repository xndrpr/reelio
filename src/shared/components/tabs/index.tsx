import React from "react";
import { Tab, TabsSC } from "./styled";

export interface Tab {
  title: string;
  isDisabled?: boolean;
}

interface Props {
  className?: string;
  activeTab: number;
  setActiveTab:
    | React.Dispatch<React.SetStateAction<number>>
    | ((tab: number) => void);
  tabs: Tab[];
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
          $isDisabled={tab.isDisabled || false}
          onClick={() => !tab.isDisabled && setActiveTab(index)}
        >
          {tab.title}
        </Tab>
      ))}
    </TabsSC>
  );
};
