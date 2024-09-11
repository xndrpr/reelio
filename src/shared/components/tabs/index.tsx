import React from "react";
import { LinkTab, Tab, TabsSC } from "./styled";

export interface Tab {
  title: string;
  link?: string;
  isDisabled?: boolean;
}

interface Props {
  className?: string;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  tabs: Tab[];
}

export const Tabs = ({ className, activeTab, setActiveTab, tabs }: Props) => {
  return (
    <TabsSC
      className={className}
      $tabsCount={tabs.length}
      $activeTab={activeTab}
    >
      {tabs.map((tab, index) => {
        return tab.link ? (
          <LinkTab
            key={index}
            $isActive={activeTab === index}
            $isDisabled={tab.isDisabled || false}
            href={tab.link}
          >
            {tab.title}
          </LinkTab>
        ) : (
          <Tab
            key={index}
            $isActive={activeTab === index}
            $isDisabled={tab.isDisabled || false}
            onClick={() => !tab.isDisabled && setActiveTab(index)}
          >
            {tab.title}
          </Tab>
        );
      })}
    </TabsSC>
  );
};
